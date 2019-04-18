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
  let medicTime1 = getInputVal("medic-time1");
  let medicTime2 = getInputVal("medic-time2");
  let notes = getInputVal("notes");

  saveData(name, medicName, medicTime1, medicTime2, notes);

alert("Data Added!");
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveData(name, medicName, medicTime1, medicTime2, notes) {
  let newDataRef = dataRef.push();
  newDataRef.set({
    name: name,
    medicName: medicName,
    medicTime1: medicTime1,
    medicTime2: medicTime2,
    notes: notes
  });
}





function amTime() {
  let amTime = document.getElementById('am');
  if (amTime.checked == true) {
    document.getElementById("medic-time2").value = "AM";
  }
  if (amTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function bmTime() {
  let bmTime = document.getElementById('bm');
  if (bmTime.checked == true) {
    document.getElementById("medic-time2").value = "PM";
  }
  if (bmTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function oneTime() {
  let oneTime = document.getElementById('one');
  if (oneTime.checked == true) {
    document.getElementById("medic-time1").value = "1:00";
  }
  if (oneTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function twoTime() {
  let twoTime = document.getElementById('two');
  if (twoTime.checked == true) {
    document.getElementById("medic-time1").value = "2:00";
  }
  if (twoTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function threeTime() {
  let threeTime = document.getElementById('three');
  if (threeTime.checked == true) {
    document.getElementById("medic-time1").value = "3:00";
  }
  if (threeTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function fourTime() {
  let fourTime = document.getElementById('four');
  if (fourTime.checked == true) {
    document.getElementById("medic-time1").value = "4:00";
  }
  if (fourTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function fiveTime() {
  let fiveTime = document.getElementById('five');
  if (fiveTime.checked == true) {
    document.getElementById("medic-time1").value = "5:00";
  }
  if (fiveTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function sixTime() {
  let sixTime = document.getElementById('six');
  if (sixTime.checked == true) {
    document.getElementById("medic-time1").value = "6:00";
  }
  if (sixTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function sevenTime() {
  let sevenTime = document.getElementById('seven');
  if (sevenTime.checked == true) {
    document.getElementById("medic-time1").value = "7:00";
  }
  if (sevenTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function eightTime() {
  let eightTime = document.getElementById('eight');
  if (eightTime.checked == true) {
    document.getElementById("medic-time1").value = "8:00";
  }
  if (eightTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function nineTime() {
  let nineTime = document.getElementById('nine');
  if (nineTime.checked == true) {
    document.getElementById("medic-time1").value = "9:00";
  }
  if (nineTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function tenTime() {
  let tenTime = document.getElementById('ten');
  if (tenTime.checked == true) {
    document.getElementById("medic-time1").value = "10:00";
  }
  if (tenTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function elevenTime() {
  let elevenTime = document.getElementById('eleven');
  if (elevenTime.checked == true) {
    document.getElementById("medic-time1").value = "11:00";
  }
  if (elevenTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}

function twelveTime() {
  let twelveTime = document.getElementById('twelve');
  if (twelveTime.checked == true) {
    document.getElementById("medic-time1").value = "12:00";
  }
  if (twelveTime.checked == false) {
    document.getElementById("medic-time1").value = "";
  }
}
