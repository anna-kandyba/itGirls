const cities = [
  "Москва",
  "Санкт-Петербург",
  "Париж",
  "Токио",
  "Киото",
  "Стамбул",
  "Кокшетау",
];
let temp = [];
for (const city of cities) {
  let inputTemp = +prompt("Какая температура в " + city + "?");
  temp.push(inputTemp);
}

console.log(cities, temp);
let ul = document.getElementById("list");

for (let i = 0; i < cities.length; i++) {
  let li = document.createElement("li");
  li.innerText = `Температура в ${cities[i]} : ${temp[i]}C`;
  ul.appendChild(li);
}

let max = document.getElementById("max");
let min = document.getElementById("min");

let maxTemp = Math.max(...temp);
let minTemp = Math.min(...temp);
max.innerText = maxTemp;
min.innerText = minTemp;
