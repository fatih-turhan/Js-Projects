const img = document.querySelector(".img");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const btns = [...document.querySelectorAll(".btn")];

const useItems = (data) => {
  img.src = data.image;
  title.textContent = `Hero's name is`;
  text.textContent = data.name;
  btns.forEach((btn) => btn.classList.remove("btn-active"));
  btns[0].classList.add("btn-active");
  btns.forEach((btn) => {
    const selected = btn.dataset.id;
    btn.addEventListener("click", () => {
      title.textContent = `Hero's ${selected} is`;
      text.textContent = data[selected];
      btns.forEach((btn) => btn.classList.remove("btn-active"));
      btn.classList.add("btn-active");
    });
  });
};

export default useItems;
