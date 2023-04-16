const lottonum = document.querySelectorAll(".number p");
const clickBtn = document.querySelector(".click");
const random = Math.floor( Math.random()*45)+1;
let numLength = lottonum.length
let num = []

clickBtn.addEventListener("click",function(){
    while (num.length < numLength) { // 필요한 숫자 개수만큼 무작위 숫자 생성
        const random = Math.floor(Math.random() * 45) + 1;
        if (!num.includes(random)) { // 배열에 중복된 숫자가 없으면 배열에 추가
          num.push(random);
        }
    }
    lottonum.forEach((el,i)=>{
        // num +=[random];
        lottonum[i].innerHTML=num[i]
    })
    num = [];
})
// 내 원래 코드
// const lottonum = document.querySelectorAll(".number p");
// const clickBtn = document.querySelector(".click");
// const random = Math.floor( Math.random()*45)+1;
// let numLength = lottonum.length
// let num = []

// clickBtn.addEventListener("click",function(){
//     lottonum.forEach((el,i)=>{
//         const random = Math.floor( Math.random()*45)+1;
//         num +=[random];
//         lottonum[i].innerHTML=random
//     })
// })
