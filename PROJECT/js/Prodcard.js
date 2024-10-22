   // Get the modal
   var modal = document.getElementById('productModel');
        
   // Get the button that opens the modal (add a class or ID to the button you use to open it)
   var button = document.getElementById('sortBtn');
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName('close')[0];
   
   // Open the modal when the button is clicked
     button.addEventListener('click', function() {
       modal.style.display = 'block';
     });
   
   // Close the modal when the <span> (x) is clicked
   span.onclick = function() {
     modal.style.display = 'none';
   }
   
   // Close the modal if the user clicks anywhere outside the modal
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = 'none';
     }
   }
   
   // Sorting Logic
   document.querySelectorAll('input[name="price"]').forEach(function(priceRadio) {
     priceRadio.addEventListener('change', applyFilters);
   });
   
   document.querySelectorAll('input[name="color"]').forEach(function(colorCheckbox) {
     colorCheckbox.addEventListener('change', applyFilters);
   });
   
   document.querySelectorAll('input[name="material"]').forEach(function(materialCheckbox) {
     materialCheckbox.addEventListener('change', applyFilters);
   });

   document.querySelectorAll('input[name="brand"]').forEach(function(brandCheckbox) {
    brandCheckbox.addEventListener('change', applyFilters);
  });
   
   function applyFilters() {
var selectedPrice = document.querySelector('input[name="price"]:checked') ? 
                 document.querySelector('input[name="price"]:checked').value : null;
var selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(el => el.value);
var selectedMaterials = Array.from(document.querySelectorAll('input[name="material"]:checked')).map(el => el.value);
var selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(el => el.value);

var products = Array.from(document.querySelectorAll('.col-4')); // Convert NodeList to Array
var visibleProductCount = 0; // Track how many products are visible

// Filter by color and material
products.forEach(function(product) {
var productColors = product.getAttribute('data-color').split(','); // Split multiple colors
var productMaterials = product.getAttribute('data-material').split(','); // Split multiple materials
var productBrands = product.getAttribute('data-brand').split(','); // Split multiple brands

// Default show product
var showProduct = true;

// Filter by color
if (selectedColors.length > 0 && !selectedColors.some(color => productColors.includes(color))) {
 showProduct = false;
}

// Filter by material
if (selectedMaterials.length > 0 && !selectedMaterials.some(material => productMaterials.includes(material))) {
 showProduct = false;
}

// Filter by brand
if (selectedBrands.length > 0 && !selectedBrands.some(brand => productBrands.includes(brand))) {
  showProduct = false;
 }

// Apply filter to product visibility
if (showProduct) {
 product.style.display = 'block';
 visibleProductCount++; // Increment visible product count
} else {
 product.style.display = 'none';
}
});

// Now handle the sorting logic
if (selectedPrice) {
products.sort(function(a, b) {
 var priceA = parseInt(a.getAttribute('data-price'));
 var priceB = parseInt(b.getAttribute('data-price'));

 if (selectedPrice === 'low-high') {
   return priceA - priceB; // Sort low to high
 } else if (selectedPrice === 'high-low') {
   return priceB - priceA; // Sort high to low
 }
});

// Append the sorted products back to the container
var productContainer = document.getElementById('productContainer');
productContainer.innerHTML = ''; // Clear existing products
products.forEach(function(product) {
 productContainer.appendChild(product); // Append each sorted product
});
}

// Show message if no products are found
var noProductsMessage = document.getElementById('noProductsMessage');
if (visibleProductCount === 0) {
noProductsMessage.style.display = 'block'; // Show the message
} else {
noProductsMessage.style.display = 'none'; // Hide the message
}
}

// Function to remove sorting and filters
function removeSorting() {
// Clear all radio buttons and checkboxes
document.querySelectorAll('input[name="price"]').forEach(function(radio) {
radio.checked = false;
});
document.querySelectorAll('input[name="color"]').forEach(function(checkbox) {
checkbox.checked = false;
});
document.querySelectorAll('input[name="material"]').forEach(function(checkbox) {
checkbox.checked = false;
});
document.querySelectorAll('input[name="brand"]').forEach(function(checkbox) {
  checkbox.checked = false;
});

// Show all products
var products = document.querySelectorAll('.col-4');
products.forEach(function(product) {
product.style.display = 'block'; // Reset display to block for all products
});

// Hide the no products message
var noProductsMessage = document.getElementById('noProductsMessage');
noProductsMessage.style.display = 'none';
}


