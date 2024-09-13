// script.js
function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessages = document.getElementById("errorMessages");
  errorMessages.innerHTML = "";

  let valid = true;

  if (username.length < 3 || username.length > 25) {
    errorMessages.innerHTML +=
      "Username must be between 3 and 25 characters.<br>";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessages.innerHTML += "Please enter a valid email address.<br>";
    valid = false;
  }

  if (password.length < 8) {
    errorMessages.innerHTML +=
      "Password must be at least 8 characters long.<br>";
    valid = false;
  }

  return valid;
}
