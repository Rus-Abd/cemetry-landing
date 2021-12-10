const prevArrow = document.querySelector('.arrow-previous img');
const nextArrow = document.querySelector('.arrow-next img');
var slider = tns({
  container: '.my-slider',
  items: 3,
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
  controls: false,
  nav: false,
  gutter: 76,
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
