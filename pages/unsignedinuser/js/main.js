// Initialize Firebase
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

  $("#dataShow").append("<tr><td>" + "الملاحظات: " + notes + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + medicTime1 + "</td><td>" + medicTime2 + " :الميعاد" + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + "إسم الدواء: " + medicName + "</td><td>" + "&nbsp;&nbsp;--&nbsp;&nbsp;" + "الإسم: " + name + "<br>");
})




function normallogin() {
  window.open("addpatient/add.html");
}
