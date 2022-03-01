'use strict';
// VARIABLES
const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const navList = document.querySelectorAll('li');
// const nav1 = document.querySelector('#nav-1');
// const nav2 = document.querySelector('#nav-2');
// const nav3 = document.querySelector('#nav-3');
// const nav4 = document.querySelector('#nav-4');
// const nav5 = document.querySelector('#nav-5');

// FUNCTIONS

// Добавляем анимацию появления и исчизновения чменю
function navMenuSlides (into, outo) {
    navList.forEach((navEl, i) => {
        navEl.classList.remove(`slide-${outo}-${i+1}`);
        navEl.classList.add(`slide-${into}-${i+1}`);
    });
}

// Добавляем анимацию исчезновения меню
// function navMenuSlidesOut () {
//     navList.forEach((navEl, i) => {
//         navEl.classList.remove(`slide-in-${i+1}`);
//         navEl.classList.add(`slide-out-${i+1}`);
//     });    
// }

function toggleNav () {
    // Menu Bars Open/close
    menuBars.classList.toggle('change');
    // Active menu
    overlay.classList.toggle('overlay-active');
    // Анимируем меню. Если класса есть - выдвигаем меню слева направо
    // Если класса нет - убираем меню справа налево
    if (overlay.classList.contains('overlay-active')) {
        // нужно добавить элемернту класс overlay-slide-left
        // в противном случае мы не сможем заменить класс на класс,
        // если не будет что заменять
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // overlay.classList.add('overlay-slide-right'); 
        // overlay.classList.remove('overlay-slide-left');
        // Добавляем анимацию появления меню
        navMenuSlides('in', 'out');
        // navList.forEach((navEl, i) => {
        //     navEl.classList.remove(`slide-out-${i+1}`);
        //     navEl.classList.add(`slide-in-${i+1}`);
        // });
        // nav1.classList.remove('slide-out-1');
        // nav1.classList.add('slide-in-1');
        // nav2.classList.remove('slide-out-2');
        // nav2.classList.add('slide-in-2');
        // nav3.classList.remove('slide-out-3');
        // nav3.classList.add('slide-in-3');
        // nav4.classList.remove('slide-out-4');
        // nav4.classList.add('slide-in-4');
        // nav5.classList.remove('slide-out-5');
        // nav5.classList.add('slide-in-5');
    }

    if (!overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // overlay.classList.add('overlay-slide-left'); 
        // overlay.classList.remove('overlay-slide-right');
        // Добавляем анимацию исчезновения меню
        navMenuSlides('out', 'in');
        // navList.forEach((navEl, i) => {
        //     navEl.classList.remove(`slide-in-${i+1}`);
        //     navEl.classList.add(`slide-out-${i+1}`);
        // });
        // nav1.classList.remove('slide-in-1');
        // nav1.classList.add('slide-out-1');
        // nav2.classList.remove('slide-in-2');
        // nav2.classList.add('slide-out-2');
        // nav3.classList.remove('slide-in-3');
        // nav3.classList.add('slide-out-3');
        // nav4.classList.remove('slide-in-4');
        // nav4.classList.add('slide-out-4');
        // nav5.classList.remove('slide-in-5');
        // nav5.classList.add('slide-out-5');
    }

}

// Event listeners
menuBars.addEventListener('click', toggleNav);
navList.forEach(navEl => navEl.addEventListener('click', toggleNav));
// function navToggle (navEl) {
//     navEl.addEventListener('click', toggleNav);
// }

// navToggle(nav1);
// navToggle(nav2);
// navToggle(nav3);
// navToggle(nav4);
// navToggle(nav5);