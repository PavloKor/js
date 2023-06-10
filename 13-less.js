// Методи масивів
// filter
// map
// reduce

// масив не лише об'єкт, а й масив який представляє окремий клас структур даних

const users = [
  {
    name: 'Pavlo',
    age: 27,
    sex: 'male',
  },
  {
    name: 'Jesica',
    age: 21,
    sex: 'female',
  },
  {
    name: 'Max',
    age: 23,
    sex: 'male',
  },
  {
    name: 'Sara',
    age: 14,
    sex: 'female',
  },
  {
    name: 'Den',
    age: 45,
    sex: 'male',
  },
];

const count = {
  men: 0,
  women: 0
}

/////////////////////////////////// Метод forEach

// цей метод не повертає нічого окрім undefined і він змінює переданий йому масив.
/*
users.forEach(function (item, index) {
// if-else
//    if (item.sex === 'male') {
//      count.men++;
//    } else {
//      count.women++;
//  }
// Тернарний оператор
  item.sex === 'male' ? count.men++ : count.women++;
});
console.log(count);
*/

/////////////////////////////////// Метод filter

// Cтворює новий масив не змінюючи оригінальний console.log(adultUsers === users) // false
/*
const adultUsers = users.filter(function (item) {
  return item.age >= 18;
});
console.log(adultUsers);
*/

/////////////////////////////////// Метод map

//бере за основу переданий масив, якиймось чином змінюєтся і вертає новий масив.
// оригінальний масив не змінюється
// Додамо до імя привітання
// Якщо стать чоловіча - 'Любий', ящо жіноча - 'Люба'
// Використовуємо тернарний оператор.
/*
const deartUsers = users.map(function (item) {
  return item.sex === 'male' ? 'Любий ' + item.name : 'Люба ' + item.name;
});
console.log(deartUsers);
*/

////////////////////////////////// Метод reduce
// Ми хочемо отримати данні про середній вік на аудиторіі сайту
/*
const ageUsers = users.reduce(function (accumulator, currentValue) {
  let age = accumulator + currentValue.age;
  return age;
}, 0);
let usLength = users.length;
let usersAge = ageUsers / usLength;
// нуль це точка відліку з якої почнеться розрахунок
console.log(ageUsers);
console.log(usersAge);
*/
////////////////////////////////// Метод find
// Повертає одне єдине унікальне значення
/*
const foundObj = users.find(function (item) {
  return item.age > 18;
}
);
console.log(foundObj);
*/
////////////////////////////////// Метод some
// перевіряє чи хоча б один проходить перевірку
// повертає true абр false

/*
const foundObj = users.some(function (item) {
  return item.age > 18;
}
);
console.log(foundObj);
*/

///////////////////////////////// Метод every
// Перевіряє чи кожен задоволняє перевірку і тільки тоді повертає true 

/*
const foundObj = users.every(function (item) {
  return item.age > 18;
}
);
console.log(foundObj);
*/

//////////////////////////////// Метод findIndex
// показує індекс елемент з задовільною умовою.
// якщо такого елементу немає в консолі буде відємне число інддексу, наприклад -1

/*
const foundObj = users.findIndex(function (item) {
  return item.name === 'Pavlo';
}
);
console.log(foundObj);
*/