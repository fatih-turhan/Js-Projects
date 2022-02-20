// Closure
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    console.log("selector is wrong");
  }
}

// factory function
function counter(element) {
  // init resultValue
  let resultValue = 0;

  // sellect result and container
  const container = element;
  const result = element.querySelector(".result");

  // closure function
  function returnFunction() {
    // increase
    function increase() {
      resultValue++;
      result.textContent = resultValue;
    }
    // decrease
    function decrease() {
      resultValue--;
      result.textContent = resultValue;
    }
    // reset
    function reset() {
      resultValue = 0;
      result.textContent = resultValue;
    }
    return { increase: increase, decrease: decrease, reset: reset };
  }
  //container event
  container.addEventListener("click", function (e) {
    const selected = e.target.textContent;
    if (selected === "increase") {
      returnFunction().increase();
    } else if (selected === "decrease") {
      returnFunction().decrease();
    } else {
      returnFunction().reset();
    }
  });
}
const counterOne = counter(getElement(".counter-one"));
const counterTwo = counter(getElement(".counter-two"));
