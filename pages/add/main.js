let config = {
  apiKey: "AIzaSyBZHH97LQ42n7j0fBjKR7LCLXkeDq-L7iw",
  authDomain: "pro-core-169202.firebaseapp.com",
  databaseURL: "https://pro-core-169202.firebaseio.com",
  projectId: "pro-core-169202",
  storageBucket: "pro-core-169202.appspot.com",
  messagingSenderId: "58388231689"
};
firebase.initializeApp(config);

let dataRef = firebase.database().ref("data");


document.getElementById("patiatint").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  let name = getInputVal("name");
  let medicName = getInputVal("medic-name");
  let medicTime = getInputVal("medic-time");
  let notes = getInputVal("notes");

  saveData(name, medicName, medicTime, notes);

alert("Data Added!");
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveData(name, medicName, medicTime, notes) {
  let newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    medicName: medicName,
    medicTime: medicTime,
    notes: notes
  });
}

