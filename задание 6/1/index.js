// function-expressions
let Name;
function GetName1(Name) {
  return `Имя ${Name}`;
}
console.log(GetName1("njj"));

// function-declaration

const GetName2 = function Name(GetName2) {
  return `Имя${Name}`;
};
console.log(GetName2("njj"));

// стрелочная функция
const GetName3 = (Name) => `Имя ${Name}`;
console.log(GetName3("njj"));
