'use strict';

const slider = {};

slider.rootEl = document.querySelector('.morale');
slider.slides = [...document.querySelectorAll('.morale__block')];
slider.prevBtn = slider.rootEl.querySelector('.slider__prev');
slider.nextBtn = slider.rootEl.querySelector('.slider__next');
slider.currentSlideIdx = slider.slides.findIndex(slide => slide.classList.contains('morale__block--current'));

if (slider.currentSlideIdx < 0) slider.currentSlideIdx = 0;

slider.rootEl.addEventListener('click', e => {
    if (e.target.classList.contains('slider__next')) slider.nextSlide();
    console.log(e.target);
});

slider.rootEl.addEventListener('click', e => {
    if (e.target.classList.contains('slider__prev')) slider.prevSlide();
    console.log(e.target);
});
// slider.addEventListener('click', () => slider.prevSlide());


slider.render = function () {
    const {currentSlideIdx} = this;

    slider.slides.forEach((slide, i) => currentSlideIdx === i ? 
    slide.classList.add('morale__block--current') : 
    slide.classList.remove('morale__block--current'));
};

slider.showSlide = function (i) {
    // slider.currentSlideIdx = Math.min(
    //     Math.max(i, 0),
    //     slider.slides.length -1
    // );
    slider.currentSlideIdx = (slider.slides.length + i) % slider.slides.length;
    slider.render();
};

slider.prevSlide = function  () {
    slider.showSlide(slider.currentSlideIdx - 1);
};

slider.nextSlide = function  () {
    slider.showSlide(slider.currentSlideIdx + 1);
};

console.log(slider);