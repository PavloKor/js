//////////////////////// Поверхневе та глибоке (Shallow vs Deep) клонування об'єктів
const obj1 = {
  name: 'Pavlo',
  age: 27,
  favouriteFood: {
    sweet: 'weed',
    salty: 'eggs',
  },
};

const obj2 = { ...obj1 }; // тут не можна поставити [], бо це не масив, а об'єкт {}
obj2.name = 'Bob';
console.log(obj1);
console.log(obj2);

const djs = [
  'Dj Sobi',
  'Dj Smart',
  'Dj Sly'
];
