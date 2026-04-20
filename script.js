document.addEventListener("DOMContentLoaded", function () {

  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(function (question) {

    question.addEventListener("click", function () {

      // Close all answers
      document.querySelectorAll(".faq-answer").forEach(function (ans) {
        ans.style.display = "none";
      });

      document.querySelectorAll(".faq-question").forEach(function (q) {
        q.classList.remove("active");
      });

      // Open clicked one
      this.classList.add("active");
      this.nextElementSibling.style.display = "block";

    });

  });

});
