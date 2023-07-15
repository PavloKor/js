/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? "публічному" : "закритому";
const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "публічному" : "закритому";
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
 */



/* console.log(accessType);
console.log(message); */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480" */


/* const firstBook = {
  title: "Останнє королівство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;
 */
/* console.log(firstTitle); // Останнє королівство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
 */
/* const secondBook = {
  title: "Сон смішної людини",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;
 */
/* console.log(secondTitle); // Сон смішної людини
console.log(secondCoverImage); // https://via.placeholder.com/640/480
 */

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
}; */
// Change code below this line

/* const highYesterday = highTemperatures.yesterday;
const highToday = highTemperatures.today;
const highTomorrow = highTemperatures.tomorrow;
const highIcon = highTemperatures.icon; */
/* const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures; */

// Change code above this line
/* const meanTemperature = (highYesterday + highToday + highTomorrow) / 3; */

/* console.log(highTemperatures);

console.log(meanTemperature); */


/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
]; */

/* for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
} */

/* for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
} */

/* for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
} */


/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = []; */
// Change code below this line

/* for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
} */

/* for ( const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
} */
/* console.log(hexColors);
console.log(rgbColors); */

/* const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user; */

/* console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308 */


//////////////////////// Завдання 25 /////////////////////////

/* const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};


// Було

const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;

///// Стало

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg' },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;
console.log(lowToday);
console.log(highToday);
console.log(todayIcon);
console.log(lowTomorrow);
console.log(highTomorrow);
console.log(tomorrowIcon); */


//////////////////////// Завдання 26 /////////////////////////

// Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатися, в якій послідовності і що передавати. В результаті виходить дуже неочевидний код у місці її виклику.

/* function doStuffWithBook(title, numberOfPages, downloads, rating) {
  // Робимо щось з параметрами
  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);
  console.log(rating);
}
doStuffWithBook("Останнє королівство", 736, 10283, 8.38, true); */

// ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("Останнє королівство", 736, 10283, 8.38, true);
// Патерн «Об'єкт налаштувань» допомагає вирішити цю проблему, замінюючи набір параметрів всього одним - об'єктом з іменованими властивостями.

/* function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
} */
// Тоді під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
/* doStuffWithBook({
  title: "Останнє королівство",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
}); */
// Ще один плюс в тому, що можна деструктуризувати об'єкт в параметрі book.

// Це можна зробити в тілі функції.
/* function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
} */

// Або в сигнатурі (підписі), різниці немає.
/* function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
} */


///// завдання

// Change code below this line
/* function calculateMeanTemperature(forecast) {
  ///Було

  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;
  
  /// Стало

  const {
    today: {
      high: todayHigh,
      low: todayLow,
    },
    tomorrow: {
      high: tomorrowHigh,
      low: tomorrowLow,
    }
  } = forecast
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
} */

/* calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });

console.log(calculateMeanTemperature);
 */



///////////////////// ... (spread) /////////////////////////
// Синтаксис ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень. Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.

// Можна навести аналогію з ящиком яблук. Поставивши ящик на підлогу, не виймаючи з нього яблука, отримаємо аналог масиву значень. Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.

// Відмінність лише одна - в JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента. Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.

// Наприклад, метод Math.max (аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.

/* const temps = [14, -4, 25, 8, 11]; */

// В консолі буде масив
/* console.log(temps); */
// ❌ Так не спрацює, тому що передаємо цілий масив
/* console.log(Math.max(temps)); // NaN */

// В консолі буде набір окремих чисел
/* console.log(...temps); */
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
/* console.log(Math.max(...temps)); // 25 */


/// Аналог
/* const numbers = [20, 12, 24, 65];
console.log(...numbers);
console.log(Math.max(...numbers));
console.log(Math.min(...numbers)); */



// Операція .spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

/* const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11] */


// В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію. Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps - розподіляємо його в іншу колекцію. За такої умови, ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - їх точні копії.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий. Оригінальні ящики (масиви) не зміняться, а в новому будуть копії усіх їх яблук (елементів). Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.

/* const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18] */

  /* const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];
  // Change code below this line
  const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
  const bestScore = Math.max(...allScores);
  const worstScore = Math.min(...allScores);
  console.log(allScores);
  console.log(bestScore);
  console.log(worstScore); */

