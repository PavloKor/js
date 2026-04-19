'use strict';

// Код у суворому режимі

/*

let b = 10;

b = 20;
const a = b * 2;
let c = a * b +139;
console.log(a);
console.log(c);


const username = "Poly";
const message = "Welcome " + username + "!";
console.log(message);
*/

//Шаблонні рядки дозволяють підставляти значення змінних безпосередньо всередині рядка
//  за допомогою синтаксису інтерполяції ${змінна}.

/*
const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"
*/
// `` - це шаблонний рядок, який дозволяє використовувати інтерполяцію для вставки значень змінних у рядок.
// конструкцію ${} використовуємо для вставки значень змінних guestName та roomNumber безпосередньо в рядок greeting.
//const greeting = `Welcome ${guestName}, your number is ${roomNumber}!`;


//Порівняння конкатенації та шаблонних рядків
//Код з конкатенацією, де
//"Welcome " ", your room number is " та "!" — це статичний текст
//guestName та roomNumber — імена змінних.
/*
const guestName = "Mango";
const roomNumber = 207;
const greeting =
 "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"
*/

// Код, де значення цих змінних підставляються у шаблонний рядок.
/*

const guestName2 = "Pablo";
const roomNumber2 = 206;
const greeting2 = `Welcome ${guestName2}, your room number is ${roomNumber2}!`;
console.log(greeting2); // "Welcome Pablo, your room number is 206!"


const productName = "Droid";
const pricePerItem = 3500;

const message2 = "You picked " +  productName + ", price per item is " + pricePerItem + " credits";
console.log(message2); // "You picked Droid, price per item is 3500 credits"
const message3 = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message3); // "You picked Droid, price per item is 3500 credits"


const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message4 = `You ordered droids worth ${totalPrice} credits`;
 
console.log(message4); // "You ordered droids worth 4850 credits"
*/


/*
const productName2 = "Repair droid";
// Якщо у змінній зберігається рядок

console.log(productName2.length); // 12

// Якщо рядковий літерал
/*
console.log("Repair droid".length); // 12

const username2 = "Poly";
const userlength = username2.length;
const message5 = `Username ${username2} is ${userlength} characters long`;
console.log(message5);
*/

// Підрахунок кількості символів у рядку
/*
const grn = 1000;
const message6 = `Ти мені ${grn} винна грн`;
console.log(message6.length); // 17
console.log(message6); // "Ти мені 1000 винна грн"
console.log(message6.length); // 22
*/
// LENGTH рахує кількість символів у рядку, включаючи пробіли та інші символи. Рахую кількість позицій у рядку.
// Індексація рядків
/*
const product = "Repair droid";
console.log(product.length - 1);
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'
console.log(product[product.length - 1]); // 'd'
console.log(product.length);
*/

//const courseTopic = "JavaScript essentials";

//const courseTopicLength = courseTopic.length;
//const firstElement = courseTopic[0];
//const lastElement = courseTopic[courseTopicLength - 1];
//console.log(lastElement);

// Параметри та аргументи

// Оголошення параметрів x, y, z
/*
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Передача аргументів
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"
*/
/*
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
*/

// Повернення значення
/*
function multiply(x, y, z) {
	const product = x * y * z;
  // Повертаємо результат виразу множення
  return product;
}

// Результат роботи функції можна зберегти у змінну
// Оператор return використовується для повернення значення з тіла функції назад у код, у місце її виклику.

const result = multiply(2, 3, 5);
console.log(result); // 30
*/
/*
function multiply(x, y, z) {
  return x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // 30
*/

// Якщо в тілі функції відсутній оператор return або він не вказує на конкретне значення,
// функція поверне спеціальне значення undefined.

/*
function multiply(x, y, z) {
	const product = x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // undefined
*/

// При використанні оператора return всі інструкції, які йдуть на рядках після нього,
// в тілі функції не виконуються, оскільки виконання функції припиняється відразу після зустрічі оператора return.

/*
function multiply(x, y, z) {
  console.log('The code before return is executed as usual');

  return x * y * z;

  console.log('This code is never executed because it is after return');
}

console.log(multiply(2, 3, 5)); // 30
*/

/*
function makeMessage (name, price) {
return `You picked ${name}, price per item is ${price} credits`
};
console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));

function calculateTotalPrice(orderedQuantity,pricePerItem) {
  return orderedQuantity * pricePerItem;
};
console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));
*/


