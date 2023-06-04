
/*
JS Loops
- for
- for of
- for in
- while
- do while
*/

const subs = [ 
  { name: 'Pavlo', isClosedFriend: true },
  { name: 'Bob', isClosedFriend: true },
  { name: 'Peter', isClosedFriend: true },
  {name: 'Max', isClosedFriend: false}
]

// for
/*
for (let i = 0; i < subs.length; i++) {
  console.log(subs[i])
}
*/
// for of
/*
for (const item of subs) {
  console.log(item);
}
*/
// for in
/*
const obj = {
  name: 'Pavlo',
  age: 27,
  gender: 'male'
}
for (const key in obj) {
  //console.log(key); // дотягуємось до властивостей
  //console.log(obj[key]); // достукуємось до значень властивостей
  //console.log(obj.age) // достукуємось до значення конкретноі властивості, якщо такого значення нема буде undefined
  }
  */
// while
/*
let i = 0;

while (i < subs.length) {
  console.log(subs[i]);
  i++;
}
*/
// do while   умова виконається примусово хоч раз, навіть якщо умова не вірнв
/*
let i = 0;

do {
  console.log(subs[i])
} while(i > 0)
*/