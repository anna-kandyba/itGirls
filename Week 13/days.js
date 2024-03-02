let input = document.getElementById("days");
let btn = document.getElementById("button");
let prg = document.getElementById("paragraph");
function onClick() {
  let check = input.value;
  if (check === "") {
    //пустая строка
    prg.innerText = "Вы не выбрали дату.";
    prg.classList.add("parag");
  } else {
    let today = new Date();
    let days = new Date(check);
    let diff = Math.round((days - today) / 86400000);

    let str1 = `До Вашего дня рождения остался ${diff} день`;
    let str2 = `До Вашего дня рождения осталось ${diff} дней`;
    let str3 = `До Вашего дня рождения осталось ${diff} дня`;

    let lastTwo = diff % 100;
    let lastOne = diff % 10;

    console.log(lastOne, lastTwo);

    if (lastTwo >= 5 && lastTwo <= 20) {
      prg.innerText = str2;
    } else if (lastOne === 1) {
      prg.innerText = str1;
    } else if (lastOne === 2 || lastOne === 3 || lastOne === 4) {
      prg.innerText = str3;
    } else {
      prg.innerText = str2;
    }

    prg.classList.remove("parag");
  }
}
btn.addEventListener("click", onClick);
