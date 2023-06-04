// два варіанти запису масиву
/*
const usersArr = new Array('user1', 'user2') // v1
const userArray = ['user3', 'user'];  // v2
console.log(userArray);
*/

const userArray = [ 
  { name: 'Pavlo', age: 27, proff: 'musican' },
  { name: 'Bob', age: 28, proff: 'builder' },
  { name: 'Peter', age: 20, proff: 'student' },
  {name: 'Max', age: 8, proff: 'child'}
]
// console.log(userArray); // достукуємось до всього масиву
// console.log(userArray[0]);// в дужках прописуємо індекс елементу в масиві до якого достукуємось. Перелік починається з нуля


// приклад з підписниками. відобразити усіх підписників. Використовуємо масив написаний вищє userArray


const haveNewSub = true;
if (haveNewSub) {
  //userArray.push({ name: 'Liza', age: 23, proff: 'teacher' }),//додає в кінце масиву
  //userArray.unshift({ name: 'Bet', age: 25, proff: 'dancer' }), // додає в початок
  //userArray.pop(),// видаляє останній елемент
  //userArray.shift()// видаляє перший елемент
  userArray.splice(0, 1, {name: 'Pavlo', age: 28, proff: 'programmer'})// можна додавати або видаляти елемент з вказаного місця
}
// console.log(userArray);



/*
const subs = [
  { name: 'Pavlo', age: 27, proff: 'musican' },
  { name: 'Bob', age: 28, proff: 'builder' },
  { name: 'Peter', age: 20, proff: 'student' },
  {name: 'Max', age: 8, proff: 'child'}
];
const legthSubs = subs.length * 25;
function congratsIfMoreThan100(subs) {
  if (subs < 100) {
    alert('sorry,bro')
  };
  if (subs >= 100) {
    alert('Congrats,man')
  }

}
congratsIfMoreThan100(legthSubs);
console.log(legthSubs);
*/
////////////////////
//////////////////// написати функцію congratsIfMoreThan100(), 
////////////////////яка приймає масив даних(підписників) і виводить на екран
//////////////////// за допомогою функції alert() привітання, якщо у вас більше 100 підписників

/////// Перший варіант мій
/*
const subscribers = [
  {name: 'pavlo', age: 22, hoby: 'music'},
  {name: 'edward', age: 21, hoby: 'game'},
  {name: 'cavin', age: 12 , hoby: 'swim'},
  {name: 'max', age: 13, hoby: 'food'},
];
function congratulations(sub) {
  if (sub.length  < 100) {
    alert('Sorry, bro!')
  }
  if (sub.length  >= 100) {
    alert('Welcome, man!')
  }
};
congratulations(subscribers);
console.log(subscribers);
*/

// другий варіант більш адекватний не мій

const subscribers2 = [
  {name: 'Max', age: 22, hoby: 'music'},
  {name: 'Stepan', age: 21, hoby: 'game'},
  {name: 'Ivan', age: 12 , hoby: 'swim'},
  {name: 'Roman', age: 13, hoby: 'food'},
];
function congratulations100(arr) {
  if (arr.length > 100) {
    alert('Congratulations')
  } else {
    alert('Sorry')
  }
} 
congratulations100(subscribers2);