// ************ CALCULATER ************

class Callculate {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
    // sellect result
    this.result = document.querySelector(".result");
    // sellect buttons
    this.addBtn = document.querySelector(".add-btn");
    this.subBtn = document.querySelector(".sub-btn");
    this.multBtn = document.querySelector(".mult-btn");
    this.divBtn = document.querySelector(".div-btn");
    // bind
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mult = this.mult.bind(this);
    this.div = this.div.bind(this);
    // eventListeners
    this.addBtn.addEventListener("click", this.add);
    this.subBtn.addEventListener("click", this.sub);
    this.multBtn.addEventListener("click", this.mult);
    this.divBtn.addEventListener("click", this.div);
  }
  add() {
    const final = this.value1 + this.value2;
    this.result.textContent = `${this.value1} + ${this.value2} = ${final}`;
    submitBtn.style.display = "block";
    container.style.display = "none";
  }
  sub() {
    const final = this.value1 - this.value2;
    this.result.textContent = `${this.value1} - ${this.value2} = ${final}`;
    submitBtn.style.display = "block";
    container.style.display = "none";
  }
  div() {
    const final = this.value1 / this.value2;
    this.result.textContent = `${this.value1} / ${this.value2} = ${final}`;
    submitBtn.style.display = "block";
    container.style.display = "none";
  }
  mult() {
    const final = this.value1 * this.value2;
    this.result.textContent = `${this.value1} * ${this.value2} = ${final}`;
    submitBtn.style.display = "block";
    container.style.display = "none";
  }
}

const form = document.querySelector(".form");
const inputOne = document.querySelector(".input-one");
const inputTwo = document.querySelector(".input-two");
const container = document.querySelector(".buttons-container");
const submitBtn = document.querySelector(".submit-btn");

let calculate;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value1 = Number(inputOne.value);
  const value2 = Number(inputTwo.value);
  if (value1 && value2) {
    calculate = new Callculate(value1, value2);
    container.style.display = "grid";
    submitBtn.style.display = "none";
  } else {
    console.log("please enter a value");
  }
});
