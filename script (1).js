const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// Simple form submission message

const form = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  formStatus.textContent = "Message sent successfully ✅";

  form.reset();

});