window.onload = function(){
    const menuDot = document.querySelector(".menu_dot")
    const menuDotClose = document.querySelector(".close")
    const submenu = document.querySelectorAll(".submenu")

    menuDot.addEventListener("click",()=>{
        menuDot.classList.toggle("close")
        document.querySelector("#header").classList.toggle("on")
        submenu.forEach((el)=>{
            el.classList.toggle("on")
        })
    })
    let imgIndex = 0
    const slider = document.querySelectorAll("#slider .slider__wrap .slider")
    const sliderWrap = document.querySelector("#slider .slider__wrap")
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true)
    sliderWrap.appendChild(sliderClone)
    let sliderDot = document.querySelectorAll("#slider .slider__dot span")

    setInterval(() => {
        let imgWidth = window.outerWidth -15
        imgIndex++
        sliderWrap.style.transform = "translateX("+ -imgWidth  * imgIndex +"px)"
        sliderWrap.style.transition = "all 0.6s"
        if(imgIndex == 1){
            sliderDot.forEach((el)=>{
                el.classList.remove("active")
            })
            sliderDot[1].classList.add("active")
        }
        if(imgIndex == 2){
            sliderDot.forEach((el)=>{
                el.classList.remove("active")
            })
            sliderDot[2].classList.add("active")
        }
        if(imgIndex == 3){
            sliderDot.forEach((el)=>{
                el.classList.remove("active")
            })
            sliderDot[0].classList.add("active")
            setTimeout(()=>{
                sliderWrap.style.transform = "translateY(0px)"
                sliderWrap.style.transition = "all 0s"
                imgIndex = 0
            },700)
        }
    }, 3000);

    let minImgIndex = 0
    const minSlider = document.querySelectorAll(".slider__min .slider")
    const minSliderWrap = document.querySelector(".slider__min .slider__wrap")
    const sliderClone2 = minSliderWrap.firstElementChild.cloneNode(true)
    minSliderWrap.appendChild(sliderClone2)
    let minSliderDot = document.querySelectorAll(".slider__min .slider__dot span")

    setInterval(() => {
        minImgIndex++
        minSliderWrap.style.transform = "translateX("+ -574.55 * minImgIndex +"px)"
        minSliderWrap.style.transition = "all 0.6s"
        if(minImgIndex == 1){
            minSliderDot.forEach((el)=>{
                el.classList.remove("active")
            })
            minSliderDot[1].classList.add("active")
        }
        if(minImgIndex == 2){
            minSliderDot.forEach((el)=>{
                el.classList.remove("active")
            })
            minSliderDot[2].classList.add("active")
        }
        if(minImgIndex == 3){
            minSliderDot.forEach((el)=>{
                el.classList.remove("active")
            })
            minSliderDot[0].classList.add("active")
            setTimeout(()=>{
                minSliderWrap.style.transform = "translateY(0px)"
                minSliderWrap.style.transition = "all 0s"
                minImgIndex = 0
            },700)
        }
    }, 3000);
    const chainPrev = document.querySelector(".chains__btn__prev")
    const chainNext = document.querySelector(".chains__btn__next")
    let chainIndex = 0
    chainNext.addEventListener("click",()=>{
        if(chainIndex==2){
            chainIndex = 0
        }else {
            chainIndex++
        }
        document.querySelector(".chains__wrap").style.transform = "translateX("+ -100 * chainIndex +"%)"
        document.querySelector(".chains__wrap").style.transition = "all 0.6s"
        console.log(chainIndex)

    })
    chainPrev.addEventListener("click",()=>{
        if(chainIndex==0){
            chainIndex = 2
        }else {
            chainIndex--
        }
        document.querySelector(".chains__wrap").style.transform = "translateX("+ -100 * chainIndex +"%)"
        document.querySelector(".chains__wrap").style.transition = "all 0.6s"
        console.log(chainIndex)
    })
    // const couponPrev = document.querySelector(".coupon__btn__prev")
    // const couponNext = document.querySelector(".coupon__btn__next")
    // const couponWrap = document.querySelector(".coupons__wrap")
    // const couponClone = couponWrap.firstElementChild.cloneNode(true)
    // couponWrap.appendChild(couponClone)
    // let couponIndex = 0
    // couponNext.addEventListener("click",()=>{
    //     if(couponIndex==5){
    //         const couponClone = couponWrap.firstElementChild.cloneNode(true)
    //         couponWrap.appendChild(couponClone)
    //         couponIndex++
    //     }else {
    //         couponIndex++
    //     }
    //     document.querySelector(".chains__wrap").style.transform = "translateX("+ -574.55 * chainIndex +"px)"
    //     document.querySelector(".chains__wrap").style.transition = "all 0.6s"
    //     console.log(chainIndex)

    // })
    // chainPrev.addEventListener("click",()=>{
    //     if(chainIndex==0){
    //         chainIndex = 2
    //     }else {
    //         chainIndex--
    //     }
    //     document.querySelector(".chains__wrap").style.transform = "translateX("+ -574.55 * chainIndex +"px)"
    //     document.querySelector(".chains__wrap").style.transition = "all 0.6s"
    //     console.log(chainIndex)
    // })


}