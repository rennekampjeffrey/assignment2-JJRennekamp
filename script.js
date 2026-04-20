document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     THEME TOGGLE
  ========================== */
  const themeBtn = document.getElementById("theme-toggle");

  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

  /* =========================
     FAQ ACCORDION
  ========================== */
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(function (q) {
    q.addEventListener("click", function () {

      const answer = this.nextElementSibling;

      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }

    });
  });

  /* =========================
     FORM VALIDATION
  ========================== */
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("form-message");

    if (name === "" || email === "") {
      message.textContent = "Please fill out all fields.";
    } else {
      message.textContent = "Form submitted successfully!";
    }
  });

  /* =========================
     NAV MENU TOGGLE
  ========================== */
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

});
