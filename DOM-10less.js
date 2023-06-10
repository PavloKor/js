/*
const obj = {
  name: 'Pavlo',
  sayHello: function () {
    console.log('Hello');
  }
};
console.log(obj.name);
obj.sayHello();
*/
// document.getElementById('btn-hap');
// нижче приклад шо таке документ. документ це вже створений обєкт розробниками для нас
// який має кучу методів
// в данному випадку якщо розкласти документ то він буде вглядати так:
/*
const document = {
  getElementById: function () {
    
  }
}
*/



/////////////// Практика
// Анонімна функція (передається як callback функція анонімним чином)
/*
document.getElementById('btn-hap').addEventListener('click', function () {
  alert('hello');
});
*/
// Надати назву функції
/*
function sayHello() {
  alert('Hi');
}
document.getElementById('btn-hap').addEventListener('click', sayHello);
*/
////////////// Приклад з картинкою і кнопками
/*
document.getElementById('btn-hap').addEventListener('click', function () {
  // console.log(document.getElementsByClassName('img')[]);// через [] можна достукатись до будь якого елементу з таким класом
  // console.log(document.querySelector('.img')); // повертає доступ лише до першого елемнта з цим класом
  document.querySelector('.img').style.display = 'inline';
  document.getElementById('btn-hap').disabled = true;
  document.getElementById('btn-sad').disabled = false;
});
document.getElementById('btn-sad').addEventListener('click', function () {
  document.querySelector('.img').style.display = 'none';
  document.getElementById('btn-hap').disabled = false;
  document.getElementById('btn-sad').disabled = true;
});
*/
///////////// Трошки спростив
/*
const picture = document.querySelector('.img');
const btn1 = document.getElementById('btn-hap');
const btn2 = document.getElementById('btn-sad');

btn1.addEventListener('click', function () {
  picture.style.display = 'inline';
  btn1.disabled = true;
  btn2.disabled = false;
});
btn2.addEventListener('click', function () {
  picture.style.display = 'none';
  btn1.disabled = false;
  btn2.disabled = true;
});
*/

