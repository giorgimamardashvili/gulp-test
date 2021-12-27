const buttons = document.querySelectorAll(".animated-button.text__button");
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
