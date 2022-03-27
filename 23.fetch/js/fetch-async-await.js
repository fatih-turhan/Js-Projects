// ******** FETCH ********

// url
const url = "http://www.boredapi.com/api/activity/";

// get items
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

// show items when clicked
btn.addEventListener("click", () => {
  getData(url);
});

// get data from api
const getData = async (url) => {
  try {
    // fetch data
    const response = await fetch(url);
    const data = await response.json();
    // use data in function
    showItems(data);
  } catch (error) {
    console.log(error);
  }
};
// show items
const showItems = ({ activity: value }) => {
  text.textContent = value;
  text.classList.add("show-text");
};
