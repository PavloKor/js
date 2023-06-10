
///// Замикання
const firstName = 'Pavlo';
function sayHello() {
  const lastName = 'Korotenko';
  return function () {
    console.log(firstName);
    console.log(lastName);
  };
};
/* можна так
const test = sayHello();
test();
*/
// А можна так
//sayHello()();
// коли створюється функція під капотом створюється прихований об'єкт lexicalEnviroment 
// цей об'єкт несе в собі інформацію про лексичне середовищє де ця функція була створена
// лексичне середовищє це просто місце розташування функції в коді
// замикання це здатність функції запам'ятати лексичне середовищє, запам'ятати scope в якому вона була створена

let frstNm = "bob";
function sayHi() {
  console.log(frstNm);
}
console.log(frstNm);
frstNm = "Pavlo";
sayHi();
