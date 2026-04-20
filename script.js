document.addEventListener("DOMContentLoaded", function () {

  /* THEME */
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  /* NAV */
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("show");
  });

  /* FAQ */
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.classList.toggle("open");
    });
  });

  /* FORM */
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("form-message");

    if (name === "" || email === "") {
      msg.textContent = "Please fill out all fields.";
    } else {
      msg.textContent = "Message sent successfully!";
    }
  });

  /* CALCULATOR */
  document.getElementById("calc-btn").addEventListener("click", function () {
    const P = parseFloat(document.getElementById("initial").value);
    const r = parseFloat(document.getElementById("rate").value) / 100;
    const t = parseFloat(document.getElementById("years").value);

    if (isNaN(P) || isNaN(r) || isNaN(t)) {
      document.getElementById("result").textContent = "Enter valid numbers.";
      return;
    }

    const FV = P * Math.pow((1 + r), t);
    document.getElementById("result").textContent =
      "Future Value: $" + FV.toFixed(2);
  });

});
