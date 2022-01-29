const list = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "ğ",
  "h",
  "i",
  "ı",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "ö",
  "p",
  "r",
  "s",
  "ş",
  "t",
  "u",
  "ü",
  "v",
  "y",
  "z",
];

function makeWord() {
  let word = "";
  for (let i = 0; i < 6; i++) {
    word += list[giveRandom(list)];
  }
  return word;
}

// give random number from arry.length
function giveRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

console.log(makeWord());
