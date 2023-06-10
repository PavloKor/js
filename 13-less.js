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
