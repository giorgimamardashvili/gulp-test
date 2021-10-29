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
const swiperPartners = new Swiper(".partners-slider__container", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 6,
  loop: "true",
  spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 5,
    },
    1366: {
      slidesPerView: 5,
    },
  },
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".partners-slider__pag",
  },
});

const breakpoint = window.matchMedia("(max-width:700px)");
let swiperProducts;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (swiperProducts !== undefined && swiperSolutions !== undefined) {
      swiperProducts.destroy(true, true);
      swiperSolutions.destroy(true, true);
    }
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};
const enableSwiper = function () {
  swiperProducts = new Swiper(".products-slider__swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: ".products-slider__next",
      prevEl: ".products-slider__prev",
    },
  });
  swiperSolutions = new Swiper(".solution-slider__container", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: ".solution-slider__next",
      prevEl: ".solution-slider__prev",
    },
  });
};

breakpoint.onchange = breakpointChecker;
// kickstart
breakpointChecker();
