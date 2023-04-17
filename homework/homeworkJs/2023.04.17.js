const slider = document.querySelector(".slider__inner");
let index = 0
let aa = 0
let bb = 0
function func (){
    aa = (index += 1) % 3
    slider.style.transform = "translateY(" + -810 * aa + "px)";
    slider.style.transition = "all 0.6s";
}
const dataQuestion = () => {
    const random = Math.floor( Math.random()*30);
    const random1 = Math.floor( Math.random()*30000);
    const random2 = Math.floor( Math.random()*30000);
    bb = random 

    fetch("../homeworkJson/dummy01.json")
    .then(res => res.json())
    .then(items => {
        document.querySelector(".ddd .p").innerHTML=items.quotes[bb].quote
        document.querySelector(".ddd .q").innerHTML=items.quotes[bb].author
        if(aa == 1){
            document.querySelector(".slider.s3 img").src = `https://source.unsplash.com/random/?moutian&t=${random2}`;
        } else if (aa == 2) {
            document.querySelector(".slider.s1 img").src = `https://source.unsplash.com/random/?city&t=${new Date().getTime()}`;
        } else {
            document.querySelector(".slider.s2 img").src = `https://source.unsplash.com/random/?star&t=${random1}`;
        }
    });
};
dataQuestion()
setInterval(func,5000);
setInterval(dataQuestion,5000)
