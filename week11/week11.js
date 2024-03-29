//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph = document.getElementById("practicum0");

function makeZero() {
  paragraph.innerText = "Ты нашёл элемент и изменил его текст!";
}

document.querySelector(".b-0").onclick = makeZero;

//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const paragraph1 = document.getElementById("practicum");

function makeOne() {
  paragraph1.innerText = "привет!";
}

document.querySelector(".b-1").onclick = makeOne;

//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const span = document.getElementById("practicum2");
function makeTwo() {
  //Ваш код
  span.innerText = "Привет, Мир";
}

document.querySelector(".b-2").onclick = makeTwo;

//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

function makeThree() {
  const elem = document.querySelector("#practicum3");
  elem.innerText = "Заголовок изменен";
  //Ваш код
}

document.querySelector(".b-3").onclick = makeThree;

//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента
const block = document.querySelector("#practicum4");
function makeFour() {
  block.style.backgroundColor = "red";
  //Ваш код
}

document.querySelector(".b-4").onclick = makeFour;

//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы
let input = document.getElementById("practicum5");
function makeFive() {
  input.value = "Новое значение";
  //Ваш код
}

document.querySelector(".b-5").onclick = makeFive;

//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента
function makeSix() {
  var img = document.getElementById("practicum6");
  img.src = "newimage.jpg";
  img.alt = "Новое изображение";
}

document.querySelector(".b-6").onclick = makeSix;

//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента
let elev3 = document.querySelector("#practicum7");
function makeSeven() {
  elev3.href = "https://www.google.com";
  elev3.textContent = "Ссылка на Google";
  //Ваш код
}

document.querySelector(".b-7").onclick = makeSeven;

//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeEight() {
  let x = document.getElementById("practicum8");
  //Найдите элемент x
  //Создайте новый пункт списка y
  //Добавьте значение в созданный пункт списка y
  //Добавьте в список х новый элемент y
  let newItem = document.createElement("li");
  newItem.textContent = "Новое значение";
  x.appendChild(newItem);
}

document.querySelector(".b-8").onclick = makeEight;

//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeNine() {
  let ab = document.getElementById("practicum9");
  let newOption = document.createElement("option");
  newOption.textContent = "Новый вариант";
  newOption.value = "newOptionValue";
  ab.appendChild(newOption);
  //Найдите элемент
  //Создайте новый элемент
  //Добавьте текст в созданный эелемент
  //Добавьте новый элемент в выпадающий список
}

document.querySelector(".b-9").onclick = makeNine;

//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента

function makeTen() {
  let ten = document.getElementById("practicum10");
  ten.style.display = "none";
  //Ваш код
}

document.querySelector(".b-10").onclick = makeTen;

//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента

function makeEleven() {
  let eleven = document.getElementById("practicum11");
  eleven.style.width = "400px";
  eleven.style.height = "200px";

  //Ваш код
}

document.querySelector(".b-11").onclick = makeEleven;

//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента

function makeTwelve() {
  let twelve = document.querySelector("#practicum12");
  twelve.style.width = "400px";
  twelwe.style.height = "200px";
  twelve.classList.toggle("expanded");
  //Ваш код
}

//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

function makeThirteen() {
  let thirteen = document.getElementsByTagName("ol")[0];
  console.log(thirteen);
  thirteen.innerText = "первый!";
  //Ваш код
}

document.querySelector(".b-13").onclick = makeThirteen;

//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {
  let paragraphs = document.querySelectorAll("p");
  //Найдите все элементы <p>
  //const paragraphs = ваш код;
  paragraphs.forEach(function (paragraph) {
    paragraph.innerText = "Огого, что могу!";

    //Измените их текстовое содержимое у paragraph
  });
}

document.querySelector(".b-14").onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента

function makeFifteen() {
  //Ваш код
  let fifteen = document.getElementById("practicum15");
  fifteen.classList.remove("practicum15");
}

document.querySelector(".b-15").onclick = makeFifteen;

//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента

function makeSixteen() {
  let sixteen = document.getElementById("practicum16");
  sixteen.classList.add("practicum16");
  //Ваш код
}

document.querySelector(".b-16").onclick = makeSixteen;

//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента

function makeSeventeen() {
  //Ваш код
  let seventeen = document.getElementById("practicum17");
  seventeen.classList.toggle("color");
}

