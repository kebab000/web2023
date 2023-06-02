index = 0

setInterval(() => {
    index++
    document.querySelector(".sliderWrap").style.transform = "translateY("+ -index * 400 +"px)";
    document.querySelector(".sliderWrap").style.transition = "all 0.3s";
    if(index == 2){
        index = 0
    }
}, 3000);

// 공지사항& 갤러리

const info = document.querySelector(".info")
const gallery = document.querySelector(".gallery")
const infoDesc = document.querySelector(".info__desc")
const galleryImg = document.querySelector(".gallery__wrap")

info.addEventListener("click",()=>{
    
    info.classList.add("active")
    gallery.classList.remove("active")
    infoDesc.style.display = "block"
    galleryImg.style.display = "none"

})

gallery.addEventListener("click",()=>{
    gallery.classList.add("active")
    info.classList.remove("active")

    infoDesc.style.display = "none"
    galleryImg.style.display = "block"
})

// 탭메뉴

const menu = document.querySelector("#nav .menu > ul")
const subMenu = document.querySelectorAll("#nav .menu > ul .submenu")
const subMenuDesc = document.querySelectorAll("#nav .menu > ul .submenu li")

menu.addEventListener("mouseenter",()=>{
    subMenu.forEach((el)=>{
        el.style.width = 10000+"px";
        el.querySelectorAll("li").forEach((li)=>{
            li.style.display = "block"
        })

    })
})

