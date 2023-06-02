//                           Data types
// Primityve (Примітиви)
let greetings = 'welcome';
// alert(greetings);
console.log(typeof greetings);// - string
greetings = 10;
console.log(typeof greetings);// - number

// Boolean
const isBoolTrue = true;
const isBoolFalse = false;
console.log(typeof isBoolTrue);
console.log(typeof isBoolFalse);

// Null
const someNull = null;// - нічого
console.log(someNull);


// Undefined (невизначений, змінна щє не отримала свого значення)
// const someUndfnd = undefined; // невизначене значення
let someUndfnd;
console.log(someUndfnd);


//                        Objects (Об'єкти)

const obj = {};
// const obj2 = new Object();  Старий спосіб. Використовуємо новий коротший
console.log(obj);
// console.log(obj2);
const user = {
  name: 'Pavlo',
  age: 27,
  gender: 'male'
};
console.log(user); 

// можна додавати до об'єкту властивості інакше
const user2 = {};
user2.name = 'Bob';
user2.age = 23;
// user2['gender'] = 'male'; // Старий варіант, використовуємо коротший і легший
user2.gender = 'male';
console.log(user2);
console.log(typeof user2); // object

// Big Int
const bigInt = 99999999999999999999999999999999999999999n;
const bigInt2 = BigInt('99999999999999999999999999999999999999999');
console.log(99999999999999999999999999999999999999999)
console.log(Number.MAX_SAFE_INTEGER);
console.log(bigInt);
console.log(bigInt2);
console.log(typeof bigInt); // bigint

// Symbol

const userN = {
  id: 10,
  age: 20,
  height: 190,
}
const id = Symbol('some new symbol');
userN[id] = 100;
console.log(userN[id]);
console.log(userN);
console.log(typeof id); // symbol