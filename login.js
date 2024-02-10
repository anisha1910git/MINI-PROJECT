  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
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
  auth.languageCode ='en'
  const provider = new GoogleAuthProvider();

  const googleLogin=document.getElementById("googlee");
  googleLogin.addEventListener("click",function(){
  signInWithPopup(auth,provider)
  .then((result)=> {
    const credential =GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="index.html";


  }).catch((error) =>{
    const errorCode =error.code;
    const errorMessage =error.message;
  });

  })
   
//logout code
const logout = document.querySelector("#logout");
logout.addEventListener('click', (e) =>{
  e.preventDefault();
  auth.signOut().then(() =>{
    console.log('user signed out');
  });
})