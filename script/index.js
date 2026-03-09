// logni function here
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin123") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Wrong username or password");
  }

  return false;
}l