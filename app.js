const prevArrow = document.querySelector('.arrow-previous img');
const nextArrow = document.querySelector('.arrow-next img');
window.onload = () => {
  var slider = tns({
    container: '.my-slider',
    lazyload: true,
    swipeAngle: false,
    speed: 400,
    controls: false,
    nav: false,

    responsive: {
      1170: { fixedWidth: 251, gutter: 76, mouseDrag: false, items: 3 },
      678: { fixedWidth: 220, gutter: 36, mouseDrag: true, items: 3 },
      320: { fixedWidth: 180, gutter: 25, mouseDrag: true, items: 1 },
    },
  });
  slider.getInfo();
  var info = slider.getInfo(),
    indexPrev = info.indexCached,
    indexCurrent = info.index;
  let prevSlide = 0;
  let currentSlide = 0;
  nextArrow.addEventListener('click', () => {
    if (currentSlide == 4) {
      slider.goTo(0);
      prevSlide = currentSlide;
      currentSlide = 0;
    } else {
      prevSlide = currentSlide;
      currentSlide += 1;
      slider.goTo(currentSlide);
    }
  });
  prevArrow.addEventListener('click', () => {
    if (currentSlide == 0) {
      slider.goTo(4);
      prevSlide = currentSlide;
      currentSlide = 4;
    } else {
      prevSlide = currentSlide;
      currentSlide -= 1;
      slider.goTo(currentSlide);
    }
  });
};

const formButton = document.querySelector('.form-button');
const form = document.querySelector('.intro-form');
formButton.addEventListener('click', () => {
  form.innerHTML =
    '<p class="form-clicked" >Спасибо за оставленную заявку. Мы перезвоним вам в ближайшее время!</p>';
});
const hamburger = document.querySelector('.hamburger');
const dropMenu = document.querySelector('.drop-down');
hamburger.addEventListener('click', () => {
  if (dropMenu.style.display === 'none' || !dropMenu.style.display) {
    dropMenu.style.display = 'flex';
    hamburger.style.opacity = 0.4;
  } else {
    dropMenu.style.display = 'none';
    hamburger.style.opacity = 1;
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 500) {
    dropMenu.style.display = 'none';
  }
});
