import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

let swiperCategorias = new Swiper(".swiper-equipo", {

    slidesPerView: 1,
    speed: 500,
    spaceBetween: 0,
    loop:true,
    autoplay:false,
    centeredSlides: true,
    grabCursor: true,
    simulateTouch: true,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        700:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        920:{
            slidesPerView: 3,
            spaceBetween: 15,
        }
      }

});
