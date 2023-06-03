// Type coercion (коніертація типів)

const age = 20;
if (age) {   // тільки 0, -0, Nun, undefined, nall, '' не конвертується в true!
  console.log('true')
} 
// кращє перевіряти на false та undefined

let num = 10;
let str = 'Pavlo';
console.log(num + str); // конкатенація

let num1 = 10;
let num2 = '2';
console.log(num1 - num2);// в данному випадку рядок num2 конвертувався в число і на виході 10-2=8

let num3 = 20;
let num4 = null;// false - конвертується в 0, true у одиницю, undefined - NaN(not a number)
console.log(num3 * num4);

// різниця між == і ===
let num5 = '10';

console.log(num == num1);
console.log(num === num1);
console.log(num == num5)
console.log(num == num5);
console.log(num === num5); // порівнює тип даних, так як вони різні то false

