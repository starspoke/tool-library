import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
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
const auth = getAuth();

// Check if user is signed in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // No user is signed in, redirect back to sign up page
    window.location.href = "./signup.html";
  }
});
