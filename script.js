// menu for mobile screen
const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');
// view menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    })
}
// close menu
if (navToggle) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}
// removing the sub_links
const navLinks = document.querySelectorAll('.nav_links');

const clickAction = () => {
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu');
}
navLinks.forEach((links) => {
    links.addEventListener('click', clickAction);
});

// swiper
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".home_swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: [-100, 0, -500],
                opacity: 0,
            },
            next: {
                translate: [100, 0, -500],
                opacity: 0,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});