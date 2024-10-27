
// JavaScript only needed for password visibility toggle
document.addEventListener("DOMContentLoaded", function() {
// Prevent form submission and validate login credentials
document.getElementById('login-form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form from submitting

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const errorMessage = document.getElementById('errorMessage');

errorMessage.textContent = '';

if (!email || !password) {
errorMessage.textContent = 'Please enter both email and password.';
return;
}

// Store email in localStorage (simplified for demonstration, not secure)
localStorage.setItem('userName', email);
alert('Login successful! Welcome to Step in Style.');
window.location.href = 'main.html'; // Redirect to homepage
});

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
event.preventDefault();
// Prevent form from submitting

const username = document.querySelector('#signup-form input[type="text"]').value;
const email = document.querySelector('#signup-form input[type="email"]').value;
const password = document.querySelector('#signup-form input[type="password"]').value;
const errorMessage = document.getElementById('errorMessage');

errorMessage.textContent = '';


// Validate fields
if (!username || !email || !password) {
errorMessage.textContent = 'Please fill in all fields.';
return;
} 
// Redirect to homepage


// You can add more validation here, such as checking if the email format is correct

// Store signup information (simplified for demonstration)
localStorage.setItem('username', username);
localStorage.setItem('userEmail', email);
localStorage.setItem('userPassword', password); // Note: Storing passwords is not secure!

localStorage.setItem('userName', email);
alert('Signup successful! Welcome to Step in Style.');
      window.location.href = 'main.html';


});

// Toggle between login and signup forms
document.getElementById('signup-link').addEventListener('click', function() {
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('signup-form').classList.remove('hidden');
      document.getElementById('login-header').classList.add('hidden');
      document.getElementById('signup-header').classList.remove('hidden');
      document.getElementById('already-account').classList.remove('hidden');
  });

  document.getElementById('login-link').addEventListener('click', function() {
      document.getElementById('signup-form').classList.add('hidden');
      document.getElementById('login-form').classList.remove('hidden');
      document.getElementById('signup-header').classList.add('hidden');
      document.getElementById('login-header').classList.remove('hidden');
      document.getElementById('already-account').classList.add('hidden');
  });

});

