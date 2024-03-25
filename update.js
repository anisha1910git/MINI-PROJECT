  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSbEmB7oXs1gZpwR5f7QDkpgwLLbbVw9Y",
    authDomain: "travelhub-1da77.firebaseapp.com",
    projectId: "travelhub-1da77",
    storageBucket: "travelhub-1da77.appspot.com",
    messagingSenderId: "728451045135",
    appId: "1:728451045135:web:0909dcbd9e8aaec718d07a"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const user=auth.currentUser;
function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail);
  
    // Update the profile section with user data
    const usernameElement = document.getElementById("username");
    const profilePicElement = document.getElementById("profilepic");
  
    if (usernameElement && profilePicElement) {
      usernameElement.textContent = userName;
      profilePicElement.src = userProfilePicture;
    } else {
      console.error("One or more elements not found.");
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
      } else {
        alert("Create Account and Login");
      }
    });
  });
  
