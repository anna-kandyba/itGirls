//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
  totalSum = totalSum + i;
}
console.log(totalSum);
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
const animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}

console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (const i of array) {
  console.log(i);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];
for (const i of sentences) {
  let words = i.split(" ");
  for (const w of words) {
    console.log(w);
  }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum2 = 0;
for (const num of numbers) {
  sum2 += num;
}
console.log(sum2);
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
for (const ii of list) {
  console.log(ii.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words2 = ["Hello", "world", "!"];

for (let i = 0; i < words2.length; i++) {
  words2[i] = words2[i].toUpperCase();
}
console.log(words2);
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];
for (const letter of greeting) {
  if (vowels.includes(letter)) {
    vowelCount++;
  }
}
console.log(vowelCount);
//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ["Hello", "world", "!"];
let wrd = words.join(" ");
console.log(wrd);
//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let i = 0;
while (i <= 9) {
  i++;
  console.log(i);
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let k = 11;
while (k >= 2) {
  k--;
  console.log(k);
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let index = 0;

while (index < allNumbers.length) {
  if (allNumbers[index] <= 0) {
    allPositive = false;
    break;
  }
  index++;
}

console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let ind = 0;
do {
  if (random[ind] >= 0) {
    console.log(random[ind]);
  } else {
    break;
  }

  ind = ind + 1;
} while (ind < random.length);
//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let key = 0;
do {
  key++;
  if (key % 3 !== 0) {
    console.log(key);
  }
} while (key <= 99);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let numerator = 0;
do {
  let response = +prompt();
  numerator += response;
} while (numerator <= 100);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
let h4s = document.getElementsByTagName("h4");
for (const elem of h4s) {
  elem.style.backgroundColor = "blue";
}
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let stringLength = Math.floor(Math.random() * 6) + 1;

for (let i = 0; i < stringLength; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex];
}

console.log(randomString);
