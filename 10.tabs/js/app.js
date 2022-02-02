const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // add active to the clicked
    e.target.classList.add("active");
    // remove active from all contents
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    // add active to clicked
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
