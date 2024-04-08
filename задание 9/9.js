const addZero = (numberStr) =>
  String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr); // добавляет ноль спереди числа, если длина строки равна 1

const getDateFormat = (date, separator = "-") => {
  // функцию getDateFormat принимает дату и разделитель
  const dateItem = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateArray = [dateItem, month + 1, year].map(function (item) {
    return addZero(item);
  }); //объединяет все элементы массива в одну строку
  console.log("dateArray", dateArray);

  return dateArray.join(separator);
};

console.log(getDateFormat(new Date()));
