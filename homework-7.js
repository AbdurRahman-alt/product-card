// Задание 3

function showTemperature(city, temperature) {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`,
  );
}

showTemperature("Стамбул", 39);

// Задание 4

const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);

// Задание 5

const product = "Ноутбук";
const productPrice = 1000;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;

    console.log(`Вам не хватает ${difference} $, пополните баланс`);
  }
}

buyProduct(700);

// Задание 6

function sayHello() {
  console.log("Привет! Я изучаю JavaScript");
}

sayHello();

// Задание 7

const student = {
  name: "Абдуррахман",

  study() {
    console.log("Я изучаю JavaScript");
  },

  rest() {
    console.log("Я отдыхаю");
  },

  drinkCoffee() {
    console.log("Я пью кофе");
  },
};

student.study();
student.rest();
student.drinkCoffee();
