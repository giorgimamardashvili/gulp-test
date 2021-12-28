const consultation = document.querySelector(".consultation");
const consultationModal = document.querySelector(".consultation-modal");
const closeButton = document.querySelectorAll(".close");

consultation.addEventListener("click", () => {
  consultationModal.classList.add("active");
});
closeButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".modal").classList.remove("active");
  });
});
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("active");
  }
});
