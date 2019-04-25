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
console.log(currentHour);

// This will not work in snippet because sandboxing
$('#test').click(
   () => localStorage.setItem('start', new Date().getTime()) // Time in ms from 1 Jan 1970
  )

checkTime = () => {
  //if no date set in localstorage...
  if(!localStorage.getItem('start')) {
    clearInterval(myInterval);
  }
  const currentTime = new Date().getTime();
  const startTime = localStorage.getItem('start');
  if(currentTime - startTime > 60000){ // if 60s are passed
      clearInterval(myInterval); // Unregister interval
if (medicTime == currentHour) {
      console.log("it's " + medicName + " Time!" + "(It's " + medicTime + " Time!)");
  }

  }
}

// Run the check every seconds
const myInterval = setInterval(checkTime, 1000);

    

})