document.querySelector(".b-17").onclick = makeSeventeen;

//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента

function makeEighteen() {
  let eighteen = document.getElementById("practicum18");
  eighteen.classList.toggle("active");
  //Ваш код
}

document.querySelector(".b-18").onclick = makeEighteen;

//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента

function makeNineteen() {
  let eighteen = document.getElementById("practicum19");
  eighteen.classList.remove("active");
  //Ваш код
}

document.querySelector(".b-19").onclick = makeNineteen;

//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

function makeTwenty() {
  //Ваш код
  let twenty = document.getElementById("practicum20");
  let newTwenty = document.createElement("p");
  newTwenty.textContent = "Добавлено в начало";
  twenty.prepend(newTwenty);
}

document.querySelector(".b-20").onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

function makeTwentyOne() {
  let twelweOne = document.getElementById("practicum21");
  let newTwentyOne = document.createElement("p");
  newTwentyOne.textContent = "Добавлено в конец";
  twelweOne.append(newTwentyOne);

  //Ваш код
}

document.querySelector(".b-21").onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

function makeTwentyTwo() {
  //1 шаг: Найдите элемент
  let twentyTwo = document.getElementById("practicum22");
  //2 шаг: Создайте переменную, которая проверяет наличие атрибута у найденного элемента
  let newTwentyTwo = twentyTwo.hasAttribute("src");
  //3 шаг: Найдите элемент, в который нужно вставить значение
  let resultElement = document.getElementById("result22");
  //4 шаг: Добавьте в эелемент текстовое значение 2 шага. Например: переменная = 'Атрибут "src" присутствует: ' + название переменной из 2 шага;
  resultElement.textContent = 'Атрибут "src" присутствует: ' + newTwentyTwo;
}

document.querySelector(".b-22").onclick = makeTwentyTwo;

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
  let twentyThree = document.getElementById("practicum23");
  twentyThree.removeAttribute("href");

  //Ваш код
}

document.querySelector(".b-23").onclick = makeTwentyThree;

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
  let twentyFour = document.getElementById("practicum24");
  twentyFour.setAttribute("value", "Новое значение");
  //Ваш код
}

document.querySelector(".b-24").onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

function makeTwentyFive() {
  //1 шаг: Найдите элемент
  let twentyFive = document.getElementById("practicum25");
  //2 шаг: Добавьте элементу, найденному в первом шаге, атрибут: ('data-info', 'Дополнительная информация');
  twentyFive.setAttribute("data-info", "Дополнительная информация");
  //3 шаг: Запишите значение атрибута в переменную
  let newTwentyFive = twentyFive.setAttribute(
    "data-info",
    "Дополнительная информация"
  );
  //4 шаг: Найдите элемент, в который нужно вставить значение из 3 шага
  console.log(newTwentyFive.getAttribute("data-info"));
  //5 шаг: Добавьте в элемент 4 шага текстовое значение 3 шага. Например: переменная = 'Добавленный атрибут: ' + название переменной из 3 шага;
}

document.querySelector(".b-25").onclick = makeTwentyFive;

//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

const button = document.querySelector(".b-26");
const parent = button.closest(".parent");

const makeTwentySix = () => {
  parent.style.backgroundColor = "red";
};

document.querySelector(".b-26").onclick = makeTwentySix;

//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

function makeTwentySeven() {
  //Найдите переменную
  let twentySeven = document.getElementById("practicum27");
  console.log(twentySeven.classList);
  let containsHighlight = twentySeven.classList.contains("highlight");
  document.getElementById("result").textContent = containsHighlight;
  //Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
  //Найдите переменную, в которую нужно вывести результат
  //Запишите результат в переменную
}

document.querySelector(".b-27").onclick = makeTwentySeven;

//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события

const buttonTaskTwentyEight = document.getElementById("button28");

function handleClick() {
  console.log("Кнопка нажата");
}
buttonTaskTwentyEight.addEventListener("click", handleClick);
//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight

//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
let change = document.getElementById("input29");
function handleChange() {
  console.log("Значение изменено");
}
change.addEventListener("change", handleChange);
//Ваш код

//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
let mouseOver = document.getElementById("div30");
function handleMouseOver() {
  console.log("Курсор наведен на элемент");
}
mouseOver.addEventListener("mouseover", handleMouseOver);
//Ваш код
