const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;
let interval;

/* SHOW */

function showSlide(index){

  slides.forEach((slide, i) => {

    slide.classList.toggle('active', i === index);

    dots[i].classList.toggle('active', i === index);

  });

  current = index;
}

/* NEXT */

function nextSlide(){

  current = (current + 1) % slides.length;

  showSlide(current);
}

/* PREV */

function prevSlide(){

  current = (current - 1 + slides.length) % slides.length;

  showSlide(current);
}

/* AUTOPLAY */

function startSlider(){

  interval = setInterval(nextSlide, 6000);
}

function resetSlider(){

  clearInterval(interval);

  startSlider();
}

/* BUTTONS */

nextBtn.addEventListener('click', () => {

  nextSlide();

  resetSlider();
});

prevBtn.addEventListener('click', () => {

  prevSlide();

  resetSlider();
});

/* DOTS */

dots.forEach((dot, index) => {

  dot.addEventListener('click', () => {

    showSlide(index);

    resetSlider();
  });
});

/* START */

startSlider();
