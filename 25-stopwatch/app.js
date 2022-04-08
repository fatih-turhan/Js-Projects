// elements
const getTens = document.querySelector(".tens");
const getSec = document.querySelector(".seconds");
const getMin = document.querySelector(".minutes");

// buttons
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");

// init values
let tens = 0;
let seconds = 0;
let minutes = 0;

// increase fucntionaltiy
let interval;
const increase = () => {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSec.innerHTML = "0" + seconds;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSec.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    getMin.innerHTML = "0" + minutes;
    seconds = 0;
    getSec = "0" + 0;
  }
  if (minutes > 9) {
    minutes.innerHTML = minutes;
  }
};

// start
startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(increase, 10);
});
// reset
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  getTens.innerHTML = tens;
  getSec.innerHTML = seconds;
  getMin.innerHTML = minutes;
});
// stop
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
