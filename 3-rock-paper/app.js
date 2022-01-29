// rock paper scisors

const list = ["rock", "paper", "scissors"];
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit-btn");
const alert = document.querySelector(".alert");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = input.value;
  if (value === "") {
    showAlert("please enter a value");
    randomValue = list[giveRandom()];
    // console.log(randomValue);
  } else if (value === randomValue) {
    showAlert("equal");
    randomValue = list[giveRandom()];
  } else if (value === "rock" && randomValue === "paper") {
    showAlert("you losee");
    randomValue = list[giveRandom()];
  } else if (value === "rock" && randomValue === "scissors") {
    showAlert("you win");
    randomValue = list[giveRandom()];
  } else if (value === "paper" && randomValue === "rock") {
    showAlert("you win");
    randomValue = list[giveRandom()];
  } else if (value === "paper" && randomValue === "scissors") {
    showAlert("you loose");
    randomValue = list[giveRandom()];
  } else if (value === "scissors" && randomValue === "rock") {
    showAlert("you loose");
    randomValue = list[giveRandom()];
  } else if (value === "scissors" && randomValue === "paper") {
    showAlert("you win");
    randomValue = list[giveRandom()];
  }
  console.log(randomValue);
});

// alert
function showAlert(text) {
  alert.textContent = text;
  //   remove alert
  setTimeout(function () {
    alert.textContent = "";
  }, 2000);
}

// give random
function giveRandom() {
  return Math.floor(Math.random() * list.length);
}
let randomValue = list[giveRandom()];
console.log(randomValue);
