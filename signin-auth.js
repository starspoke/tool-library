// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Ob8UMuyPsWWaQJE8R73WVgUK33OHJVc",
  authDomain: "tool-library-e8e06.firebaseapp.com",
  databaseURL:
    "https://tool-library-e8e06-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tool-library-e8e06",
  storageBucket: "tool-library-e8e06.appspot.com",
  messagingSenderId: "67650459658",
  appId: "1:67650459658:web:37fdbd4ff52a58758467f3",
  measurementId: "G-H7LQN191WH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// Sign Up
document.getElementById("signUp").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  var username = document.getElementById("signup-username").value;

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      alert("User created!");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Sign In
document.getElementById("signIn").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  var email = document.getElementById("signin-email").value;
  var password = document.getElementById("signin-password").value;

  // Sign in user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert("Signed in successfully!");
      window.location.href = "index.html"; // Redirect to index after successful sign-in
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});


// Check authentication state on page load, show/hide signin forms
//window.addEventListener("DOMContentLoaded", () => {
//  const unsubscribe = onAuthStateChanged(auth, (user) => {
//    if (user) {
//      // User is signed in, hide sign up and sign in forms
//      document.getElementById("signup-box").style.display = "none";
//      document.getElementById("signin-box").style.display = "none";
//    } else {
//      // User is not signed in, hide sign-out button
//      document.getElementById("signout-box").style.display = "none";
//    }
//  });
//});
