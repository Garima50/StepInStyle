

//----------------------------------js for toggle menu----------------------------------------------->
    var menuItems=document.getElementById("MenuItems");
    
    MenuItems.style.maxHeight="0px";
    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px"){
            MenuItems.style.maxHeight="200px";
        }
        else{
            MenuItems.style.maxHeight="0px";
        }
    }

//-----------------------js for product gallery-------------------->

   // Get references to the main product image and small images
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");
const smallImgs = document.querySelectorAll('.small-img-col');

// Loop through each small image container (small-img-col)
smallImgs.forEach((imgCol, index) => {
imgCol.addEventListener('click', function() {
// Remove 'selected' class from all image containers
smallImgs.forEach(img => img.classList.remove('selected'));

// Add 'selected' class to the clicked image container
this.classList.add('selected');

// Change the main product image to the clicked small image
productImg.src = smallImg[index].src;
});
});
    

// Get the modal
var modal = document.getElementById("productModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
