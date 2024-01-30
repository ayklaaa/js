const year = 2024;
console.log(Number(year), Boolean(year), String(year)); //1

const answer = false;
console.log(Number(answer), Boolean(answer), String(answer)); //2

const multi_digit = 234567567;
console.log(Number(year), Boolean(year), String(year)); //3

const str = "ISIP";
console.log(Number(str), Boolean(str), String(str)); //4

const item = null;
console.log(Number(item), Boolean(item), String(item)); //5

const numder = undefined;
console.log(Number(numder), Boolean(numder), String(numder)); //6

const equation = { x: 44, y: 55 };
console.log(Number(equation), Boolean(equation), String(equation)); //7

let id = Symbol("id");
console.log("id", id, typeof id); //8
