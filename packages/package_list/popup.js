// Flag variable to track popup display
var isFirstClick = true;

// Function to close the popup
function closePopup() {
  // Hide the popup by setting its display property to "none"
  document.getElementById('loginPopup').style.display = 'none';
}

// Function to redirect to the login page
function redirectToLogin() {
  // Redirect the user to the login page
  window.location.href = '../../user_login.html'; // Replace 'login.html' with the actual URL of your login page
}

// Add event listener to all "Book Now" links
document.querySelectorAll('.book_btn').forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Show the popup only on the first click
    if (isFirstClick) {
      event.preventDefault(); // Prevent default behavior of the link
      document.getElementById('loginPopup').style.display = 'block'; // Show the popup
      isFirstClick = false; // Set the flag to false after the first click
    }
  });
});
