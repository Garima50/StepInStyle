// themeSwitcher.js

// Get the button
var themeToggle = document.getElementById('themeToggle');

// Check for saved user preference in localStorage
if (localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
}

// Event listener for the toggle button
themeToggle.addEventListener('click', function() {
    // Toggle the theme
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save preference
    }
});
