let clientsEstimation = [];
let answ = alert(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));
answ = Number(answ);

function askClientToGiveEstimation() {
  if (answ >= 1 && answ <= 10) {
    clientsEstimation.push(answ);
  }
}

for (let index = 0; index < 5; index++) {
  askClientToGiveEstimation();
}

// let goodEstimations = clientsEstimation.filter(answ > 5);
const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
);
// let badEstimations = clientsEstimation.filter(answ < 5);
const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);

// alert(
//   `Всего положительных оценок - ${goodEstimations},` <
//     br >
//     `Всего отрицательных оценок - ${badEstimations}`
// );
alert(
  `Всего положительных оценок - ${goodEstimations}, а плохих - ${badEstimations}`
);
