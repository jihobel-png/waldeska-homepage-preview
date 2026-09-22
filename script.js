const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('[data-slide-to]')];
let activeSlide = 0;

function showSlide(nextIndex) {
  activeSlide = (nextIndex + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    const active = index === activeSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  dots.forEach((dot, index) => dot.classList.toggle('is-active', index === activeSlide));
}

document.querySelectorAll('[data-direction]').forEach((button) => {
  button.addEventListener('click', () => {
    showSlide(activeSlide + (button.dataset.direction === 'next' ? 1 : -1));
  });
});

dots.forEach((dot) => {
  dot.addEventListener('click', () => showSlide(Number(dot.dataset.slideTo)));
});

showSlide(0);
