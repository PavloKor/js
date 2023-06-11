/////////////////// Примітиви та об'єкти

////////// Примітиви

// string
// number
// boolean
// null
// undefined
// bigInt
// symbol

////////// Object
/*
let age = 27;
let age2 = age; // записано суто значення
age = 12;
*/
// змінна зберігається з наданим значенням в пам'яті
//console.log(age2); // 27

/*
const obj1 = {
  name: 'Pavlo',
  age: 27,
}
const obj3 = {
  name: 'Pavlo',
  age: 27,
}
obj1.age = 28; // В обох об'єктах зміниться значення

const obj2 = obj1; // Тут obj2 не скопіював оbj1 а взяв посилання на нього в стеку.
                   // Тому при маніпуляціях змінюється оригінальний масив.
                   // Ці два об'єкти посилаються на один і той же об'єкт в пам'яті нашої програми
// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj3); // хоч вони і однакові за значенням, але посилланя на них різні.
*/
// Приберемо одне слово з кожного елемента в масиві
/*
const djs = [
  'Dj Sobi',
  'Dj Smart',
  'Dj Sly'
];

function createNewDjName(names) {
  names.forEach((item, index) => {
    const newName = item.split(' ')[1];
    names[index] = newName;
  });
  return names;
}
const newArr = [...djs]; // syntax spread [...масив який нам потрібен]
*/
// console.log(newArr === djs);// і тепер це false
// console.log(createNewDjName(newArr));
// console.log(djs); // оригінальний масив змутував, бо ми передавали аргументом до функції посилання на масив.
//  але достатньо дати функціі в аргумент новий масив console.log(createNewDjName(newArr));
// і тоді оригвнальний масив залишився без змін

// Проте для таких цілей коли ми маємо оригінальний масив і хочемо на його основі створити новий дещо змінений
// Треба використовувати метод map

// Напишеммо нову функцію для масиву djs
// Ця функція повинна повернути масив, а масив повертатиме метод map 
/*
function createNewDjName(names) {
  const newArr = names.map(item => item.split(' ')[1]);
  return newArr;
}
*/
// console.log(createNewDjName(djs));
// console.log(djs); // оригінальни й масив залишився недоторканим

///// Arrow functions Стрілкові функції щє раз 
// Наші звичайні функції

// Example 1
/*
function sayHello() {
  console.log('hello');
}
sayHello();
// Arrow functions
const sayHello2 = () => {
  console.log('hello 2')
}
sayHello2();
*/
// Example 2
/*
function sayHelloToPerson(name) {
  console.log('Hello ' + name);
}
sayHelloToPerson('Pavlo');
// Arrow functions
const sayHelloToPerson2 = name => {   // можна не брати аргумент в дужки якщо він один
  console.log('Hello dear, ' + 'Pavlo');
}
sayHelloToPerson2('Pavlo');
*/
// Example 3
/*
function summ(a, b) {
  console.log(a + b);
}
summ(2, 3);
// Arrow functions
const summ2 = (a, b) => {
  console.log(a + b);
}
summ2(2, 3);

const summ3 = (a, b) => {
  return a + b;       // ящо функція повертає такий короткий результат, то можна щє зпростити
}
console.log(summ3(10, 3));
/////////////////////// Скорочення
const summ4 = (a, b) => a + b; // можна прибрати слово return summ4 дорівнює сумі переданих аргументів у дужках.
console.log(summ4(10, 3));
*/
// Дві відмінні риси між іункціями
// контекст
// Псевдоаргумент arguments
// --------У функціях оголошених через ключове слово function 
// --------ми маємо можливість дотягнутись до псведоаргументу arguments
/*
function summ(a, b, c, d, e) {
  console.log(arguments);
  return(a + b + c + d);
}
console.log(summ(2, 3, 5, 7, 8));
*/
// А у стрілкових функціях консоль покажу помилку якщо ми захочемо достукатись до цього псевдомасиву
// але можна дещо зробити через деструктуризацію, але трохи пізніше
/*
const sayHelloToPerson2 = name => {   // можна не брати аргумент в дужки якщо він один
  console.log(arguments);
  console.log('Hello dear, ' + 'Pavlo');
}
sayHelloToPerson2('Pavlo');
*/
///////////////////////// Невеличка практика
// Маємо масив користувачів
/*
const users = [
  {
    name: "Pavlo",
    age: 27,
    sex: 'male',
  },
  {
    name: "Rebeka",
    age: 17,
    sex: 'female',
  },
  {
    name: "Bob",
    age: 22,
    sex: 'male',
  },
  {
    name: "Den",
    age: 23,
    sex: 'male',
  },
  {
    name: "Jesica",
    age: 32,
    sex: 'female',
  },
  {
    name: "Elza",
    age: 29,
    sex: 'female',
  },
  {
    name: "Mark",
    age: 45,
    sex: 'male',
  },
];
console.log(users);
*/
// Створюємо нову зміну в якій ствоюємо функцію за допомогою методу filter
/*
const filterUsers = users.filter(function (item) {
  return item.age >= 18;
})
console.log(filterUsers);
*/
// Можна прибрати ключове слово і дужки у аргументи для більшого скорочення і читання коду
/*
const filterUsers2 = users.filter(item => item.age >= 18)
console.log(filterUsers2);

const filterName = users.filter(item => item.name.toLowerCase() === 'pavlo')
console.log(filterName);

const filterSex = users.filter(item => item.sex === 'male')
console.log(filterSex);
*/
