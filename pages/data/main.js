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
  
  $("#dataShow").append("<tr><td>" + "Name: " + decryptedName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Name: " + decryptedMedicName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Time: " + decryptedMedicTime + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Notes: " + decryptedNotes + "<br>");

// let date = new Date();
// let currentHour = date.getHours();
// console.log("Your current PC time is: " + currentHour);

// setInterval(function(){ 
// location.reload();
// }, 300000);

// setTimeout(function(){ 
// if (medicTime == currentHour) {
// const alarm = new Audio()
// alarm.src = 'alarm.mp3'
// console.log("it's " + medicName + " Time!");
//     alarm.play()
// }
// }, 1 );

})



