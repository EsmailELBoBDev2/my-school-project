let name = document.getElementById("name").value;
let medicName = document.getElementById("medic-name").value;
let medicTime = document.getElementById("medic-time").value;
let notes = document.getElementById("notes").value;
var database;
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB444udd_UeONooSUbjOplVqrElpHv4Hgc",
    authDomain: "my-first-project-9a87e.firebaseapp.com",
    databaseURL: "https://my-first-project-9a87e.firebaseio.com",
    projectId: "my-first-project-9a87e",
    storageBucket: "",
    messagingSenderId: "15533904472",
    appId: "1:15533904472:web:b260608b9c15e8f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  database = firebase.database();

//    document.getElementById("submit").addEventListener("click", function(event){
//     event.preventDefault()
//     var data = {
//         name: name.value,
//         MedicName: medicName.value,
//         MedicTime: medicTime.value,
//         Notes: notes.value
//       }
//     var MedicalData = database.ref('Medical Data');
//     MedicalData.push(data);
//   });




       document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    var data = {
        name: name,
        MedicName: medicName,
        MedicTime: medicTime,
        Notes: notes
      }
    var MedicalData = database.ref('Medical Data');
    MedicalData.push(data);
  });

