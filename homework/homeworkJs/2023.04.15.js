let aa = 0
const dataQuestion = () => {
    const random = Math.floor( Math.random()*30)
    aa = random 
    fetch("../homeworkJson/dummy01.json")
    .then(res => res.json())
    .then(items => {
        document.querySelector(".ddd .p").innerHTML=items.quotes[aa].quote
        document.querySelector(".ddd .q").innerHTML=items.quotes[aa].author
    });
};
dataQuestion()
setInterval(dataQuestion,10000)