// Function to handle click event for any heart icon
function toggleHeart(heartId, CountId) {
    let heartIcon = document.getElementById(heartId);
    let heartCount = document.getElementById(CountId);
    let count = parseInt(heartCount.textContent);

    // Toggle between filled and outline heart icon
    if (heartIcon.classList.contains('fa-heart-o')) {
        heartIcon.classList.remove('fa-heart-o');
        heartIcon.classList.add('fa-heart', 'filled-heart'); // Add filled-heart class to change color
        heartCount.textContent = count + 1; // Increase count
    } else {
        heartIcon.classList.remove('fa-heart', 'filled-heart');
        heartIcon.classList.add('fa-heart-o');
        heartCount.textContent = count - 1; // Decrease count
    }
}

const heartIds = ['heart1', 'heart2', 'heart3', 'heart4', 'heart5', 'heart6'];
heartIds.forEach((heartId, index) => {
    document.getElementById(heartId).addEventListener('click', function() {
        toggleHeart(heartId, `count${index + 1}`);
    });
});