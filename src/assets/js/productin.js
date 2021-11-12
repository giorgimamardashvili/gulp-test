swiperProducts = new Swiper(".products-slider__swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 10,
    },
    701: {
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".products-slider__next",
    prevEl: ".products-slider__prev",
  },
});
modalImgs = new Swiper(".modal-imgs__container", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 500,
  centeredSlides: true,
  roundLengths: true,

  // Navigation arrows
  navigation: {
    nextEl: ".modal-imgs__next",
    prevEl: ".modal-imgs__prev",
  },
});

const imgs = document.querySelectorAll(".thumb-imgs img");
const mainImg = document.querySelector(".main-img");
const viewMore = document.querySelector(".product-inside__button");
const dect = document.querySelector(".descriptions");
const modal = document.querySelector(".modal-imgs");

function remover(item) {
  for (const li of document.querySelectorAll(".thumb-imgs li.active")) {
    li.classList.remove("active");
  }
  item.classList.add("active");
}

function changeMainImg() {
  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      console.log(img.getAttribute("src"));
      mainImg.style.backgroundImage = `url('${img.getAttribute("src")}')`;
      remover(img.parentElement);
    });
  });
}
changeMainImg();

function viewMoreEvent() {
  viewMore.addEventListener("click", () => {
    viewMore.classList.toggle("active");
    if (!viewMore.classList.contains("active")) {
      dect.style.height = "0px";
      viewMore.querySelector("span").innerText = "View More";
    }
    if (viewMore.classList.contains("active")) {
      dect.style.height = `${dect.scrollHeight}px`;
      viewMore.querySelector("span").innerText = "View Less";
    }
  });
}
viewMoreEvent();

function imgModal() {
  const close = modal.querySelector(".modal-imgs__close");
  mainImg.addEventListener("click", () => {
    imgs.forEach((item, index) => {
      if (item.parentElement.classList.contains("active")) {
        modalImgs.activeIndex = index;
      }
    });
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
  close.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });
}
imgModal();
