//////////////////////// Поверхневе та глибоке (Shallow vs Deep) клонування об'єктів
/*  
const obj1 = {
  name: 'Pavlo',
  age: 27,
  favouriteFood: {
    sweet: 'weed',
    salty: 'eggs',
  },
}; 
*/
////////////////// Shallow copy

/* 
const obj2 = { ...obj1 }; // тут не можна поставити [], бо це не масив, а об'єкт {}
const obj2 = Object.assign({}, obj1); // метод Objest.assign
  */
///////////////// Deep copy

/* 
const obj2 = JSON.parse(JSON.stringify(obj1));

// нажаль такий формат не працює для методів
// тобто наприклад якась функція у obj1 не буде скопійована
// для цього існує lodash

obj2.name = 'Bob';
obj2.favouriteFood.sweet = 'karamel';
 */
//////////////////////// Приклад поверхневого клонування
// sweet змінено і в оригінальному об'єкті, тому що відбувається поверхнева копія
// все що об'єкт в об'єкті буду клоновані не за значенням, а посиланням. 
//////////////////////// Приклад глибокого клонування
// sweet не змінено в оригінальному об'єкті
// об'єкт в об'єкті скопіював значення, а не посилання на них
/* 
console.log(obj1);
console.log(obj2);
*/

const arr1 = [
  {
    name: 'Pavlo',
    age: 27,
    sayHello() {
      console.log('Hello')
    }
  },
  {
    name: 'Robert',
    age: 23,
  },
  {
    name: 'Rob',
    age: 30,
  },
]

/////////////////// Shallow Copy with spread

// const arr2 = [...arr1];
// shallow copy поверхнева копія.
// тому значення змінюється і для оригінального масиву
// працює прекрасно тільки з примітивами

/* 
arr2.push({
  name: 'Eliza',
  age: 18,
}); 
*/
// console.log(arr2);

////////////////////// Shallow Copy with JSON

// const arr3 = JSON.parse(JSON.stringify(arr1));
// якщо ми додамо до масиву якийсь метод то він не скопіюється

/////////////////////// Lodash

// додамо sayHello до масиву
// додаємо script з посиланням на код lodash у HTML перед скриптом нашого JS
// і тепер бачимо в консолі що функція sayHello також скопійована
// Створено повноцінний клон
/* 
const arr3 = _.cloneDeep(arr1);
arr3[0].age = 45;
arr3[0].name = 'test'; 

console.log(arr1);
console.log(arr3);
 */