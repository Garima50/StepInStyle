/* Set rates + misc */
var taxRate = 0.05; // Tax rate
var shippingRate = 0.00; // Shipping rate
var fadeTime = 300; // Fade time for animations

/* Assign actions */
$('.product-quantity input').change(function() {
  updateQuantity(this); // Update quantity when changed
});

$('.product-removal button').click(function() {
  removeItem(this); // Remove item from cart
});

/* Recalculate cart */
function recalculateCart() {
  var subtotal = 0;

  /* Sum up row totals */
  $('.product').each(function() {
    // Get the line price as a float number without any currency symbols
    var linePrice = parseFloat($(this).find('.product-line-price').text().replace(/,/g, '').trim());
    subtotal += linePrice; // Add to subtotal
  });

  /* Calculate totals */
  var tax = subtotal * taxRate; // Calculate tax
  var shipping = (subtotal > 0 ? shippingRate : 0); // Determine shipping cost
  var total = subtotal + tax + shipping; // Calculate total

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    // Display values with the "₹" symbol, formatted for Indian currency
    $('#cart-subtotal').html(subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 }));
    $('#cart-tax').html(tax.toLocaleString("en-IN", { minimumFractionDigits: 2 }));
    $('#cart-shipping').html(shipping.toLocaleString("en-IN", { minimumFractionDigits: 2 }));
    $('#cart-total').html(total.toLocaleString("en-IN", { minimumFractionDigits: 2 }));

    // Show or hide checkout button based on total
    if (total === 0) {
      $('.checkout').fadeOut(fadeTime);
    } else {
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime); // Show updated totals
  });
}

/* Update quantity */
function updateQuantity(quantityInput) {
  var productRow = $(quantityInput).closest('.product'); // Get the product row
  var price = parseFloat(productRow.data('price')); // Fetch price from data attribute
  var quantity = parseFloat($(quantityInput).val()); // Get quantity value
  var linePrice = price * quantity; // Calculate line price

  /* Update line price display and recalculate cart totals */
  productRow.find('.product-line-price').each(function() {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })); // Display formatted line price
      recalculateCart(); // Recalculate cart totals
      $(this).fadeIn(fadeTime); // Show updated line price
    });
  });
}

/* Remove item from cart */
function removeItem(removeButton) {
  var productRow = $(removeButton).closest('.product'); // Get the product row
  productRow.slideUp(fadeTime, function() {
    productRow.remove(); // Remove product from the DOM
    recalculateCart(); // Recalculate totals
  });
}



// Get modal and button elements
var modal = document.getElementById('payment-modal');
var checkoutButton = document.querySelector('.checkout');
var continueButton = document.getElementById('continue-button');
var paymentOptions = document.querySelectorAll('input[name="payment"]');
var loader = document.getElementById('loader');  // Get the loader element

// Show modal when checkout button is clicked
checkoutButton.addEventListener('click', async function() {
    loader.style.display = 'block';  // Show the loader while fetching payment methods

    // Asynchronously fetch available payment methods
    await fetchPaymentMethods();

    loader.style.display = 'none';  // Hide the loader after fetching
    modal.style.display = 'flex';  // Show the modal
});

// Continue button click event
continueButton.addEventListener('click', async function() {
    if (!continueButton.disabled) {
        loader.style.display = 'block'; // Show the loader during payment processing
        modal.style.display = 'none'; // Hide the modal
        
        // Fetch and process the selected payment asynchronously
        var selectedPayment = document.querySelector('input[name="payment"]:checked').value;
        
        try {
            await processPayment(selectedPayment);  // Async payment processing
            loader.style.display = 'none';  // Hide loader after processing
            // Redirect after successful payment processing
            window.location.href = 'thanks.html';  // Thank you/confirmation page
        } catch (error) {
            loader.style.display = 'none';  // Hide loader in case of error
            console.error("Payment failed: ", error);
            alert('Payment failed, please try again.');
        }
    }
});

// Enable continue button only after a payment option is selected
paymentOptions.forEach(function(option) {
    option.addEventListener('change', function() {
        continueButton.disabled = false;  // Enable continue button
    });
});

// Function to simulate asynchronous fetching of payment methods (e.g., from an API)
async function fetchPaymentMethods() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched payment methods'); 
            resolve();
        }, 1000); // Simulate 1 second API fetch time
    });
}

// Function to simulate asynchronous payment processing
async function processPayment(paymentMethod) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentMethod) {
                console.log(`Payment processed via ${paymentMethod}`);
                resolve();  // Resolve the promise to simulate successful payment
            } else {
                reject('No payment method selected');  // Reject in case of failure
            }
        }, 2000); // Simulate 2 second payment processing time
    });
}
