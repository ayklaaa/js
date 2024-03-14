const Guestion = [
  "JS появился в 1995 году?",
  "Спецификация Js чтото там",
  "чтото",
];

const correctAnswers = [true, false, true];

Guestion.forEach((question, index) => {
  let answer = confirm(question);
  if (answer === correctAnswers[index]) {
    alert("Верно!");
  } else {
    alert("Неверно!");
  }
});
