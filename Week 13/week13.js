//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = Date.now();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = new Date().setFullYear(2024);
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = new Date().setMonth(2);
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = new Date().setDate(1);
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date("2024-11-17");
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date("2024-9-21");
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let dataPassed = futureDate - currentDate;
console.log(dataPassed);
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date("2024-02-25");
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let pastDays = currentDate - pastDate;
console.log(pastDays);
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date("2024-03-08");
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date().setFullYear(new Date().getFullYear() + 5);
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date("2024-11-17").setFullYear(
  new Date().getFullYear() + 1
);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let dayDiff = futureYear - new Date();
console.log(dayDiff);
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = "2023-06-15T08:30:00.000Z";
const newDate = Date.parse(strDate);
console.log(newDate);
//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const timestamp = Date.parse(strDate);
console.log(timestamp);
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = "2023/06/15";
const wrongDate = Date.parse(date);
console.log(wrongDate);
if (isNaN(wrongDate)) {
  console.log("Неправильный формат даты");
} else {
  console.log("Правильный формат даты");
}
//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
  console.log("число положительное");
} else {
  console.log("число отрицатиельное");
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
let remande = number % 2;
if (remande === 0) {
  console.log("число четное");
} else {
  console.log("число нечетное");
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
let remanders = number % 3;
if (remanders === 0) {
  console.log("число кратно 3");
} else {
  console.log("число не кратно 3");
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number.toString().length === 1) {
  console.log("число однозначное");
} else {
  console.log("число не однозначное");
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number.toString().length === 2) {
  console.log("число двузначное");
} else {
  console.log("число не двузначное");
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
  console.log("число положительное или 0");
} else {
  console.log("число отрицательное");
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
let rem5 = number % 5;
let rem7 = number % 7;
if (rem5 === 0 || rem7 === 0) {
  console.log("число кратно 5 или 7");
} else {
  console.log("число не кратно 5 или 7");
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
  console.log("число отрицательное");
} else {
  console.log("число положительное");
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number.toString().length === 3 && length > 0) {
  console.log("число трехзначное положительное");
} else {
  console.log("число отрицательное не трехзначное");
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let weekDay = 6;
switch (weekDay) {
  case 1:
    console.log("понедельник");
    break;
  case 2:
    console.log("вторник");
    break;
  case 3:
    console.log("среда");
    break;
  case 4:
    console.log("четверг");
    break;
  case 5:
    console.log("пятница");
    break;
  case 6:
    console.log("суббота");
    break;
  case 7:
    console.log("воскресенье");
    break;
  default:
    break;
}
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = "E";
let fullName;

switch (direction) {
  case "N":
    console.log("Север");
    break;
  case "S":
    console.log("Юг");
    break;
  case "E":
    console.log("Восток");
    break;
  case "W":
    console.log("Запад");
    break;
  default:
    break;
}
