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


var MedicalData = firebase.database().ref('Medical Data');

var dataRef = firebase.database().ref("Medical Data");
dataRef.on("value", gotData)


function gotData(data) {
  var datalistings = document.querySelectorAll(".datalisting");
  for (var i = 0; i < datalistings.length; i++) {
    datalistings[i].remove();
  }

  var MedicalData = data.val();
  var keys = Object.keys(MedicalData);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var decryptedName = CryptoJS.AES.decrypt(MedicalData[k].Name, "lol").toString(CryptoJS.enc.Utf8);
    var decryptedMedicName = CryptoJS.AES.decrypt(MedicalData[k].MedicName, "lol").toString(CryptoJS.enc.Utf8);
    var decryptedMedicTime = CryptoJS.AES.decrypt(MedicalData[k].MedicTime, "lol").toString(CryptoJS.enc.Utf8);
    var decryptedNotes = CryptoJS.AES.decrypt(MedicalData[k].Notes, "lol").toString(CryptoJS.enc.Utf8);

    var li = document.createElement('li');
    li.innerHTML = "Name: " + decryptedName + " Medic Name: " + decryptedMedicName + " Medic Time: " + decryptedMedicTime + " Notes:" + decryptedNotes;
    li.setAttribute("class", "datalisting");
    document.getElementById("datalist").appendChild(li);
  }

// */> ITS FOR TESTING SO YEAH THIS PART CAN BE CHANGED ANY TIME!  <\* //

// var date = new Date();
// var currentHour = date.getHours();
// console.log(currentHour);

// function timer() {
//   var audio = new Audio('alarm.mp3');
//   audio.play();
//   audio.loop = true;
//   if (confirm("It's Medic Time! " + "The Medic For: " + decryptedName + " The Medic Name Is: " + decryptedMedicName + " Its: " + decryptedMedicTime + " O'Clock" + " Your Notes Are: " + decryptedNotes)) {
//    audio.pause();
//  } else {
//    audio.pause();
//      } 
// }

//   setInterval(function() {
//    if (currentHour == decryptedMedicTime ) {
//     timer()
//     }
//   }, 60000);

}


// */> New TEST Code <\* //

// function timer() {
//   var date = new Date();
// var currentHour = date.getHours();
// const startTime = localStorage.getItem('currentHour');
// if (typeof(Storage) !== "undefined") {
//   // Store
//   localStorage.setItem("currentHour", currentHour);
// }
// if(currentHour == startTime){
  
//   alert('Timeout, 60 seconds!');
// }
// }


document.getElementById("encrypt").addEventListener("click", function (event) {
  event.preventDefault()

  var Name = document.getElementById("name");
  var MedicName = document.getElementById("medic-name");
  var MedicTime = document.getElementById("medic-time");
  var Notes = document.getElementById("notes");

  var encryptedName = CryptoJS.AES.encrypt(Name.value, "lol");
  var encryptedMedicName = CryptoJS.AES.encrypt(MedicName.value, "lol");
  var EncryptedMedicTime = CryptoJS.AES.encrypt(MedicTime.value, "lol");
  var EncryptedNotes = CryptoJS.AES.encrypt(Notes.value, "lol");

  document.getElementById("name").value = encryptedName;
  document.getElementById("medic-name").value = encryptedMedicName;
  document.getElementById("medic-time").value = EncryptedMedicTime;
  document.getElementById("notes").value = EncryptedNotes;

  var data = {
    Name: document.getElementById("name").value,
    MedicName: document.getElementById("medic-name").value,
    MedicTime: document.getElementById("medic-time").value,
    Notes: document.getElementById("notes").value
  }
  document.getElementById("name").disabled = true;
  document.getElementById("medic-name").disabled = true;
  document.getElementById("medic-time").disabled = true;
  document.getElementById("notes").disabled = true;

  MedicalData.push(data);

  document.getElementById("name").disabled = false;
  document.getElementById("medic-name").disabled = false;
  document.getElementById("medic-time").disabled = false;
  document.getElementById("notes").disabled = false;

alert("Data Sent!")

});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    document.getElementById("email").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("datalist").style.display = "block";
    document.getElementById("addpeople").style.display = "block";
    document.getElementById("logout").style.display = "block";

  } else {

    document.getElementById("email").style.display = "block";
    document.getElementById("password").style.display = "block";
    document.getElementById("login").style.display = "block";
    document.getElementById("addpeople").style.display = "none";
    document.getElementById("datalist").style.display = "none";
    document.getElementById("logout").style.display = "none";

  }
});

function login() {
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error: " + errorMessage + ", " + "Error Code: " + errorCode);
  });

}

function logout() {
  firebase.auth().signOut();
}



