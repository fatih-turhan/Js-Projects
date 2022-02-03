const reviews = [
  {
    id: 1,
    img: "./images/photo-1.jpeg",
    text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada laoreet lobortis. Integer laoreet elit enim, et placerat lectus rutrum in. Orci varius natoque penatibus et magnis dis parturient montes.",
    person: "carry watson",
    company: "microsoft",
  },
  {
    id: 2,
    img: "./images/photo-2.jpeg",
    text: "2 Nullam pellentesque sit amet justo nec dictum. Donec non enim ac tortor semper mollis eu ut massa. Fusce enim dui, efficitur ac mattis eget, consectetur nec sem. Vivamus vitae arcu vitae augue maximus.",
    person: "Jhony jhon",
    company: "hard ware",
  },
  {
    id: 1,
    img: "./images/photo-3.jpeg",
    text: "3 Nam posuere, metus ut vehicula dapibus, orci urna eleifend orci, et auctor magna eros non lacus. Curabitur elementum viverra ex, eget tempor ipsum pretium sit amet. Fusce fermentum fermentum nunc dictum porta. Etiam bibendum lacus eu felis vestibulum, condimentum dictum ante maximus. Vestibulum purus ipsum, luctus a rhoncus et, pharetra ultricies metus",
    person: "regular joe",
    company: "soft ware",
  },
];

// ********** REVIEWS ************
const btns = document.querySelectorAll(".button");
const img = document.querySelector(".img");
const textContent = document.querySelector(".text");
const person = document.querySelector(".person");
const company = document.querySelector(".company");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // get data-id from clicked
    const id = e.currentTarget.dataset.id;
    console.log(id);

    // remove active from all
    btns.forEach(function (button) {
      button.classList.remove("active");
    });
    // add active to clicked one
    e.currentTarget.classList.add("active");
    // match data id with list number
    showPerson(id);
  });
});

function showPerson(object) {
  const item = reviews[object];
  img.src = item.img;
  textContent.textContent = item.text;
  person.textContent = item.person;
  company.textContent = item.company;
}
