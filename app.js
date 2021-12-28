const prevArrow = document.querySelector('.arrow-previous img');
const nextArrow = document.querySelector('.arrow-next img');
var slider = tns({
  container: '.my-slider',

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
//
//
// 52.126424070008916, 26.110533197336057
//

// function initMap() {
//   const uluru = { lat: 52.126424070008916, lng: 26.110533197336057 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 17,
//     center: uluru,
//   });
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }
//
//
//
const formButton = document.querySelector('.form-button');
const form = document.querySelector('.intro-form');
formButton.addEventListener('click', () => {
  form.innerHTML =
    '<p class="form-clicked" >Спасибо за оставленную заявку. Мы перезвоним вам в ближайшее время!</p>';
});
const hamburger = document.querySelector('.hamburger');
const dropMenu = document.querySelector('.drop-down');
hamburger.addEventListener('click', () => {
  hamburger.style.opacity = 0.4;
  if (dropMenu.style.display === 'none' || !dropMenu.style.display) {
    dropMenu.style.display = 'flex';
  } else {
    dropMenu.style.display = 'none';
  }
});
