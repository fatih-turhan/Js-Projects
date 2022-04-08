// ******** FETCH  (promise based) ********

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
  fetch(url)
    .then((data) => data.json())
    .then((data) => showItems(data))
    .catch((err) => {
      console.log(err);
    });
};
// show items
const showItems = ({ activity: value }) => {
  text.textContent = value;
  text.classList.add("show-text");
};
