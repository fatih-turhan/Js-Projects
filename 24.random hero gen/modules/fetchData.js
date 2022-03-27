import giveRand from "./giveRandom.js";

const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

const getData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  const randomHero = data[giveRand(data)];
  const { sm: image } = randomHero.images;
  const { name } = randomHero;
  const { gender, race } = randomHero.appearance;
  const { fullName: realName, alignment } = randomHero.biography;
  return {
    image,
    name,
    gender,
    race,
    realName,
    alignment,
  };
};

export default getData;
