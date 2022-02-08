const reviews = [
  {
    id: 0,
    img: "./images/photo-1.jpeg",
    text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet lobortis. Integer laoreet elit enim, et placerat lectus rutrum in. Orci varius natoque penatibus et magnis dis parturient montes.",
    person: "carry watson",
    company: "microsoft",
  },
  {
    id: 1,
    img: "./images/photo-2.jpeg",
    text: "2 Nullam pellentesque sit amet justo nec dictum. Donec non enim ac tortor semper mollis eu ut massa. Fusce enim dui, efficitur ac mattis eget, consectetur nec sem. Vivamus vitae arcu vitae augue maximus.",
    person: "Jhony jhon",
    company: "hard ware",
  },
  {
    id: 2,
    img: "./images/photo-3.jpeg",
    text: "3 Nam posuere, metus ut vehicula dapibus, orci urna eleifend orci, et auctor magna eros non lacus. Curabitur elementum viverra ex, eget tempor ipsum pretium sit amet. Fusce fermentum fermentum nunc dictum porta. Etiam bibendum lacus eu felis vestibulum, condimentum dictum ante maximus. Vestibulum purus ipsum, luctus a rhoncus et, pharetra ultricies metus",
    person: "joe tacho",
    company: "soft ware",
  },
  {
    id: 3,
    img: "./images/photo-4.jpeg",
    text: "4 Nam posuere, metus ut vehicula dapibus, orci urna eleifend orci, et auctor magna eros non lacus. Curabitur elementum viverra ex, eget tempor ipsum pretium sit amet. Fusce fermentum fermentum nunc dictum porta. Etiam bibendum lacus eu felis vestibulum, condimentum dictum ante maximus. s",
    person: "mouse keyboard",
    company: "headphones",
  },
];

// ********** REVIEWS ************
// sellect items
const contentContainer = document.querySelector(".contents");
const decrease = document.querySelector(".decrease-btn");
const increase = document.querySelector(".increase-btn");
const random = document.querySelector(".random-btn");

let currentItem = 0;
// display items when load
window.addEventListener("DOMContentLoaded", function () {
  showItem(currentItem);
});

// show item
function showItem(object) {
  const item = reviews[object];
  contentContainer.innerHTML = `<img class="img" src="${item.img}" alt="" />
          <p class="text">
          ${item.text}
          </p>
          <p class="person-company">
            <span class="person">${item.person}</span> ,
            <span class="company"> ${item.company}</span>
          </p>`;
}

increase.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showItem(currentItem);
  console.log(currentItem);
});

decrease.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showItem(currentItem);
  console.log(currentItem);
});
