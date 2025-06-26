
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please fill in both username and password.");
  } else {
    alert(`Welcome, ${username}!`);
  }
});
