// ********** HEADS OR TAILS  (OOP) ***********

// get element
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`your ${selection} is wrong`);
}
class Head {
  constructor(element) {
    // sellect items
    this.buttonsContainer = element.querySelector(".buttons-container");
    this.showCompScore = element.querySelector(".computer-score");
    this.showYourScore = element.querySelector(".your-score");
    this.compChoice = element.querySelector(".comp-choice");
    this.yourChoice = element.querySelector(".your-choice");
    this.win = element.querySelector(".win");
    this.finalResult = element.querySelector(".final-result");
    this.playAgain = element.querySelector(".play-again");
    // bind setback
    this.setBackToDefault = this.setBackToDefault.bind(this);
    // list
    this.list = ["heads", "tails"];
    // scores int
    this.yourScore = 0;
    this.compScore = 0;
    // container event list
    this.buttonsContainer.addEventListener(
      "click",
      function (e) {
        // selections
        const selected = e.target.textContent;
        const randomFromList = this.list[this.giveRandom(this.list)];
        // display selections
        this.compChoice.textContent = randomFromList;
        this.yourChoice.textContent = selected;
        // logic
        if (selected === randomFromList) {
          this.yourScore++;
          this.win.textContent = "you gues correctly";
        } else {
          this.compScore++;
          this.win.textContent = "you didn't gues correctly ";
        }
        // finsh the game
        if (this.yourScore === 3) {
          this.finalResult.textContent = "you won the game";
          this.playAgain.style.display = "inline-block";
        }

        if (this.compScore === 3) {
          this.finalResult.textContent = "comp won the game";
          this.playAgain.style.display = "inline-block";
        }
        if (this.compScore > 3 || this.yourScore > 3) {
          this.setBackToDefault();
        }

        // display scores
        this.showCompScore.textContent = this.compScore;
        this.showYourScore.textContent = this.yourScore;
      }.bind(this)
    );
    // reset btn
    this.playAgain.addEventListener("click", this.setBackToDefault);
  }
  // give random from list
  giveRandom(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  // Set back to default
  setBackToDefault() {
    // reset scores
    this.compScore = 0;
    this.yourScore = 0;
    // reset choices
    this.compChoice.textContent = "";
    this.yourChoice.textContent = "";
    // reset show scores
    this.showCompScore.textContent = "0";
    this.showYourScore.textContent = "0";
    // reset results
    this.win.textContent = "";
    this.finalResult.textContent = "";
    // hide play again
    this.playAgain.style.display = "none";
  }
}
const firstHead = new Head(getElement(".head-one"));
const secondHead = new Head(getElement(".head-two"));
