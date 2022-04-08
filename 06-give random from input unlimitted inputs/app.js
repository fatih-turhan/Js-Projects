const form = document.querySelector(".form");
const input = document.querySelector(".input");
const randomBtn = document.querySelector(".random-btn");
const clearBtn = document.querySelector(".clear-btn");
const text = document.querySelector(".text");
const items = document.querySelector(".items");

let list = [];

// take inputs put to the list
form.addEventListener("click", function (e) {
  e.preventDefault();
  // input value
  const value = input.value;
  // if value is empty don't push
  if (value !== "") {
    list.push(value);
    items.textContent = `inputs are: ${list}`;
  }
  console.log(list);
  // when enter value delete inputs from screen
  input.value = "";
});

// give random value from list
randomBtn.addEventListener("click", function () {
  // list = list.slice(1);

  // all of items that input
  console.log(list, "this is a list");
  // what is random number
  console.log(giveRandom(list), "this is random number");
  // random item from list
  console.log(list[giveRandom(list)], "this is random value from list");
  // log items to dom
  text.textContent = `selected item is: ${list[giveRandom(list)]}`;
  items.textContent = `inputs are: ${list}`;
  // refresh list to make new list when use random
  list = [];
});

// clear all items from the list
clearBtn.addEventListener("click", function () {
  list = [];
  items.textContent = "";
});

// give number between 0 - arr.length -1
function giveRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
