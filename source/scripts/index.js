/* в этот файл добавляет скрипты*/

//Открытие и закрытие меню
const burgerEl = document.querySelector('.burger');
const navListEl = document.querySelector('.nav-list');
const bodyEl = document.querySelector('.page__body');

burgerEl.addEventListener('click', () => {
  burgerEl.classList.toggle('is-opened');
  navListEl.classList.toggle('is-opened');
  bodyEl.classList.toggle('no-scroll');
});

//Слайдер

const sliderDividerEl = document.querySelector('.slider__divider');
const sliderZoneEl = document.querySelector('.slider');
const sliderBeforeEl = document.querySelector('.slider__image-before');

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
