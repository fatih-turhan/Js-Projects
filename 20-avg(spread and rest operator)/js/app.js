// *********** AVG *************

// sellect elements
const form = document.querySelector(".form");
const inputOne = document.querySelector(".input-one");
const inputTwo = document.querySelector(".input-two");
const submitBtn = document.querySelector(".submit-btn");
const avgBtn = document.querySelector(".avg-btn");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
const nameResult = document.querySelector(".name");

// init
let list = [];
let valueOne;

inputTwo.style.display = "none";
avgBtn.style.display = "none";

// form submit
form.addEventListener("submit", (e) => {
  // prevent ref
  e.preventDefault();
  // get input
  valueOne = inputOne.value;
  const valueTwo = inputTwo.value;
  // push inputs
  if (valueTwo !== "") {
    list.push(valueTwo);
    avgBtn.style.display = "block";
  }
  console.log(list);
  console.log(valueTwo);

  // hide
  inputOne.style.display = "none";
  inputTwo.style.display = "block";
  // reset
  inputTwo.value = "";
});

// give avg
avgBtn.addEventListener("click", () => {
  // logic
  const giveAvg = (name, ...scores) => {
    // const sum = scores.reduce((tot, num) => {
    //   tot += num;
    //   return tot;
    // });
    // const sum = scores.reduce((total, num) => (total += num), 0);

    let sum = 0;
    for (const number of scores) {
      sum += Number(number);
    }

    const avg = sum / scores.length;
    result.style.display = "block";

    resultText.textContent = avg;
    nameResult.textContent = name;
  };
  giveAvg(valueOne, ...list);
});
