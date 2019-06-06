let name = document.getElementById("name").value;
let medicName = document.getElementById("medic-name").value;
let medicTime = document.getElementById("medic-time").value;
let notes = document.getElementById("notes").value;

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

       document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    var data = {
        name: name,
        MedicName: medicName,
        MedicTime: medicTime,
        Notes: notes
      }
    MedicalData.push(data);
  });

