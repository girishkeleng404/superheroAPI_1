const newBtn1 = document.querySelector("#btn1");
const heroImage = document.querySelector(".images");
const name = document.querySelector("#name");
const powerstats = document.querySelector("#powerstats");
const durability = document.querySelector("#durability");
const intelligence = document.querySelector("#intelligence");
const power = document.querySelector("#power");
const speed = document.querySelector("#speed");
const strength = document.querySelector("#strength");
// biography
const alignment = document.querySelector("#alignment");
const alterEgos = document.querySelector("#alterEgos");
const firstAppearance = document.querySelector("#firstAppearance");
const placeOfBirth = document.querySelector("#placeOfBirth");
const publisher = document.querySelector("#publisher");
const aliases = document.querySelector("#aliases");
//  appearance
const eyeColor = document.querySelector("#eyeColor");
const gender = document.querySelector("#gender");
const hairColor = document.querySelector("#hairColor");
const height = document.querySelector("#height");
const race = document.querySelector("#race");
const weight = document.querySelector("#weight");

const codeName = document.querySelector("#codeName");


const base_URL = `https://akabab.github.io/superhero-api/api/id`;
const js = `json`;

newBtn1.textContent = "Random hero";

const getSuperhero = (id) => {
  fetch(`${base_URL}/${id}.${js}`)
    .then((Response) => Response.json())
    .then((json) => {
      console.log(json);

      heroImage.innerHTML = `<img src="${json.images["lg"]}"/>`;
      name.textContent = `fullName: ${json.biography["fullName"]}`;
      alignment.textContent = `Alignment :    ${json.biography["alignment"]}`;
      alterEgos.textContent = `alterEgos : ${json.biography["alterEgos"]}`;
      firstAppearance.textContent = `First appearance : ${json.biography["firstAppearance"]}`;
      placeOfBirth.textContent = `Place of birth : ${json.biography["placeOfBirth"]}`;
      publisher.textContent = `Publisher : ${json.biography["publisher"]}`;
      aliases.textContent = `Aliases : ${json.biography["aliases"]}`;
      powerstats.textContent = `combat : ${json.powerstats["combat"]} `;
      durability.textContent = `durability : ${json.powerstats["durability"]} `; 
      intelligence.textContent = `intelligence: ${json.powerstats["intelligence"]} `;
      power.textContent = `power:  ${json.powerstats["power"]} `;
      speed.textContent = `speed:  ${json.powerstats["speed"]} `;
      strength.textContent = `strength:  ${json.powerstats["strength"]} `;
      // appearance
      eyeColor.textContent = `eyeColor : ${json.appearance["eyeColor"]}`;
      gender.textContent = `gender: ${json.appearance["gender"]} `;
      hairColor.textContent = `hairColor:  ${json.appearance["hairColor"]} `;
      height.textContent = `height:  ${json.appearance["height"]} `;
      weight.textContent = `weight:  ${json.appearance["weight"]} `;
      race.textContent = `race:  ${json.appearance["race"]} `;
      codeName.textContent = `  ${json.name}`

      // document.body.style.backgroundImage = "url()"
    });
};
getSuperhero(410);

const randomNum = () => {
  const numberOfHeros = 731;
  return Math.floor(Math.random() * numberOfHeros) + 1;
};
newBtn1.onclick = () => getSuperhero(randomNum());

// newBtn1.onclick = () => {
//   let random = Math.floor(Math.random() * 1000)
//   console.log(random)
// }

// const img = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/20-amazo.jpg"
