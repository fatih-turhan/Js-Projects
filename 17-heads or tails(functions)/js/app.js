// ********** HEADS OR TAILS ***********

// sellect items
const buttonsContainer = document.querySelector(".buttons-container");
const showCompScore = document.querySelector(".computer-score");
const showYourScore = document.querySelector(".your-score");
const compChoice = document.querySelector(".comp-choice");
const yourChoice = document.querySelector(".your-choice");
const win = document.querySelector(".win");
const finalResult = document.querySelector(".final-result");

const list = ["heads", "tails"];

// scores int
let yourScore = 0;
let compScore = 0;

buttonsContainer.addEventListener("click", function (e) {
  // selections
  const selected = e.target.textContent;
  const randomFromList = list[giveRandom(list)];
  // display selections
  compChoice.textContent = randomFromList;
  yourChoice.textContent = selected;
  if (selected === randomFromList) {
    yourScore++;
    win.textContent = "you gues correctly";
  } else {
    compScore++;
    win.textContent = "you didn't gues correctly ";
  }
  // finsh the game
  if (yourScore === 3) {
    finalResult.textContent = "you won the game";
    setBackToDefault();
  }
  if (compScore === 3) {
    finalResult.textContent = "comp won the game";
    setBackToDefault();
  }
  // display scores
  showCompScore.textContent = compScore;
  showYourScore.textContent = yourScore;
});

// give random from list
function giveRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
// set back to defualt
function setBackToDefault() {
  setTimeout(function () {
    // reset scores
    yourScore = 0;
    compScore = 0;
    // reset choices
    compChoice.textContent = "";
    yourChoice.textContent = "";
    // reset show scores
    showCompScore.textContent = 0;
    showYourScore.textContent = 0;
    // reset show results
    win.textContent = "";
    finalResult.textContent = "";
  }, 3000);
}
