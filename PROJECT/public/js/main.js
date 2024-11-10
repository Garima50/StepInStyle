let slideIndex = 0;
let autoSlideTimeout;

// Function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Reset the index if it exceeds the number of slides
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the current slide
  slides[slideIndex-1].style.display = "block";
  
  // Clear the existing timeout and set a new one
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(() => showSlides(slideIndex += 1), 5000); // Change image every 5 seconds
}

// Initialize the slideshow
showSlides(slideIndex = 1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// If you want to add thumbnail image controls, use this function
function currentSlide(n) {
  showSlides(slideIndex = n);
}
