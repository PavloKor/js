
/*
JS Loops
- for
- for of
- for in
- while
- do while
*/

/*const subs = [ 
  { name: 'Pavlo', isClosedFriend: true },
  { name: 'Bob', isClosedFriend: true },
  { name: 'Peter', isClosedFriend: true },
  {name: 'Max', isClosedFriend: false}
]
*/

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


/* написати функцію, яка приймає масив чисел і підносить до квдрату кожне з них
*/

//мій розв'язок

/*
const array = [2, 4, 5, 6, 10, 15, 25];
function squareArr(arr) {
  for (const key in arr) {
    console.log(arr[key] * 2);
  }
};
squareArr(array);
*/

// По людськи через for of

/*
function num(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i]
  }
  return arr;
}
const numbers = [2, 4, 6, 8, 10, 12];
console.log(num(numbers))
*/