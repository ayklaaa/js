let ageOfPerson1 = 18;
let ageOfPerson2 = "20";
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = "Charlie";
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgLang1 = "Js";
const bestProgLang2 = "Java";
console.log(
  "Переменную const переопределить нельзя",
  bestProgLang1,
  typeof bestProgLang1,
  bestProgLang1,
  typeof bestProgLang1,
  bestProgLang2,
  typeof bestProgLang2
);

let initialValye1;
let initialValye2 = 0;
initialValye2 = initialValye1;
console.log(initialValye2, typeof initialValye2);

// var isJSProg1 = true;
// console.log("Var является устаревшим");
// var isJSProg2 = false;
// console.log("Var является устаревшим");
let isJSProg1 = true;
let isJSProg2 = false;
isJSProg2 = isJSProg1;
console.log(isJSProg2, typeof isJSProg2);

let helloText1 = "Hello!";
let helloText2 = "Провет!";
helloText2 = helloText1;
console.log(helloText2, typeof helloText2);
