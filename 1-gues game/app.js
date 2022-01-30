// ************* GUES THE DICE **********

const form = document.querySelector(".form");
const formValue = document.querySelector(".value");
const text = document.querySelector(".text");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(randomNumber);
  let value = formValue.value;
  value = Number(value);
  if (value === randomNumber) {
    // console.log("you found it");
    text.textContent = "you found the value";
  } else if (value !== randomNumber) {
    // console.log("its is not true");
    text.textContent = "you didn't find the value";
  }
  if (value > 6) {
    text.textContent = "it has to be less than 6";
    // console.log("it has to be less than 6");
  }
  if (value < 0) {
    text.textContent = "it has to be bigger than 0";
    // console.log("it has to bes bigger than 0");
  }
});
// console.log(randomNumber);
function random() {
  return Math.floor(Math.random() * 7);
}
const randomNumber = random();
