// ************ USER LOGIN ************
// sellect items
const form = document.querySelector(".form");
const inputName = document.getElementById("name");
const inputPass = document.getElementById("password");
const alert = document.querySelector(".alert");

// Event Listener
form.addEventListener("submit", logIn);

//Functions
//check inputs
function logIn(e) {
  e.preventDefault();
  // values
  const valueName = inputName.value;
  let valuePass = inputPass.value;
  valuePass = Number(valuePass);
  // logic
  if (valueName === "Fatih" && valuePass === 1234) {
    showAlert(`Hello ${valueName}`, "success");
  } else if (valueName !== "Fatih" && valuePass === 1234) {
    showAlert("Username is incorrect", "danger");
  } else if (valueName === "Fatih" && valuePass !== 1234) {
    showAlert("password is incorrect", "danger");
  } else if (valueName === "" || valuePass === "") {
    showAlert("username or password is empty", "danger");
  } else {
    showAlert("username and password is incorrect", "danger");
  }
}

// alert
function showAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}
