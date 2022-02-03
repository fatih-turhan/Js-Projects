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

const btns = document.querySelectorAll(".button");
const contentsContainer = document.querySelector(".contents");
const btnsContainer = document.querySelector(".buttons");
// load items when open

window.addEventListener("DOMContentLoaded", function () {
  showItem(0);
  showButtons();
});

// show item
function showItem(object) {
  const item = reviews[object];
  contentsContainer.innerHTML = ` <article class="contents">
          <!-- img -->
          <img class="img" src="${item.img}" alt="" />
          <!-- text -->
          <p class="text">
           ${item.text}
          </p>
          <!--person,company  -->
          <p class="person-company">
            <span class="person">${item.person}</span> ,
            <span class="company"> ${item.company}</span>
          </p>
        </article>
        <!-- end of contents -->
      </div>
    </section>`;
}

// show buttons
function showButtons() {
  const buttonsId = reviews.reduce(function (values, item) {
    if (!values.includes(item.id)) {
      values.push(item.id);
    }
    return values;
  }, []);

  const addBtns = buttonsId.map(function (btn) {
    return `<div data-id="${btn}" class="button "></div>`;
  });
  btnsContainer.innerHTML = addBtns;
  // sellect buttons
  const btns = document.querySelectorAll(".button");
  // add active to first button
  const firstBtn = btnsContainer.children[0];
  firstBtn.classList.add("active");
  // filter items
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // get id from button
      const selected = e.currentTarget.dataset.id;
      showItem(selected);
      // remove active from all buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      // add active to clicked
      e.currentTarget.classList.add("active");
    });
  });
}
