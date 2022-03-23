const prevArrow = document.querySelector('.arrow-previous img');
const nextArrow = document.querySelector('.arrow-next img');
window.onload = () => {
  let slider = tns({
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

  let serviceSlider = tns({
    container: '.services-container',
    swipeAngle: false,
    speed: 400,
    controls: false,
    autoWidth: false,

    nav: false,

    responsive: {
      1190: {
        mouseDrag: false,

        items: 4,

        disable: true,
        edgePadding: 158,
      },

      500: { fixedWidth: 170 },
      330: { gutter: 58, items: 3 },
      250: { items: 2 },
      1: { mouseDrag: true, fixedWidth: 130, gutter: 38, items: 1 },
    },
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
form.onSubmit = function (evt) {
  evt.preventDefault();
  const formattedFormData = new FormData(form);
  postData(formattedFormData);
};
function myFunc(e) {
  e.preventDefault();
}

async function postData(formattedFormData) {
  const response = await fetch('handle_form.php', {
    method: 'POST',
    body: formattedFormData,
  });

  const data = await response.text();

  console.log(data);
}
//
//
//
//
//
const imgContainer = document.querySelector('.my-slider');
imgContainer.onclick = function (e) {
  let target = e.target;
  if (target.tagName != 'img') console.log('no');
  console.log(target.src);
  show(target.src);
};
function show(src) {
  document.body.innerHTML += `<div class="show">
  <div class-"close"></div>
  <img src="${src}" alt="памятник" />
  </div>`;
}
