// ********** RANDOM HERO GEN ***********
import useItems from "../modules/useItems.js";
import getData from "../modules/fetchData.js";

const randomBtn = document.querySelector(".random-btn");

const showItems = async () => {
  // return new obj from fetch
  const data = await getData();
  // use data from fetch
  useItems(data);
};

window.addEventListener("DOMContentLoaded", showItems);
randomBtn.addEventListener("click", showItems);
