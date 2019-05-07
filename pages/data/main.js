config = {
  apiKey: "AIzaSyBZHH97LQ42n7j0fBjKR7LCLXkeDq-L7iw",
  authDomain: "pro-core-169202.firebaseapp.com",
  databaseURL: "https://pro-core-169202.firebaseio.com",
  projectId: "pro-core-169202",
  storageBucket: "pro-core-169202.appspot.com",
  messagingSenderId: "58388231689"
};
firebase.initializeApp(config);

let dataRef = firebase.database().ref("data");

dataRef.on("child_added", snap => {

  let name = snap.child("name").val();
  let medicName = snap.child("medicName").val();
  let medicTime = snap.child("medicTime").val();
  let notes = snap.child("notes").val();

  let myPassword = "lol";

  let decryptedName = CryptoJS.AES.decrypt(name, myPassword).toString(CryptoJS.enc.Utf8);
  let decryptedMedicName = CryptoJS.AES.decrypt(medicName, myPassword).toString(CryptoJS.enc.Utf8);
  let decryptedMedicTime = CryptoJS.AES.decrypt(medicTime, myPassword).toString(CryptoJS.enc.Utf8);
  let decryptedNotes = CryptoJS.AES.decrypt(notes, myPassword).toString(CryptoJS.enc.Utf8);
  
  $("#dataShowEncrypted").append("<tr><td>" + "Name: " + name + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Name: " + medicName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Time: " + medicTime + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Notes: " + notes + "<br>");
  $("#dataShowDecrypted").append("<tr><td>" + "Name: " + decryptedName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Name: " + decryptedMedicName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Time: " + decryptedMedicTime + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Notes: " + decryptedNotes + "<br>");

let date = new Date();
let currentHour = date.getHours();
console.log("Your current PC time is: " + currentHour);

setInterval(function(){ 
location.reload();
}, 3600000);

setTimeout(function(){ 
if (medicTime == currentHour) {
const alarm = new Audio()
alarm.src = 'alarm.mp3'
console.log("it's " + medicName + " Time!");
    alarm.play()
}
}, 1 );

})




  // setInterval(function(){ 
  // if (decryptedMedicTime == currentHour) {
  // const alarm = new Audio()
  // alarm.src = 'alarm.mp3'
  // console.log("it's " + medicName + " Time!");
  //     alarm.play()
  // }
  // }, 3600000);

  // This will not work in snippet because sandboxing

  // This will not work in snippet because sandboxing
  // This will not work in snippet because sandboxing


  // setTimeout(function() {
  //   $("#test").trigger('click');
  // },10);



  // This will not work in snippet because sandboxing
  // $('#test').click(
  //   () => localStorage.setItem('start', new Date().getTime()) // Time in ms from 1 Jan 1970
  // )

  // checkTime = () => {
  //   //if no date set in localstorage...
  //   if (!localStorage.getItem('start')) {
  //     clearInterval(myInterval);
  //   }
  //   const currentTime = new Date().getTime();
  //   const startTime = localStorage.getItem('start');
  //   if (currentTime - startTime > 60000) { // if 60s are passed
  //     clearInterval(myInterval); // Unregister interval
  //     if (decryptedMedicTime == currentHour) {
  //       const alarm = new Audio()
  //       alarm.src = 'alarm.mp3'
  //       console.log("it's " + medicName + " Time!");
  //       alarm.play()
  //     }
  //   }
  // }

  // // Run the check every seconds
  // const myInterval = setInterval(checkTime, 1000);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
document.getElementById("loginsys").style.display = "none";
document.getElementById("dataShowEncrypted").style.display = "none";
document.getElementById("dataShowDecrypted").style.display = "block";
document.getElementById("logout").style.display = "block";


  } else {
    document.getElementById("loginsys").style.display = "block";
    document.getElementById("dataShowEncrypted").style.display = "block";
    document.getElementById("dataShowDecrypted").style.display = "none";
    document.getElementById("logout").style.display = "none";

      }
});

function login(){
let userEmail = document.getElementById("email").value;
let userPass = document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert("Error: " + errorMessage + ", " + "Error Code: " + errorCode );
});

}

function logout() {
  firebase.auth().signOut();
  
}