const myName = "Юля";
const programmingLanguage = "js";
const courseCreatorName = "Никита Михайлович Чеботов";
const reasonText = "это прикольно";
const numberOfMonth = 0;
let myTextInfo = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык 
программирования ${programmingLanguage} на курсе по ${programmingLanguage} у 
${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth}! месяцев. Я уверен(а), что пройду данный курс до конца`;
let result = myTextInfo.replaceAll(
  programmingLanguage,
  programmingLanguage.toUpperCase()
);
console.log(result);
console.log(result[0], result[264]);
console.log(result.length);
//
//
//3
let userName = prompt("Как вас зовут?");
userName = userName.toLowerCase();
userName = userName.replaceAll(" ", "");
alert(userName);
//
//
//4
// let userAge = prompt('Сколько вам лет?')
// userAge = Number(userAge)
// userAge = userAge.replace(' ', '')
// alert(`Вас зовут ${userName} и вам ${userAge} лет`)
//5
let userString = prompt("Введите текст для обрезки").trim();
const startSliceIndex = +prompt("С какого индекса обрезать?").trim(),
  endSliceIndex = +prompt("До какого индекса обрезать?").trim();

userString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${userString}`);

// 6

// let userText = prompt('Введите текст')
// let wordFromText = prompt('Введите слово из текста')
// let indexOfWord = wordFromText.indexOf(userText)
// userText = userText.slice(0, indexOfWord)
// alert(Результат: ${userText})

true;
//7

let javaScriptDescription =
  "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";
let m = Math.floor(javaScriptDescription.length);
let sliceText = javaScriptDescription.slice(0, m / 2);
sliceText = sliceText.replaceAll(" ", "");
sliceText = sliceText.replaceAll("а", "А");
sliceText = sliceText.repeat(3);
let index = sliceText.length / 2;
alert(sliceText);
alert(sliceText[index]);
