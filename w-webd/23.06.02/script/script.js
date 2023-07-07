imgIndex = 0
const sliderWrap = document.querySelector(".sliderWrap")
const slider = document.querySelectorAll(".slider")
const sliderClone = sliderWrap.firstElementChild.cloneNode(true)
sliderWrap.appendChild(sliderClone)

setInterval(() => {
    imgIndex++
    sliderWrap.style.transform = "translateY("+ -400 * imgIndex +"px)"
    sliderWrap.style.transition = "all 0.6s"

    if(imgIndex == 3){
        setTimeout(()=>{
            sliderWrap.style.transform = "translateY(0px)"
            sliderWrap.style.transition = "all 0s"
            imgIndex = 0
        },700)
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

window.onload = function(){
    const menu = document.querySelector(".menu > ul")

    menu.addEventListener("mouseover",()=>{
        document.querySelectorAll(".submenu").forEach((el)=>{
            el.style.display = "block"
        })
        document.querySelector("#main").classList.add("on")
    })
    menu.addEventListener("mouseout",()=>{
        document.querySelectorAll(".submenu").forEach((el)=>{
            el.style.display = "none"
        })
        document.querySelector("#main").classList.remove("on")
    })
// 팝업 
    const spotmenu1 = document.querySelector(".spotmenu1")
    const spotmenu2 = document.querySelector(".spotmenu2")
    const popup1 = document.querySelector(".popup1")
    const popup2 = document.querySelector(".popup2")
    const popup1Close = document.querySelector(".popup1 .popup1_close")
    const popup2Close = document.querySelector(".popup2 .popup2_close")

    spotmenu1.addEventListener("click",()=>{
        popup1.style.display = "block"
    })
    spotmenu2.addEventListener("click",()=>{
        popup2.style.display = "block"
    })
    popup1Close.addEventListener("click",()=>{
        popup1.style.display = "none"
    })
    popup2Close.addEventListener("click",()=>{
        popup2.style.display = "none"
    })
}
