// Задание 3 — Создание объекта с информацией о человеке

const user = {
  firstName: "Абдуррахман",
  lastName: "Насиров",
  email: "example@gmail.com",
  job: "Разработчик",
  position: "Frontend Developer",
  age: 38,
  country: "Турция",
  city: "Анталья",
  relationshipStatus: " женат",
};

console.log(user);


// Задание 4 — Создание объекта автомобиля с владельцем

const car = {
  brand: "BMW",
  model: "M5",
  year: 2026,
  color: "Черный",
  transmission: "Автомат",
  owner: user,
};

console.log(car);


// Задание 5 — Добавление максимальной скорости автомобилю

function addMaxSpeed(carObject) {
  if (carObject.maxSpeed) {
    return;
  }

  carObject.maxSpeed = 250;
}

addMaxSpeed(car);

console.log(car);


// Задание 6 — Получение значения свойства объекта

function showProperty(object, property) {
  console.log(object[property]);
}

showProperty(car, "brand");
showProperty(user, "firstName");


// Задание 7 — Массив продуктов

const products = [
  "Хлеб",
  "Молоко",
  "Сыр",
  "Яблоки",
  "Кофе",
];

console.log(products);


// Задание 8 — Массив объектов с книгами

const books = [
  {
    title: "Гарри Поттер",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
  },
  {
    title: "Властелин колец",
    author: "Джон Толкин",
    year: 1954,
    coverColor: "Зеленый",
    genre: "Фэнтези",
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Черный",
    genre: "Антиутопия",
  },
];

books.push({
  title: "Дюна",
  author: "Фрэнк Герберт",
  year: 1965,
  coverColor: "Синий",
  genre: "Фантастика",
});

console.log(books);


// Задание 9 — Еще один массив книг и объединение массивов

const universeBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Джоан Роулинг",
    year: 1998,
    coverColor: "Синий",
    genre: "Фэнтези",
  },
];

const allBooks = [...books, ...universeBooks];

console.log(allBooks);


// Задание 10 — Добавление свойства isRare с помощью map

function addIsRare(booksArray) {
  return booksArray.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}

const booksWithIsRare = addIsRare(allBooks);

console.log(booksWithIsRare);