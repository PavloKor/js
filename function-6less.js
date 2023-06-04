// Functions

// alert
// console.log - метод функціі консоль
/* 
function sayHello(name) {
  // alert('hello, dear user');
  alert('hello, dear ' + name);
}
*/
// sayHello(); -  виклик функції
// sayHello('pavlo');

/*
const userName = 'Pavlo';
const age = 27;
const gender = 'male';
function sayHello(name, age, gender) {
  alert('Hello, dear ' + name);
  if (age < 18) {
    alert('You are to young!')
  }
  if (gender === 'male') {
    alert('Welcome,bro!')
  }
}
sayHello(userName, age, gender);
*/
/*
const userName = 'pavlo';

function createUserName(name) {
  // const result = name.toUpperCase();
  // return result;
  return name.toUpperCase(); // те ж саме що вищє тільки коротше.
}
// const userName = createUserName(); // те ж саме, що const userName = 'Pavlo'; написане перед функцією.
const updateName = createUserName(userName);
console.log(updateName);
*/
 // Function declaration Декларація функції


function sayHello(greetings) {
  alert(greetings);
}
// sayHello('Yo');

// Function expression

const sayHello2 = function (greetings) {
  alert(greetings);
}
// sayHello2('welcome');



/*function returnSmthng() {
  console.log(1);
  console.log(1);
  console.log(1);
  return 'hi';   // на цьому зупиниться робота функції.
  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);
}
const greetings = returnSmthng();
console.log(greetings);
//console.log(returnSmthng());
*/


const car = {
  speed: 100,
  color: 'red',
  drive: function (speed) {
    // console.log('I drive fast')
    console.log(speed)
  }
}
// const speedUpdate = car.drive();
car.drive(200);
// console.log(speedUpdate);
//const greetings = car.drive();
//car.drive();
//console.log(greetings);