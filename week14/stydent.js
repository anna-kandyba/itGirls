let grades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

grades.forEach((grade, index) => {
  grades[index] = Math.floor(Math.random() * 100) + 1;
});
let sum = 0;
grades.forEach((grade) => {
  sum = sum + grade;
});
let average = sum / grades.length;
console.log(average);
console.log(grades);
console.log(sum);
let max = Math.max(...grades);
console.log(max);
let min = Math.min(...grades);
console.log(min);
let passed = grades.filter((g) => {
  return g >= 60;
});

console.log("студенты набравшие проходной балл: " + passed.length);
let failed = grades.filter((g) => {
  return g < 60;
});
console.log("студенты  не набравшие проходной балл: " + failed.length);
let letters = grades.map((a) => {
  if (a < 20) {
    return "E";
  } else if (a < 40) {
    return "D";
  } else if (a <= 59) {
    return "C";
  } else if (a <= 79) {
    return "B";
  } else {
    return "A";
  }
});
console.log(letters);
