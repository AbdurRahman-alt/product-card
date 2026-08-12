// Покраска всех карточек

const productCard = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardButton.addEventListener('click', () => {
  productCard.forEach((card) => card.style.backgroundColor = greenColorHash);
});


// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return;
  }
}


// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('из №4'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const productTitle = document.querySelector('.products__title');

productTitle.addEventListener('mouseenter', () => {
  console.log(productTitle.textContent);
});


const changeTitleColorButton = document.querySelector('#change-title-color');

changeTitleColorButton.addEventListener('click', () => {
  changeTitleColorButton.classList.toggle('button--red');
});



