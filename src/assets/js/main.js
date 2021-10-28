const swiperMain = new Swiper(".main-slider__container", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".main-slider__pag",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__next",
    prevEl: ".main-slider__prev",
  },
});
const swiperProducts = new Swiper(".products-slider__swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",

  // Navigation arrows
  navigation: {
    nextEl: ".products-slider__next",
    prevEl: ".products-slider__prev",
  },
});
