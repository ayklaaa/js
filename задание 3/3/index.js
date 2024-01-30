const a1 = console.log;
console.log(String(a1), Number(a1), Boolean(a1));

const a2 = { name: "Maxim" };
console.log(String(a2), Number(a2), Boolean(a2));

const a3 = Symbol("key");
console.log(String(a3), Boolean(a3));

const a4 = Number;
console.log(String(a4), Number(a4), Boolean(a4));

const a5 = "";
console.log(String(a5), Number(a5), Boolean(a5));

const a6 = 0;
console.log(String(a6), Number(a6), Boolean(a6));

const a7 = -10;
console.log(String(a7), Number(a7), Boolean(a7));

const a8 = "-105";
console.log(String(a8), Number(a8), Boolean(a8));
