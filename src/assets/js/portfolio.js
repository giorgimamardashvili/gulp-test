const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function textHover() {
  const textContainer = document.querySelectorAll(".portfolio-item__info");
  textContainer.forEach((container) => {
    let h3 = container.querySelector("h3");
    let fullHeight = container.scrollHeight;
    let top = fullHeight - h3.scrollHeight - 60;

    if (window.innerWidth > 1024) {
      container.style.top = `${top}px`;
    }
  });
}
textHover();

window.addEventListener("resize", () => {
  textHover();
});
