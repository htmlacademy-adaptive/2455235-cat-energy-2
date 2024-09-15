/* в этот файл добавляет скрипты*/

//Открытие и закрытие меню
const burgerEl = document.querySelector('.main-header__burger');
const mainNav = document.querySelector('.main-header__main-nav');

burgerEl.addEventListener('click', () => {
  mainNav.classList.toggle('main-header__main-nav--is-opened');
});

//Слайдер

const sliderDividerEl = document.querySelector('.slider__divider');
const sliderZoneEl = document.querySelector('.slider');
const sliderBeforeEl = document.querySelector('.slider__image-before');
const bodyEl = document.querySelector('.page__body');

let mouseEvent = false;

sliderDividerEl.addEventListener('mousedown', (e) => {
  e.preventDefault();
  mouseEvent = true;
});

sliderDividerEl.addEventListener('mouseup', (e) => {
  e.preventDefault();
  mouseEvent = false;
});

sliderZoneEl.addEventListener('mouseup', () => {
  mouseEvent = false;
});

bodyEl.addEventListener('mouseup', () => {
  mouseEvent = false;
});

sliderZoneEl.addEventListener('mousemove', (e) => {
  const x = e.pageX - sliderZoneEl.offsetLeft;
  let percent = x * 100 / sliderZoneEl.offsetWidth;

  if (percent < 0) {
    percent = 0;
  } else if (percent > 100) {
    percent = 100;
  }

  if (mouseEvent) {
    sliderDividerEl.style.left = `${percent }%`;
    sliderBeforeEl.style.width = `${percent }%`;
  }
});
