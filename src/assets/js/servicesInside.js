const container = document.querySelector(".services-inside__text");
const blueLine = container.querySelector(".blue-line");
const h1 = container.querySelector("h1");
let styles = h1.currentStyle || window.getComputedStyle(h1);
let containerStyles =
  container.currentStyle || window.getComputedStyle(container);

function blueLineHeight() {
  if (window.innerWidth > 1024) {
    let allheight = h1.offsetHeight / 2 + 5;
    blueLine.style.height = `calc(${allheight}px + ${styles.marginBottom})`;
    blueLine.style.width = `calc(${containerStyles.paddingLeft} + 25px)`;
    blueLine.style.left = `calc(-${containerStyles.paddingLeft} / 2)`;
  }
}
blueLineHeight();

window.addEventListener("resize", () => {
  blueLineHeight();
});
