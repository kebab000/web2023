// 슬라이드
const sliderWrap = document.querySelector(".slider__wrap");
const slider = document.querySelector(".slider__wrap .article");
let slider_index = 0;

function func(){
    slider.style.transform = "translateY(" + (-350 * slider_index) + "px)";
    slider.style.transition = "all 0.5s";
    slider_index++;
    if(slider_index == 3){
        slider_index = 0;
    }
}       
setInterval(func, 3000);
// tap 메뉴 
const menu = document.querySelectorAll(".menu > ul > li")
menu.forEach(function(el){
    this.addEventListener("mouseover", function(el){
        const subMenu = el.querySelector(".subMenu")  
        subMenu.classList.add("active");
    })
})