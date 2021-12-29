const orders = document.querySelectorAll(".orders-item");

orders.forEach((order) => {
  let arrow = order.querySelector("svg");
  let top = order.querySelector(".orders-item__top");
  let middle = order.querySelector(".orders-item__middle");
  let bottom = order.querySelector(".orders-item__bottom");
  let button = order.querySelector(".orders-item__button .button-container");
  let height = top.offsetHeight;
  let fullHeight = order.scrollHeight;
  if (window.innerWidth > 800) {
    console.log("if");

    order.style.height = height + "px";

    arrow.addEventListener("click", () => {
      arrow.classList.toggle("active");
      if (arrow.classList.contains("active")) {
        order.style.height = fullHeight + "px";
      } else {
        order.style.height = height + "px";
      }
    });
  } else {
    console.log("else");
    middle.style.height = 0;
    bottom.style.height = 0;
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        middle.style.height = middle.scrollHeight + "px";
        bottom.style.height = "156px";
      } else {
        middle.style.height = 0;
        bottom.style.height = 0;
      }
    });
  }
});
