const validUser = "admin";
const validPass = "1234";

const form = document.getElementById("loginForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form reload
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === validUser && password === validPass) {
    msg.textContent = "✅ Login successful!";
    msg.style.color = "green";
    // Redirect (optional)
    // window.location.href = "dashboard.html";
  } else {
    msg.textContent = "❌ Invalid username or password.";
    msg.style.color = "red";
  }
});