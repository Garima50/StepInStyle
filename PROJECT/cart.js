/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
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
            window.location.href = 'thank-you.html';  // Thank you/confirmation page
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
