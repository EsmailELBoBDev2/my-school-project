var firebaseConfig = {
  apiKey: "AIzaSyAoS7gUbyUlUhf42zofuOfJM4cEphjnwV4",
  authDomain: "my-not-awesome-project-lol.firebaseapp.com",
  databaseURL: "https://my-not-awesome-project-lol.firebaseio.com",
  projectId: "my-not-awesome-project-lol",
  storageBucket: "",
  messagingSenderId: "697473006917",
  appId: "1:697473006917:web:36d7765e880db48a"
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
  // var encryptPassword = "lol";
    var decryptedName = CryptoJS.AES.decrypt(MedicalData[k].Name, "lol1").toString(CryptoJS.enc.Utf8);
    var decryptedMedicName = CryptoJS.AES.decrypt(MedicalData[k].MedicName, "lol2").toString(CryptoJS.enc.Utf8);
    var decryptedMedicTime = CryptoJS.AES.decrypt(MedicalData[k].MedicTime, "lol3").toString(CryptoJS.enc.Utf8);
    var decryptedNotes = CryptoJS.AES.decrypt(MedicalData[k].Notes, "lol4").toString(CryptoJS.enc.Utf8);

    var li = document.createElement('li');
    li.innerHTML = "Name: " + decryptedName + " Medic Name: " + decryptedMedicName + " Medic Time: " + decryptedMedicTime + " Notes:" + decryptedNotes;
    li.setAttribute("class", "datalisting");
    document.getElementById("datalist").appendChild(li);
}
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
 //   document.getElementById("test").click();

//  } else {
//    audio.pause();
//   document.getElementById("test").click();

//      } 
// }

//   setInterval(function() {
//    if (currentHour == decryptedMedicTime ) {
//     timer()
//     }
//   }, 60000);


// ------------------------------


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


// ------------------------------


// var date = new Date();
// var currentHour = date.getHours();
// console.log("lol: " + currentHour);
// var audio = new Audio('alarm.mp3');
// var starttime = localStorage.getItem("lastname");
// function testo() {
 
//     localStorage.setItem("lastname", 
//     setInterval(function() {
            
//             if(starttime == starttime) {
//               alert("its time");
//             }
//             }, 6000));
//         console.log("set");


// }


// ------------------------------


// var date = new Date();
// // This will get the Unix time aka epoch. Js adds the milliseconds which you won’t need hence the “/1000”
// var epoch = date.getTime() / 1000; 
// // localStorage.setItem("logTime", epoch);

// if (localStorage.getItem("logTime") === null) {
//   localStorage.setItem("logTime", epoch);
// } else {
//   var lastTime = localStorage.getItem("logTime") + 3600;
//   var date = new Date();
//   var currentTime = date.getTime();
//   if(currentTime > lastTime) {
    
// setInterval(function() {
            
//   alert("test")
        
// }, 6000);
//   }
// }


// function testoo() {
//   localStorage.removeItem(key);
//   console.log("removed");

// }

// console.log(localStorage.getItem("logTime"));


// ------------------------------


// function setupInterval (callback, interval, name) {
//   var key = '_timeInMs_' + (name || '');
//   var now = Date.now();
//   var timeInMs = localStorage.getItem(key);
//   var executeCallback = function () {
//     localStorage.setItem(key, Date.now());
//     callback();
//   }
//   if (timeInMs) { // User has visited
//     var time = parseInt(timeInMs);
//     var delta = now - time;
//     if (delta > interval) { // User has been away longer than interval
//       setInterval(executeCallback, interval);
//     } else { // Execute callback when we reach the next interval
//       setTimeout(function () {
//         setInterval(executeCallback, interval);
//         executeCallback();
//       }, interval - delta);
//     }
//   } else {
//     setInterval(executeCallback, interval);
//   }
//   localStorage.setItem(key, now);
// }

// setupInterval(function () {
//   console.log("test"); // function is called here
// }, 10000);



document.getElementById("encrypt").addEventListener("click", function (event) {
  event.preventDefault()

  var Name = document.getElementById("name");
  var MedicName = document.getElementById("medic-name");
  var MedicTime = document.getElementById("medic-time");
  var Notes = document.getElementById("notes");
  
  // var encryptPassword = "lol";
  var encryptedName = CryptoJS.AES.encrypt(Name.value, "lol1");
  var encryptedMedicName = CryptoJS.AES.encrypt(MedicName.value, "lol2");
  var encryptedMedicTime = CryptoJS.AES.encrypt(MedicTime.value, "lol3");
  var encryptedNotes = CryptoJS.AES.encrypt(Notes.value, "lol4");

  document.getElementById("name").value = encryptedName;
  document.getElementById("medic-name").value = encryptedMedicName;
  document.getElementById("medic-time").value = encryptedMedicTime;
  document.getElementById("notes").value = encryptedNotes;

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



