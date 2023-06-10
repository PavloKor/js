//////////////////////////////// Стрілкові функції (Arrow functions)
/*
// Звичайна функція

function sayHello() {
  console.log('hello');
}
// Стрілкова функція

const sayHello2 = () => {
  console.log('hello2');
}
//sayHello();
//sayHello2();
*/
// Приклад з аргументом що передається до функції
/*
// Звичайна функція
function sayHiToPerson(name) {
  console.log('hello, ' + name)
}
// sayHiToPerson('Bob');

// Стрілкова функція

const sayHiToPerson2 = name => { // можна не вставляти аргумент в дужки // можна вважати оригінальністю стрілкової функції
  console.log('Hello dear, ' + name);
}
// sayHiToPerson2('Pavlo');
*/

////////////////////////////////// Приклад для декількох аргументів ( повертаємо суму аргументів)
/*
// Звичайна функція для суми
function summ(a, b) {
  return a + b;
}
console.log(summ(2, 3));

// Її стрілкова адаптація
const summ2 = (a, b) => a + b;
console.log(summ2(2, 3));
*/

