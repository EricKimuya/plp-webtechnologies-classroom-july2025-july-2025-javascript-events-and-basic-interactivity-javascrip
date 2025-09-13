// Part 1: Event Handling
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  // Toggle visibility of message
  message.style.display = (message.style.display === "none") ? "block" : "none";
});

// Part 2a: Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Part 2b: Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countDisplay = document.getElementById("count");

counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submission
  let valid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Confirm Password
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
    valid = false;
  } else {
    document.getElementById("confirmPasswordError").textContent = "";
  }

  // Success
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully 🎉";
    form.reset(); // clear form
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});
