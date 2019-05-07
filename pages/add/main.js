let name = document.getElementById("name").value;
let medicName = document.getElementById("medic-name").value;
let medicTime = document.getElementById("medic-time").value;
let notes = document.getElementById("notes").value;

let myPassword = "lol";

let encryptedName = CryptoJS.AES.encrypt(name, myPassword);
let encryptedMedicName = CryptoJS.AES.encrypt(medicName, myPassword);
let encryptedMedicTime = CryptoJS.AES.encrypt(medicTime, myPassword);
let encryptedNotes = CryptoJS.AES.encrypt(notes, myPassword);

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
  document.getElementById("encryptednameHTML").innerHTML = encryptedName;
  document.getElementById("encryptedmedicnameHTML").innerHTML = encryptedMedicName;
  document.getElementById("encryptedmedictimeHTML").innerHTML = encryptedMedicTime;
  document.getElementById("encryptednotesHTML").innerHTML = encryptedNotes;
  saveData(encryptednameHTML.innerHTML, encryptedmedicnameHTML.innerHTML, encryptedmedictimeHTML.innerHTML, encryptednotesHTML.innerHTML);

}



function saveData(encryptednameHTML, encryptedmedicnameHTML, encryptedMedicTimeHTML, encryptedNotesHTML) {
  let newDataRef = dataRef.push();
  newDataRef.set({
    name: encryptednameHTML,
    medicName: encryptedmedicnameHTML,
    medicTime: encryptedMedicTimeHTML,
    notes: encryptedNotesHTML
  });
alert("Data Added!");
}


function popupMore() {
  let popupMore = window.open("more", "Table Of 24 Time Formates", "width=200,height=100");
}

