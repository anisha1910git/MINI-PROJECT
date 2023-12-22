let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// menu.onclick = () => {
//     console.log('Menu Clicked');
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// };

window.onscroll = () => {
    // menu.classList.remove('fa-tim');
    navbar.classList.remove('active');
};


/* slider */

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 // Swiper initialization for review-slider
// Swiper initialization for review-slider
var reviewSlider = new Swiper(".review-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  