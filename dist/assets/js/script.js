const consultation=document.querySelector(".consultation"),consultationModal=document.querySelector(".consultation-modal"),closeButton=document.querySelectorAll(".close");consultation.addEventListener("click",(()=>{consultationModal.classList.add("active")})),closeButton.forEach((t=>{t.addEventListener("click",(()=>{t.closest(".modal").classList.remove("active")}))})),window.addEventListener("click",(t=>{t.target.classList.contains("modal")&&t.target.classList.remove("active")}));