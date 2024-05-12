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

// Sign Out
document.getElementById("signOutButton").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful
      alert("Signed out successfully!");
      // Redirect to sign-in page
      window.location.href = "signup.html";
    })
    .catch((error) => {
      // Handle errors
      alert(error.message);
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
