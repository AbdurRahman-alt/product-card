
import { comments } from "./comments.js";

// Задание 2. Создать массив от 1 до 10 и оставить числа от 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((number) => number >= 5);

console.log("Задание 2:", filteredNumbers);


// Задание 3. Проверить, есть ли строка в массиве
const movies = [
  "Гарри Поттер",
  "Аватар",
  "Интерстеллар",
  "Начало",
  "Матрица"
];

const hasAvatar = movies.includes("Аватар");

console.log("Задание 3:", hasAvatar);


// Задание 4. Функция для переворачивания массива
function reverseArray(array) {
  return [...array].reverse();
}

console.log("Задание 4 — числа:", reverseArray(numbers));
console.log("Задание 4 — фильмы:", reverseArray(movies));


// Задание 7. Найти комментарии, где email содержит ".com"
const comComments = comments.filter((comment) =>
  comment.email.includes(".com")
);

console.log("Задание 7:", comComments);


// Задание 8. Изменить postId в зависимости от id
const updatedComments = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log("Задание 8:", updatedComments);


// Задание 9. Оставить только id и name
const simpleComments = comments.map((comment) => ({
  id: comment.id,
  name: comment.name
}));

console.log("Задание 9:", simpleComments);


// Задание 10. Добавить свойство isInvalid
const checkedComments = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log("Задание 10:", checkedComments);


// Задание 11. Получить массив email с помощью reduce
const emailsReduce = comments.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails;
}, []);

console.log("Задание 11 — reduce:", emailsReduce);

// Получить массив email с помощью map
const emailsMap = comments.map((comment) => comment.email);

console.log("Задание 11 — map:", emailsMap);


// Задание 12. Преобразовать массив email в строку через toString()
const emailsToString = emailsMap.toString();

console.log("Задание 12 — toString:", emailsToString);

// Преобразовать массив email в строку через join()
const emailsJoin = emailsMap.join(", ");

console.log("Задание 12 — join:", emailsJoin);
