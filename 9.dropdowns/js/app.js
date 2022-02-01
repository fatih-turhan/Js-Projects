// ************* ACCORDION MENUS ************

// with parent element
// const questionHeading = document.querySelectorAll(".question-heading");

// questionHeading.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// with from parent
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // sellect btn from specific question
  const btn = question.querySelector(".question-heading");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
