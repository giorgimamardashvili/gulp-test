swiperProducts=new Swiper(".products-slider__swiper",{direction:"horizontal",slidesPerView:"auto",spaceBetween:20,breakpoints:{320:{spaceBetween:10},701:{spaceBetween:20}},navigation:{nextEl:".products-slider__next",prevEl:".products-slider__prev"}}),modalImgs=new Swiper(".modal-imgs__container",{direction:"horizontal",slidesPerView:1,spaceBetween:500,centeredSlides:!0,roundLengths:!0,navigation:{nextEl:".modal-imgs__next",prevEl:".modal-imgs__prev"}});const imgs=document.querySelectorAll(".thumb-imgs img"),mainImg=document.querySelector(".main-img"),rect=document.querySelector(".rect"),zoom=document.querySelector(".zoom"),viewMore=document.querySelector(".product-inside__button"),dect=document.querySelector(".descriptions"),modal=document.querySelector(".modal-imgs");function remover(e){for(const e of document.querySelectorAll(".thumb-imgs li.active"))e.classList.remove("active");e.classList.add("active")}function changeMainImg(){imgs.forEach((e=>{e.addEventListener("click",(()=>{console.log(e.getAttribute("src")),mainImg.style.backgroundImage=`url('${e.getAttribute("src")}')`,zoom.style.backgroundImage=`url('${e.getAttribute("src")}')`,console.log(zoom),remover(e.parentElement)}))}))}function viewMoreEvent(){viewMore.addEventListener("click",(()=>{viewMore.classList.toggle("active"),viewMore.classList.contains("active")||(dect.style.height="0px",viewMore.querySelector("span").innerText="View More"),viewMore.classList.contains("active")&&(dect.style.height=`${dect.scrollHeight}px`,viewMore.querySelector("span").innerText="View Less")}))}function imgModal(){const e=modal.querySelector(".modal-imgs__close");mainImg.addEventListener("click",(()=>{imgs.forEach(((e,t)=>{e.parentElement.classList.contains("active")&&(modalImgs.activeIndex=t)})),modal.classList.add("active"),document.body.style.overflow="hidden"})),window.addEventListener("click",(e=>{e.target==modal&&(modal.classList.remove("active"),document.body.style.overflow="")})),e.addEventListener("click",(()=>{modal.classList.remove("active"),document.body.style.overflow=""}))}changeMainImg(),viewMoreEvent(),imgModal();let x,y,xx,yy,w1=mainImg.offsetWidth,h1=mainImg.offsetHeight,ratio=2;zoom.style.backgroundSize=`${w1}px ${h1*ratio}px`;let w2=rect.offsetWidth,h2=rect.offsetHeight;function move(e){console.log(e),x=e.offsetX,y=e.offsetY,xx=x-w2,yy=y-h2,x<w2&&(x=w2,xx=0),x>w1-w2&&(x=w1-w2,xx=x-w2),y<h2&&(y=h2,yy=0),y>h1-h2&&(y=h1-h2),xx*=ratio,yy*=ratio,rect.style.left=x+"px",rect.style.top=y+"px",zoom.style.backgroundPosition=`${-xx}px ${-yy}px`}function addOpacity(){rect.classList.add("active"),zoom.classList.add("active")}function removeOpacity(){zoom.classList.remove("active")}w2/=2,h2/=2,mainImg.addEventListener("mousemove",(function(e){move(e),addOpacity()})),mainImg.addEventListener("mouseout",(function(e){removeOpacity()}));