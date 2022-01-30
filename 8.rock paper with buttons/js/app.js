// ******** ROCK PAPER SCİSSORS *********

//------- Sellect Items
// all btns
const btns = document.querySelectorAll(".btn");
// scores
const compScore = document.querySelector(".computer-score");
const yourScore = document.querySelector(".your-score");
// choices
const compChoice = document.querySelector(".comp-choice");
const yourChoice = document.querySelector(".your-choice");
// win
const win = document.querySelector(".win");
// final
const final = document.querySelector(".final-result");

// items
const list = ["rock", "paper", "scissors"];

// score values
let yourScoreValue = 0;
let compScoreValue = 0;

// event listner
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // give random item from list
    const randomFromList = list[giveRandom(list)];
    // selected with btn
    const selected = e.currentTarget.textContent;
    // show selected items when clicked
    compChoice.textContent = randomFromList;
    yourChoice.textContent = selected;
    // if they are equal
    if (selected === randomFromList) {
      showAlert("Equal");
    } else if (selected === "rock" && randomFromList === "paper") {
      showAlert("You loose");
      compScoreValue++;
    } else if (selected === "rock" && randomFromList === "scissors") {
      showAlert("You win");
      yourScoreValue++;
    } else if (selected === "paper" && randomFromList === "rock") {
      showAlert("You win");
      yourScoreValue++;
    } else if (selected === "paper" && randomFromList === "scissors") {
      showAlert("You loose");
      compScoreValue++;
    } else if (selected === "scissors" && randomFromList === "paper") {
      showAlert("You win");
      yourScoreValue++;
    } else if (selected === "scissors" && randomFromList === "rock") {
      showAlert("You loose");
      compScoreValue++;
    }

    if (yourScoreValue === 3) {
      winLost("You won all game", "win");
      setBackToDefault();
    }
    if (compScoreValue === 3) {
      winLost("You lost all game", "lost");
      setBackToDefault();
    }

    // set scores to text content
    compScore.textContent = compScoreValue;
    yourScore.textContent = yourScoreValue;
  });
});

// give random between 0 and (array-length - 1)
function giveRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
// show alert
function showAlert(text) {
  win.classList.add("show-win");
  win.textContent = text;
}

//lost-win
function winLost(text, result) {
  final.textContent = text;
  final.classList.add("show-final-result");
  return result;
}

// set back to default
function setBackToDefault() {
  setTimeout(function () {
    // // set values to 0
    compScore.textContent = 0;
    yourScore.textContent = 0;
    // set selected to 0
    yourScoreValue = 0;
    compScoreValue = 0;
    // remove choices
    compChoice.textContent = "";
    yourChoice.textContent = "";
    // remove alert
    win.classList.remove("show-win");
    win.textContent = "";
    // remove final
    final.textContent = "";
    final.classList.remove("show-final-result");
  }, 3000);
}
