const date1 = new Date();
const date2 = new Date("2024-04-10");

// Вычисляем разность между датами в днях
const differenceInDays = Math.round(date2 - date1); //разность дней в миллисекундах
const convertMsToDaysy = Math.round(differenceInDays / (1000 * 60 * 60 * 24)); //перевод миллисекунд

console.log(convertMsToDaysy); // В результате выводится количество дней
