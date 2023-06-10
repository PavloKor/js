/////////////////////////// Hoisting

// Hoisting можу підносити функціі о своєі області видимості, але не змінні. Приклад нижче працює
// Hoisting стосується тільки Function Declaration

/*
sayHello();
function sayHello() {
  console.log('Hi, dear user!');
}
*/

// Не працює

/*
console.log(age);
var age = 20; // буде undefined // const та let видадуть в кончолі помилку
*/

// Випадок нижче це Function Expretion і ця функція веде себе так само як і зі змінними - буде помилка
// var sayHello2 is not a function (consol.log((sayHello2)) - consol is not defined) - буде undefined
// у випадку let та const - ми не можемо достукатись до цих змінних до їх оголошення

//sayHello2();
/*
var sayHello2 = function () {
  console.log('Hello');
};
*/


//////////////////// Практика
// Функція приймає 2 аргументи: масив числе і число.
// Функція повертає кількість повторюваності переданого числа в масиві.
// Якщо даного числа немає в переданому масиві, функція повертає текст "Даного числа в масиві немає!"
const numArray = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1];
function getNumber(numbersArr, number) {
  let counter = 0;
  for (item of numbersArr) {
    if (item === number) {
      counter++;
    }
  }
  return counter > 0 ? counter : 'Даного числа в масиві немає!';
}

//getNumber([1, 3, 5, 7, 9, 1, 2, 8, 9, 1], 1)
//console.log(getNumber([1, 3, 5, 7, 9, 1, 2, 8, 9, 1], 30));
console.log(getNumber(numArray, 30));