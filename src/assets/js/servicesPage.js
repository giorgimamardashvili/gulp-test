const buttons = document.querySelectorAll(".animated-button.text__button");
const sortChoose = document.querySelector(".sorting-block__choose");
const items = document.querySelectorAll(".services .item");
const itemsContainer = document.querySelector(".services__items");

function main() {
  if (window.innerWidth > 700) {
    buttons.forEach((button) => {
      button.addEventListener(
        "mouseenter",
        () => {
          let animButton = button.nextElementSibling;
          animButton.classList.add("hover");
        },
        true
      );
      button.addEventListener(
        "mouseout",
        () => {
          let animButton = button.nextElementSibling;
          animButton.classList.remove("hover");
        },
        true
      );
    });
  } else {
    buttons.forEach((button) => {
      let animButton = button.nextElementSibling;
      animButton.classList.add("hover");
      animButton.style.height = `${
        animButton.closest(".item").offsetHeight -
        20 -
        animButton.closest(".item").querySelector(".hidden").offsetHeight / 2
      }px`;
      animButton.style.width = `${animButton.closest(".item").offsetWidth}px`;

      //   //// hidden container
      //   const hidCont = animButton
      //     .closest(".item")
      //     .querySelector(".hidden-container");
      //   hidCont.style.height = `${
      //     hidCont.parentElement.offsetHeight -
      //     20 -
      //     hidCont.parentElement.querySelector(".hidden").offsetHeight / 2
      //   }px`;
      //   hidCont.style.width = `${hidCont.parentElement.offsetWidth / 2}px`;
    });
  }
}
main();
window.addEventListener("resize", () => {
  main();
});

function listAndGrid() {
  sortChoose.addEventListener("click", (e) => {
    let grid = sortChoose.querySelector(".grid");
    let listing = sortChoose.querySelector(".listing");
    let path = e.path || e.composedPath();
    if (path.includes(grid)) {
      grid.classList.add("active");
      listing.classList.remove("active");
      items.forEach((item) => {
        let right = item.querySelector(".item__right");
        let left = item.querySelector(".item__left");
        itemsContainer.classList.add("grid");
        item.classList.add("grid");
        right.classList.add("grid");
        left.classList.add("grid");
      });
    }
    if (path.includes(listing)) {
      listing.classList.add("active");
      grid.classList.remove("active");
      items.forEach((item) => {
        let right = item.querySelector(".item__right");
        let left = item.querySelector(".item__left");
        itemsContainer.classList.remove("grid");
        item.classList.remove("grid");
        right.classList.remove("grid");
        left.classList.remove("grid");
      });
    }
  });
}
listAndGrid();
