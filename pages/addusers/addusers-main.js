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

window.onbeforeunload = function () {
  return "Are you sure? The Time Will Not Work If You Reloaded The Page Several Times!";
};

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
    li.innerHTML = "Name: " + decryptedName + " Medic Name: " + decryptedMedicName + " Medic Time: " + decryptedMedicTime + " Notes: " + decryptedNotes;
    li.setAttribute("class", "datalisting");
    document.getElementById("datalist").appendChild(li);
  }


  // */> It's still in beta, tho!<\* //

  function setupInterval(callback, interval, name) {
    var key = '_timeInMs_' + (name || '');
    var now = Date.now();
    var timeInMs = localStorage.getItem(key);
    var executeCallback = function () {
      localStorage.setItem(key, Date.now());
      callback();
    }
    if (timeInMs) { // User has visited
      var time = parseInt(timeInMs);
      var delta = now - time;
      if (delta > interval) { // User has been away longer than interval
        setInterval(executeCallback, interval);
      } else { // Execute callback when we reach the next interval
        setTimeout(function () {
          setInterval(executeCallback, interval);
          executeCallback();
        }, interval - delta);
      }
    } else {
      setInterval(executeCallback, interval);
    }
    localStorage.setItem(key, now);
  }

  setupInterval(function () {
    var date = new Date();
    var currentHour = date.getHours();
    var alarm = new Audio('alarm.mp3');
    if (currentHour == decryptedMedicTime) {
      alarm.play();
      alarm.loop = true;
      alert("It's " + decryptedMedicName + " Time! " + "Please Give It To " + decryptedName + " & Your Notes Was: " + decryptedNotes)
      alarm.stop();
    }
  }, 3600000);
  // localStorage.removeItem("key");
}


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

  document.getElementById('name').value = ''
  document.getElementById('medic-name').value = ''
  document.getElementById('medic-time').value = ''
  document.getElementById('notes').value = ''

  alert("Data Sent!")

});

firebase.auth().onAuthStateChanged(function (user) {
  if (user == null) {
    window.location = '../../index.html';
   } 
});

function logout() {
  firebase.auth().signOut();
}

function deleteLocalStorage() {
  alert("If you got problems with timer such as not ring at right time you can delete the local storage & open the website again at the right time! (it's like if you want the website ring at 12:00 you need to open it at 11:00 & it will keep ring at same style everytime)");
   localStorage.removeItem("key");
   alert("Removed, done...do not forget to open the website at the right time!");
}