//           var config = {
//             apiKey: "AIzaSyBZHH97LQ42n7j0fBjKR7LCLXkeDq-L7iw",
//             authDomain: "pro-core-169202.firebaseapp.com",
//             databaseURL: "https://pro-core-169202.firebaseio.com",
//             projectId: "pro-core-169202",
//             storageBucket: "pro-core-169202.appspot.com",
//             messagingSenderId: "58388231689"
//           };
//           firebase.initializeApp(config);


// const preName = document.getElementById("name");
// const preTime = document.getElementById("time");
// const preNotes = document.getElementById("notes");

// const dbRefName = firebase.database().ref().child("name");
// dbRefName.on("value", snap => snap => console.log(snap.val()));

// const dbRefTime = firebase.database().ref().child("time");
// dbRefTime.on("value", snap => snap => console.log(snap.val()));

// const dbRefNotes = firebase.database().ref().child("notes");
// dbRefNotes.on("value", snap => console.log(snap.val()));

function checkLogin() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  var username2 = document.getElementById("username");
  var password2 = document.getElementById("password");

  if (username.value == "EsmailELBoB" && password.value == "01470258.369" || username2.value == "Ahmed" && password2.value == "0000") {
    window.open("pages/signedinuser/index.html");
  } else {
    document.getElementById("random").innerHTML = "Data is wrong, Try Again Or Try Normal Login";
  }
}

function normallogin() {
  window.open("pages/unsignedinuser/index.html");
}



