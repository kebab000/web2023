let aa = 0
const dataQuestion = () => {
    const random = Math.floor( Math.random()*30)
    aa = random 

    fetch("../homeworkJson/dummy01.json")
    .then(res => res.json())
    .then(items => {
        let BGI = "url('https://source.unsplash.com/random/?star')"
        document.querySelector(".ddd .p").innerHTML=items.quotes[random].quote
        document.querySelector(".ddd .q").innerHTML=items.quotes[random].author
        document.querySelector(".wrap").style.backgroundImage = BGI
        
        // setTimeout(function(){
        //     location.reload();
        // },3000);
    });
};
dataQuestion()
setInterval(dataQuestion,3000)