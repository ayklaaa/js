function addDays(date, days = 1) {
  const timestamp = date.getTime(); // получаем timestamp для переданной даты
  const convertDaysToMs = 24 * 60 * 60 * 1000;
  return new Date(timestamp + days * convertDaysToMs);
}

const Date = new Date();
const updatedDate = addDays(tDate, 3); // добавляем 7 дней к текущей дате
console.log(updatedDate);
