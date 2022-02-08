// ************++++ GIVE RANDOM FROM -3 ++++**************
// !!!! give random from localStorage (also edit delete specific input)

// ********** SELLECT ITEMS *********
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const alert = document.querySelector(".alert");
const container = document.querySelector(".items-container");
const parent = document.querySelector(".list-of-items");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const randomBtn = document.querySelector(".random-btn");
const randomText = document.querySelector(".random-value");
const randomResult = document.querySelector(".random");
// edit items
let editElement;
let editFlag = false;
let editID = "";

let number = 0;

// ********** EVENT LISTENERS *********
// ----form submit
form.addEventListener("submit", addItem);
// ---- clear all btn
clearBtn.addEventListener("click", clearItems);
// give random button
randomBtn.addEventListener("click", giveRandomFromLs);

// ********** FUNCTIONS *********
function addItem(e) {
  e.preventDefault();
  // increase number
  number++;
  const value = input.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    // create article
    const article = document.createElement("article");
    article.classList.add("item");
    // create atrr
    const attr = document.createAttribute("dataset-id");
    attr.value = id;
    // set attribute
    article.setAttributeNode(attr);
    // inner HTML
    article.innerHTML = `    <p class="item-text"><span class="number">${number}.</span> ${value}</p>
              <!-- edit-delte-btn -->
              <div class="buttons">
                <button class="edit-btn"><i class="far fa-edit"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
              </div>`;
    // sellect btns after create
    const editBtn = article.querySelector(".edit-btn");
    const deleteBtn = article.querySelector(".delete-btn");
    // add event listener
    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);
    // appen article
    parent.appendChild(article);
    // show container
    container.classList.add("show-items-container");
    // show alert
    showAlert("item added", "succes");
    // add local storage
    addLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.textContent = input.value;
    showAlert("item edited", "succses");
    editLocalStroge(editID, value);
    setBackToDefault();
  } else {
    showAlert("please enter a value", "danger");
  }
}

// ---- show alert
function showAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

// ---- clear all items
function clearItems() {
  // reset number
  number = 0;
  // sellect all items created
  const items = document.querySelectorAll(".item");
  // if there are items remove all from parent
  if (items.length > 0) {
    items.forEach(function (item) {
      parent.removeChild(item);
    });
  }
  // hide container
  container.classList.remove("show-items-container");
  // show alert
  showAlert("items are deleted", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// ---- delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.getAttribute("dataset-id");
  parent.removeChild(element);
  // if there is no element hide container
  if (parent.children.length === 0) {
    container.classList.remove("show-items-container");
    number = 0;
  }
  showAlert("item deleted", "danger");
  setBackToDefault();
  removeFromLocalStroage(id);
}

// ---- edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // get item text
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  input.value = editElement.textContent;
  editFlag = true;
  editID = element.getAttribute("dataset-id");
  submitBtn.textContent = "edit";
}

// ---- set back to default
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ---- give random from local storage
function giveRandomFromLs() {
  let items = giveLocalStorage();
  const random = items[randomFromList(items)].value;
  // show random text
  randomText.classList.add("show-random-value");
  // give random value
  randomResult.textContent = random;
}

// give random from list
function randomFromList(arr) {
  return Math.floor(Math.random() * arr.length);
}

// ********** LOCAL STORAGE *********
// ----- add local storage
function addLocalStorage(id, value) {
  const inputs = { id, value };
  let items = giveLocalStorage();
  items.push(inputs);
  localStorage.setItem("list", JSON.stringify(items));
}
// ----- remove from local storage
function removeFromLocalStroage(id) {
  let items = giveLocalStorage();
  console.log(items);
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
// ----- edit  local storage
function editLocalStroge(id, value) {
  let items = giveLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
// -- giveLocalStorage
function giveLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}
