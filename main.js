function loginme() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if (username.value == "admin" && password.value == "admin") {
    window.open("pages/loggedin/index");
  } else {
    alert("Data are wrong, MOTHERFUCKER!" + "\n" + "Sorry but you upset me, write the correct data or leave BITCH!" + "\n" + "and Oh by the way, iam joking okay ?");
  }
}

function donotloginme() {
  window.open("pages/unloggedin/index");
}