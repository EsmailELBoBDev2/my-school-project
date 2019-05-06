let name = document.getElementById("name").value;
let medicName = document.getElementById("medic-name").value;
let medicTime = document.getElementById("medic-time").value;
let notes = document.getElementById("notes").value;

let myPassword = "trailing-abridge-uncoated-arousal-treason-chip-drop-down-raving-landmark-gift-trifle-unlovable-portside-wanted-skewed-only-yam-pennant-catnap-oversold";

let encryptedName = CryptoJS.AES.encrypt(name, myPassword);
let encryptedMedicName = CryptoJS.AES.encrypt(medicName, myPassword);
let encryptedMedicTime = CryptoJS.AES.encrypt(medicTime, myPassword);
let encryptedNotes = CryptoJS.AES.encrypt(notes, myPassword);

// let decryptedName = CryptoJS.AES.decrypt(encryptedName, myPassword);
// let decryptedMedicName = CryptoJS.AES.decrypt(encryptedMedicName, myPassword);
// let decryptedMedicTime = CryptoJS.AES.decrypt(encryptedMedicTime, myPassword);
// let decryptedNotes = CryptoJS.AES.decrypt(encryptedNotes, myPassword);


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
  document.getElementById("demo0").innerHTML = encryptedName;
  document.getElementById("demo1").innerHTML = encryptedMedicName;
  document.getElementById("demo2").innerHTML = encryptedMedicTime;
  document.getElementById("demo3").innerHTML = encryptedNotes;
  saveData(demo0.innerHTML, demo1.innerHTML, demo2.innerHTML, demo3.innerHTML);

}



function saveData(demo0, demo1, demo2, demo3) {
  let newDataRef = dataRef.push();
  newDataRef.set({
    name: demo0,
    medicName: demo1,
    medicTime: demo2,
    notes: demo3
  });
alert("Data Added!");
}


function popupMore() {
  let popupMore = window.open("more", "Table Of 24 Time Formates", "width=200,height=100");
}