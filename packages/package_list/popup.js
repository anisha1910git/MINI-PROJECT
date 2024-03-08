// Function to check if the user is authenticated using Firebase
function isFirebaseAuthenticated() {
  // Check if a Firebase user is signed in
  var user = firebase.auth().currentUser;
  return user !== null;
}

// Function to check if the user is authenticated using PHP (assuming authentication tokens are stored in cookies)
function isPHPAuthenticated() {
  // Check if the authentication token cookie is set
  // You'll need to replace 'auth_token' with the actual name of your authentication token cookie
  var authToken = getCookie('auth_token');
  return authToken !== null && authToken !== '';
}

// Function to get cookie value by name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Function to check if the user is authenticated
function isAuthenticated() {
  // Check if the user is authenticated using Firebase or PHP
  return isFirebaseAuthenticated() || isPHPAuthenticated();
}

// Add event listener to all "Book Now" links
document.querySelectorAll('.book_btn').forEach(function(link) {
  link.addEventListener('click', function(event) {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
          // If the user is not authenticated, prevent the default behavior of the link and show the login popup
          event.preventDefault(); // Prevent default behavior of the link
          document.getElementById('loginPopup').style.display = 'block'; // Show the popup
          isFirstClick = false; // Set the flag to false after the first click
      }
  });
});
