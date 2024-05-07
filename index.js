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

firebase.initializeApp(firebaseConfig);



var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;

function getFile(e) {
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;

}


function uploadImage() {

    let storageRef = firebase.storage().ref("images/" + fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_unchanged", (snapshot) => {
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal + "%";
        progress.style.width = percentVal + "%";
    }, (error) => {
        console.log("Error is ", error);
    }, () => {

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            console.log("URL", url);
        })

    })

}