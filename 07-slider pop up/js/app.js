const pop = document.querySelector(".pop-center");
const closeBtn = document.querySelector(".close-btn");

setTimeout(function () {
  pop.classList.add("show-pop");
}, 3000);

closeBtn.addEventListener("click", function () {
  pop.classList.remove("show-pop");
});
