const buttons=document.querySelectorAll(".animated-button.text__button"),sortChoose=document.querySelector(".sorting-block__choose"),items=document.querySelectorAll(".services .item"),itemsContainer=document.querySelector(".services__items");function main(){window.innerWidth>700?buttons.forEach((e=>{e.addEventListener("mouseenter",(()=>{e.nextElementSibling.classList.add("hover")}),!0),e.addEventListener("mouseout",(()=>{e.nextElementSibling.classList.remove("hover")}),!0)})):buttons.forEach((e=>{let t=e.nextElementSibling;t.classList.add("hover"),t.style.height=t.closest(".item").offsetHeight-20-t.closest(".item").querySelector(".hidden").offsetHeight/2+"px",t.style.width=`${t.closest(".item").offsetWidth}px`}))}function listAndGrid(){sortChoose.addEventListener("click",(e=>{let t=sortChoose.querySelector(".grid"),s=sortChoose.querySelector(".listing"),i=e.path||e.composedPath();i.includes(t)&&(t.classList.add("active"),s.classList.remove("active"),items.forEach((e=>{let t=e.querySelector(".item__right"),s=e.querySelector(".item__left");itemsContainer.classList.add("grid"),e.classList.add("grid"),t.classList.add("grid"),s.classList.add("grid")}))),i.includes(s)&&(s.classList.add("active"),t.classList.remove("active"),items.forEach((e=>{let t=e.querySelector(".item__right"),s=e.querySelector(".item__left");itemsContainer.classList.remove("grid"),e.classList.remove("grid"),t.classList.remove("grid"),s.classList.remove("grid")})))}))}main(),window.addEventListener("resize",(()=>{main()})),listAndGrid();