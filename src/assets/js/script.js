const consultation = document.querySelector(".consultation");
const consultationModal = document.querySelector(".consultation-modal");
const closeButton = document.querySelectorAll(".close");
const auth = document.querySelector(".header__login");
const authModal = document.querySelector(".auth-modal");

consultation.addEventListener("click", () => {
  consultationModal.classList.add("active");
});
auth.addEventListener("click", () => {
  authModal.classList.add("active");
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

const authChoose = document.querySelectorAll(".auth-modal__choose span");
const [regButton, loginButton] = document.querySelectorAll(
  ".auth-modal__choose span"
);
const [loginForm, regForm] = document.querySelectorAll(".auth-modal__wrapper");

authChoose.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      return;
    }
    if (!item.classList.contains("active") && item == regButton) {
      loginButton.classList.remove("active");
      loginForm.classList.remove("active");
      regButton.classList.add("active");
      regForm.classList.add("active");
    }
    if (!item.classList.contains("active") && item == loginButton) {
      loginButton.classList.add("active");
      loginForm.classList.add("active");
      regButton.classList.remove("active");
      regForm.classList.remove("active");
    }
  });
});

const legalInputs = document.querySelectorAll(".legal");

document.body.addEventListener("change", function (e) {
  let target = e.target;
  console.log(target.id);
  switch (target.id) {
    case "legalEntity":
      legalInputs.forEach((item) => {
        item.classList.add("active");
      });
      break;
    case "individual":
      legalInputs.forEach((item) => {
        item.classList.remove("active");
      });
      break;
  }
});
