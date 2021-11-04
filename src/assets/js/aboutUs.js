window.addEventListener("resize", () => {
  resizeBlockItems();
});

function resizeBlockItems() {
  [...document.querySelector(".block-infos").children].forEach((item) => {
    let width = item.offsetWidth;
    item.style.height = `${width}px`;
    console.log(item);
  });
}
resizeBlockItems();
