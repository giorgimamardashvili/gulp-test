const buttons=document.querySelectorAll(".animated-button.text__button");function main(){window.innerWidth>700?buttons.forEach((e=>{e.addEventListener("mouseenter",(()=>{e.nextElementSibling.classList.add("hover")}),!0),e.addEventListener("mouseout",(()=>{e.nextElementSibling.classList.remove("hover")}),!0)})):buttons.forEach((e=>{let t=e.nextElementSibling;t.classList.add("hover"),t.style.height=t.closest(".item").offsetHeight-20-t.closest(".item").querySelector(".hidden").offsetHeight/2+"px",t.style.width=`${t.closest(".item").offsetWidth}px`}))}main(),window.addEventListener("resize",(()=>{main()}));