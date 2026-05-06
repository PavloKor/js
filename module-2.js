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

///////////

function getPrice(subscription) {
  let price = 0;
	
  if (subscription === "pro") {
	price = 100;
  }
	
  return price;
}

console.log(getPrice("free")); // 0	
console.log(getPrice("pro")); // 100	


function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  } else {
    return "Unsatisfactory";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory

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
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 0));
console.log(checkStorage(150, 0));
console.log(checkStorage(80, 80));

////// Тернарний оператор
// Тернарний оператор — це коротша синтаксична заміна інструкції if...else. 
// Тернарний оператор дозволяє виконувати певну частину коду залежно від умови.

function getBiggerNumber(a, b) {
  return a > b ? a : b;
}

console.log(getBiggerNumber(5, 10)); // 10
console.log(getBiggerNumber(20, 15)); // 20
console.log(getBiggerNumber(7, 7)); // 7


function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password == correctPassword ? "Access granted" : "Access denied, wrong password!";
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));

///////// Оператор switch



// Оператор switch дозволяє виконувати різні дії залежно від значення виразу. 
// Використання switch є більш компактним і зручним способом для порівняння виразів з кількома варіантами, ніж інструкції if...else та else...if.

//Ось загальний синтаксис оператора switch:

/*
switch (expression) {
  case value1:
    // код, що виконується, якщо вираз (expression) дорівнює value1
    break;
  case value2:
    // код, що виконується, якщо вираз (expression) дорівнює value2
    break;
  // ...
  default:
    // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
}


Як це працює:



Вираз (expression) в операторі switch обчислюється.
Значення виразу порівнюється з кожним блоком case зверху вниз.
Якщо значення виразу відповідає значенню в блоці case, виконується код цього блоку.
Коли виконання коду блоку case завершено, необхідно використовувати оператор break, щоб вийти зі switch. Це запобігає виконанню коду в наступних блоках case.
Якщо жодне значення не відповідає виразу, виконається код у блоці default (якщо він є).

*/

///// Приклад використання оператора switch:

/*
const fruit = 'apple';

switch (fruit) {
  case 'orange':
    console.log('Orange selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'apple':
    console.log('Apple selected');
    break;
  default:
    console.log('The fruit is unknown');
}
*/
/// Оператор break
//Після виконання коду в одному з випадків потрібно використовувати оператор break, щоб вийти з оператора switch.
//Якщо break не вказано, виконання коду продовжиться в наступному case і далі. Така поведінка називається "провалюванням" (fall-through). 
//Якщо потрібно, щоб кілька блоків case виконували той самий код, можна опустити оператор break між ними.

/*
const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apple selected');
  case 'banana':
    console.log('Banana selected');
    break; ///// це буде останнім виконаним рядком, тому що після нього стоїть break    
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
/////////////////////////////
    function getSubscriptionPrice(type) {
    switch (type) {
        case (`starter`):
            return 0;
        break;
        case (`professional`):
            return 20;
        break;
        case (`organization`):
            return 50;
        break;
        default:
            return `Invalid subscription type!`;
    }
}

console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));
console.log(getSubscriptionPrice("random"));
console.log(getSubscriptionPrice("premium"));
}
*/


