let getSumOfNumbers;
let sum;
function getSumOfNumbers(number, type = "odd") {
  sum = 0;
}
let i;
for (i = 0; i <= number; i++) {
  switch (type) {
    case "even":
      if (i % 2 === 0) sum += i;
      break;
    case "odd":
      if (i % 2 === 1) sum += i;
      break;

    case "":
      sum += i;
      break;
  }

  return sum;
}

console.log(getSumOfNumbers(10, ""));
