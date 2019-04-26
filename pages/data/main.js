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

  $("#dataShow").append("<tr><td>" + "Name: " + name + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Name: " + medicName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Time: " + medicTime + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Notes: " + notes + "<br>");

let date = new Date();
let currentHour = date.getHours();
console.log("Your current PC time is: " + currentHour);

setInterval(function(){ 
location.reload();
}, 300000);

setTimeout(function(){ 
if (medicTime == currentHour) {
console.log("it's " + medicName + " Time!");
    const alarm = new Audio()
    alarm.src = 'alarm.mp3'
    alarm.play()
  $("#testo").append("<tr><td>" + "Name: " + name + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Name: " + medicName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Time: " + medicTime + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Notes: " + notes + "<br>");
}
}, 1 );

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

})



