function getDivisorsCount(number = 1) {
  let divisorsCount = 0;

  if (number < 0 || !Number.isInteger(number))
    alert("number должен быть целым и больше нуля");
  else {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisorsCount++;
      }
    }
  }

  return divisorsCount;
}

alert(getDivisorsCount(9));
