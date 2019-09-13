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


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location = 'pages/addusers/addusers-index.html';
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