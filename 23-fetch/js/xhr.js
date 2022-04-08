// ******** XHR ********

// url
const url = "http://www.boredapi.com/api/activity/";

// get items
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

// show items when clicked
btn.addEventListener("click", () => {
  getData(url)
    .then((resp) => showData(resp))
    .catch((err) => console.log(err));
});

// get data from api
const getData = async (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          text: xhr.statusText,
          status: xhr.status,
        });
      }
    };
    xhr.send();
  });
};

const showData = (data) => {
  // data from api
  const { activity: value } = JSON.parse(data);
  // use data and show data
  text.textContent = value;
  text.classList.add("show-text");
};
