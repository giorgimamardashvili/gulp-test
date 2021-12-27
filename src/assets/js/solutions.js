const swiperMain = new Swiper(".solutions__container .swiper", {
  // Optional parameters
  direction: "horizontal",
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },

  // If we need pagination
  pagination: {
    el: ".solutions__container .swiper-pagination ",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".solutions__container .swiper-button-next",
    prevEl: ".solutions__container .swiper-button-prev",
  },
});

const productsCont = document.querySelector(".solutions__products");
let heightCont = productsCont.offsetHeight;
productsCont.style.height = `${heightCont + 52}px`;

const text = document.querySelector(".solutions__text");
const button = document.querySelector(".solutions__button");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    text.style.height = `${text.scrollHeight}px`;
    return;
  } else {
    text.style.height = `155px`;
  }
});
