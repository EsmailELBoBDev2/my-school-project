var firebaseConfig = {
  apiKey: "AIzaSyB444udd_UeONooSUbjOplVqrElpHv4Hgc",
  authDomain: "my-first-project-9a87e.firebaseapp.com",
  databaseURL: "https://my-first-project-9a87e.firebaseio.com",
  projectId: "my-first-project-9a87e",
  storageBucket: "",
  messagingSenderId: "15533904472",
  appId: "1:15533904472:web:b260608b9c15e8f3"
};
firebase.initializeApp(firebaseConfig);
let MedicalData = firebase.database().ref('Medical Data');

var encryptedName = CryptoJS.AES.encrypt(document.getElementById("name").value, 'lol');
var encryptedName = CryptoJS.AES.encrypt(document.getElementById("medic-name").value, 'lol');
var encryptedName = CryptoJS.AES.encrypt(document.getElementById("medic-time").value, 'lol');
var encryptedName = CryptoJS.AES.encrypt(document.getElementById("notes").value, 'lol');


document.getElementById("encrypt").addEventListener("click", function (event) {
  event.preventDefault()
  document.getElementById("encryptednameHTML").innerHTML = encryptedName;
  document.getElementById("encryptedmedicnameHTML").innerHTML = encryptedName;
  document.getElementById("encryptedmedictimeHTML").innerHTML = encryptedName;
  document.getElementById("encryptednotesHTML").innerHTML = encryptedName;


});


document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault()
  var data = {
    name: document.getElementById("encryptednameHTML").innerHTML,
    MedicName: document.getElementById("encryptedmedicnameHTML").innerHTML,
    MedicTime: document.getElementById("encryptedmedictimeHTML").innerHTML,
    Notes: document.getElementById("encryptednotesHTML").innerHTML
  }
  MedicalData.push(data);
});