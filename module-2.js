'use strict';

// Код у суворому режимі
/*
Цілі Модуля 2:



вивчити принцип роботи розгалужень та розрізняти інструкції з if, оператор switch, тернарний оператор;
використовувати розгалуження у простих операціях присвоєння або повернення;
розрізняти основні типи логічних операторів &&, ||, ! та вміти їх застосовувати;
знати методи рядків: slice(), toLowerCase(), toUpperCase(), includes(), startsWith(), endsWith(), indexOf(), trim() та використовувати їх у розв’язанні типових задач;
знати типи циклів (while, do…while, for);
реалізовувати багаторазове виконання однотипних дій за допомогою циклів.
*/

// Розгалуження

// Інструкція if
// Інструкція if дозволяє виконати певний блок коду тільки в тому випадку,
//  якщо задана умова істинна (тобто приймає значення true).


/*
if (condition) {
  console.log('Умова істинна');
  // код, який виконується, якщо умова (condition) істинна
}   
*/

/*

let price = 0;
const subscription = "pro";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 100
///////////////////////////
let price = 0;
const subscription = "free";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 0
*/
/*
function getPrice(subscription) {
  let price = 0;
	
  if (subscription === "pro") {
	price = 100;
  }
	
  return price;
}
  console.log(getPrice("free")); // 0	
  console.log(getPrice("pro")); // 100	
///////////////////////
function checkAge(age) {
    let massage = `You are a child`;
  if (age >= 18) {
    massage = `You are an adult`;
  }
  return massage;
}
checkAge(20);
checkAge(17);
checkAge(10);
checkAge(30);
  */

/*
Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", 
якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.

Оголошена функція checkAge(age)
Виклик checkAge(20) повертає рядок "You are an adult"
Виклик checkAge(17) повертає undefined
Виклик checkAge(10) повертає undefined
Виклик checkAge(30) повертає рядок "You are an adult"
Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

function checkAge(age) {
    if (age >= 18) {
return `You are an adult`;
}
}
console.log(checkAge(20)); 
console.log(checkAge(17)); 
console.log(checkAge(10)); 
console.log(checkAge(30)); 


///////////////////////////////////
function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  } else {
    return "Unsatisfactory";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory
/////////////////////////////////
function checkStorage(available, ordered) {
  if (available <= ordered ) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(100, 20));
console.log(checkStorage(100, 150));
console.log(checkStorage(100, 180));
*/

////////////////////////////////////////////
// Блок else...if
/*
if (condition_1) {
  // код, який виконується, якщо умова (condition_1) істинна
} else if (condition_2) {
  // код, який виконується, якщо умова (condition_2) істинна
} else if (condition_3) {
  // код, який виконується, якщо умова (condition_3) істинна
} else {
	// код, який виконується, якщо всі умови хибні
}

///////////////////////////////////////
const grade = 95;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}


function checkStorage(available, ordered) {
  if (ordered == 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "The order is accepted, our manager will contact you";
  }
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(100, 20));
console.log(checkStorage(100, 150));
console.log(checkStorage(100, 180));

*/

//////////////////////////// Тернарний оператор
/*
let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // 'adult'
*/


