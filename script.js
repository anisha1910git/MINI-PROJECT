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
var reviewSlider = new Swiper(".review-slider", {
  loop: true,  // Add loop option if needed
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 40,
      },
      1024: {
          slidesPerView: 5,
          spaceBetween: 50,
      },
  },
});
