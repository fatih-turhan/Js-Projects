// ************++++ GIVE RANDOM FROM -2 ++++**************

// sellect items
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const parent = document.querySelector(".list-of-items");
const container = document.querySelector(".items-container");
const alert = document.querySelector(".alert");
const clearBtn = document.querySelector(".clear-btn");
const randomBtn = document.querySelector(".random-btn");
const randomCont = document.querySelector(".random-value");
const randomText = document.querySelector(".random");

// ********** EVENT LISTENERS ***********
// form submition
form.addEventListener("click", addItems);
// clear all
clearBtn.addEventListener("click", clearAll);
// give random
randomBtn.addEventListener("click", giveRandom);

// init
let number = 0;
let list = [];

// ********** FUNCTIONS ***********
function addItems(e) {
  e.preventDefault();
  //value
  const value = input.value;
  if (value) {
    // push value to list
    list.push(value);
    // increase number
    number++;
    // create article
    const element = document.createElement("article");
    // inner html
    element.innerHTML = ` <p class="item-text"><span class="number">${number}.</span> ${value}</p>`;
    // set attribute
    element.setAttribute("class", "item");
    // append element
    parent.appendChild(element);
    // show-container
    container.classList.add("show-items-container");
    // alert
    showAlert("Item added to list ", "succses");
    // value = ""
    input.value = "";
  } else {
    showAlert("Add items to list ", "danger");
  }
}

// ----show alert
function showAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //   remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}
// ----give random
function giveRandom() {
  // random input from inputs
  const random = list[giveRandomNumb(list)];
  //   show random input on dom
  randomText.textContent = random;
  //   show container
  randomCont.classList.add("show-random-value");
}
// give random number from list
function giveRandomNumb(arr) {
  return Math.floor(Math.random() * arr.length);
}

function clearAll() {
  // reset list
  list = [];
  //   reset list number
  number = 0;
  //   all items added
  const items = document.querySelectorAll(".item");
  // if there are items remove from parent
  if (items.length > 0) {
    items.forEach(function (item) {
      parent.removeChild(item);
    });
  }
  // hide container
  container.classList.remove("show-items-container");
  //   reset random text
  randomText.textContent = "";
  //   hide random text container
  randomCont.classList.remove("show-random-value");
  //   reset input value
  input.value = "";
  showAlert("Items cleared", "danger");
}
