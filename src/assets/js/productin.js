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
const rect = document.querySelector(".rect");
const zoom = document.querySelector(".zoom");
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
      zoom.style.backgroundImage = `url('${img.getAttribute("src")}')`;
      console.log(zoom);
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

// width and height of main picture
let w1 = mainImg.offsetWidth;
let h1 = mainImg.offsetHeight;

// zoom ratio
let ratio = 2;

// zoom window backgroun-image size
// zoom.style.backgroundSize = w1 * ratio + "px" + h1 * ratio + "px";
zoom.style.backgroundSize = `${w1}px ${h1 * ratio}px`;

// coordinates of mouse
let x, y, xx, yy;

// width and height of selector
let w2 = rect.offsetWidth;
let h2 = rect.offsetHeight;

w2 = w2 / 2;
h2 = h2 / 2;

// moving selector box
function move(event) {
  console.log(event);
  // how far the mouse cursor for an element
  // x far from the cursor left of element
  x = event.offsetX;
  // y far from the cursor top of element
  y = event.offsetY;

  xx = x - w2;
  yy = y - h2;

  //keeping the selector inside the picture
  // left
  if (x < w2) {
    x = w2;
    // matching the zoom window with the selector
    xx = 0;
  }
  // right
  if (x > w1 - w2) {
    x = w1 - w2;
    xx = x - w2;
  }

  // top
  if (y < h2) {
    y = h2;
    yy = 0;
  }

  // bottom
  if (y > h1 - h2) {
    y = h1 - h2;
  }

  xx = xx * ratio;
  yy = yy * ratio;

  // changing the position of the selector
  rect.style.left = x + "px";
  rect.style.top = y + "px";
  // changing backgroun image of zoom window
  zoom.style.backgroundPosition = `${-xx}px ${-yy}px`;
}

mainImg.addEventListener("mousemove", function (event) {
  move(event);
  addOpacity();
});
mainImg.addEventListener("mouseout", function (event) {
  removeOpacity();
});

// show selector
function addOpacity() {
  rect.classList.add("active");
  zoom.classList.add("active");
}
function removeOpacity() {
  zoom.classList.remove("active");
}
