var config = {
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
  let medicTime1 = snap.child("medicTime1").val();
  let medicTime2 = snap.child("medicTime2").val();
  let notes = snap.child("notes").val();

$("#dataShow").append("<tr><td>" + "Name: " + name + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Name: " + medicName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Medic Time: " + medicTime1 + medicTime2 + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + " Notes: " + notes + "<br>");

setInterval(function() {
if (medicTime1 == "1:00" && medicTime2 == "PM") {
alert("test"); 
} //else
}
, 600)

})


