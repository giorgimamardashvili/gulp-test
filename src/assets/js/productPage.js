const filterItem = document.querySelectorAll(".filter-item");
const filterblock = document.querySelector(".filter-filters__wrapper");
const loadFilters = document.querySelector(".filter-filters__load p");
const sortChoose = document.querySelector(".sorting-block__choose");
const productContainer = document.querySelector(".product-page__container");

if (window.innerWidth < 1025) {
  console.log("yes");
  mobileFilterShow();
}

function filterItemHeightChange() {
  filterItem.forEach((item) => {
    let title = item.querySelector(".filter-item__title");
    let img = item.querySelector("img");
    title.addEventListener("click", () => {
      title.classList.toggle("active");
      if (title.classList.contains("active")) {
        item.style.height = `${item.scrollHeight}px`;
        img.style.transform = "rotate(180deg)";
      }
      if (!title.classList.contains("active")) {
        item.style.height = `50px`;
        img.style.transform = "rotate(0deg)";
      }
    });
  });
}
filterItemHeightChange();

function loadAllFilters() {
  loadFilters.addEventListener("click", () => {
    loadFilters.classList.toggle("active");
    if (loadFilters.classList.contains("active")) {
      filterblock.classList.remove("hidden");
    }
    if (!loadFilters.classList.contains("active")) {
      filterblock.classList.add("hidden");
    }
  });
}
loadAllFilters();
function listAndGrid() {
  sortChoose.addEventListener("click", (e) => {
    let grid = sortChoose.querySelector(".grid");
    let listing = sortChoose.querySelector(".listing");
    let path = e.path || e.composedPath();
    if (path.includes(grid)) {
      grid.classList.add("active");
      listing.classList.remove("active");
      productContainer.classList.remove("product-page__container--listing");
      productContainer.classList.add("product-page__container--grid");
    }
    if (path.includes(listing)) {
      listing.classList.add("active");
      grid.classList.remove("active");
      productContainer.classList.add("product-page__container--listing");
      productContainer.classList.remove("product-page__container--grid");
    }
  });
}
listAndGrid();

function productsZindex() {
  for (let i = productContainer.children.length - 1; i >= 0; i--) {
    productContainer.children[
      productContainer.children.length - 1 - i
    ].style.zIndex = `${i}`;
  }
}
productsZindex();
$(document).ready(function () {
  $("select").niceSelect();
});

function mobileFilterShow() {
  $(".filter-categories__title").click(function () {
    $(".filter-categories__choose").toggle(500);
  });
  $(".filter-filters__title").click(function () {
    $(".filter-filters__wrapper").toggle(500);
    $(".filter-filters__load").toggle(500);
    $(".product-page .filter-filters__title h3::after").toggle(500);
  });
}
