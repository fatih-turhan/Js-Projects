const form = document.querySelector(".form");
const input = document.querySelector(".input");
// const randomBtn = document.querySelector(".random-btn");

let list = [];

form.addEventListener("click", function (e) {
  e.preventDefault();
  // input value
  const value = input.value;
  list.push(value);
  console.log(list);
  // ilk defa inputa tıklayınca boş bir değer dönderiyor "" o yüzden listeye 3 tane girdi girince liste toplam 4 olur yani 3 ten büyük olursa diyerek sorunu çözüyoruz
  if (list.length > 3) {
    list = list.slice(1);
    // "" değeri listeden atıyoruz
    console.log(list);
    console.log(giveRandom(list));
    console.log(list[giveRandom(list)], "random value from list");
    list = [""];
    // console.log(list);
  }
});

// give number between 0-3

function giveRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// randomBtn.addEventListener("click", function () {
//   list = list.slice(1);
//   console.log(list);
//   console.log(giveRandom(list));
//   console.log(list[giveRandom(list)]);
// });
