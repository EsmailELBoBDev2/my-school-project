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
}


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

  MedicalData.push(data);

});