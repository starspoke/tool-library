
function displayHeader(pageTitle) {
    document.getElementById("pageheader").innerHTML = "<h2>" + pageTitle +
        "</h2><p><a href='home.html'>Home</a>&nbsp;&nbsp;" +
        "<a href='ideas.html'>Ideas</a>&nbsp;&nbsp;" +
        "<a href='add.html'>Add an item</a>&nbsp;&nbsp;" +
        "<a href='browse.html'>Browse the library</a>&nbsp;&nbsp;" +
        "<a href='signout.html'>Sign Out</a>&nbsp;&nbsp;</p>";
}


function displaySignedOutHeader(pageTitle) {
    document.getElementById("pageheader").innerHTML = "<h2>" + pageTitle + "</h2>";
}


function displayFooter() {
    document.getElementById("pagefooter").innerHTML = "&copy; 2024 Tool Library, by Oscar Sill";
}


function checkAuth() {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyC2Ob8UMuyPsWWaQJE8R73WVgUK33OHJVc",
        authDomain: "tool-library-e8e06.firebaseapp.com",
        databaseURL: "https://tool-library-e8e06-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "tool-library-e8e06",
        storageBucket: "tool-library-e8e06.appspot.com",
        messagingSenderId: "67650459658",
        appId: "1:67650459658:web:37fdbd4ff52a58758467f3",
        measurementId: "G-H7LQN191WH"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    // Check if user is signed in
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // No user is signed in, redirect back to sign up page
            window.location.href = "./signin-v2.html";
        }
    });

}