// slider
index = 1;
setInterval(() => {
    document.querySelector(".slider_wrap").style.transform = "translateY( "+ (-400 * index) + "px)";
    document.querySelector(".slider_wrap").style.transition = " all 0.5s ";
    index++;
    if(index==3){
        index = 0;
    }
    // console.log(index)
}, 3000);

// menu
const menu = document.querySelectorAll("#nav .menu > ul > li")
menu.forEach((el)=>{
    el.addEventListener("click",()=>{
        el.querySelector(".submenu").classList.toggle("active");
    });
})

