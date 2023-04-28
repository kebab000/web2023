const allMusic = [
    {
        name : "1.Deck The Halls",
        artist : "DJ Williams",
        img: "music_view01",
        audio: "music_audio01"
    }, {
        name : "2.Dove Love",
        artist : "Quincas Moreira",
        img: "music_view02",
        audio: "music_audio02"
    }, {
        name : "3.Frightmare",
        artist : "Jimena Contreras",
        img: "music_view03",
        audio: "music_audio03"
    }, {
        name : "4.Ice & Fire",
        artist : "King Canyon",
        img: "music_view04",
        audio: "music_audio04"
    }, {
        name : "5.Illusions",
        artist : "Anno Domini Beats",
        img: "music_view05",
        audio: "music_audio05"
    }, {
        name : "6.In Memory of Jean Talon",
        artist : "The Mini Vandals",
        img: "music_view06",
        audio: "music_audio06"
    }, {
        name : "7.Savior",
        artist : "Telecasted",
        img: "music_view07",
        audio: "music_audio07"
    }, {
        name : "8.Smoke Jacket Blues",
        artist : "TrackTribe",
        img: "music_view08",
        audio: "music_audio08"
    }, {
        name : "9.To Loom Is to Love",
        artist : "The Mini Vandals",
        img: "music_view09",
        audio: "music_audio09"
    }, {
        name : "10.When You're Not Looking",
        artist : "Nathan Moore",
        img: "music_view10",
        audio: "music_audio10"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");



let musicIndex = 1; // 현재음악 인덱스

// 음악재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;  //음악 이름
    musicArtist.innerText = allMusic[num-1].artist;  //음악 이름
    musicView.src = `img/${allMusic[num-1].img}.png` //음악 이미지
    musicView.alt = allMusic[num-1].artist; //음악 알트
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`; // 뮤직파일 
}
//재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}
//정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
}
// 이전곡 듣기
const prevMusic = ( ) => {
    // if(musicIndex != 1){
    //     musicIndex--;
    // } else {
    //     musicIndex = allMusic.length;
    // }
    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;
    loadMusic(musicIndex);
    playMusic();
}
// 다음곡 듣기
const nextMusic = ( ) => {
    // if(musicIndex <= allMusic.length-1){
    //     musicIndex++;
    // }else{
    //     musicIndex = 1
    // }
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;

    loadMusic(musicIndex);
    playMusic();
}
//플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   //음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();
});
// 재생버튼
musicPrevBtn.addEventListener("click", ()=>{
    prevMusic();
})
// 재생버튼
musicNextBtn.addEventListener("click", ()=>{
    nextMusic();
})
// 뮤직 진행 바 
musicAudio.addEventListener("timeupdate", e => {
    console.log(e)
    const currentTime = e.target.currentTime; // 현재 재생되는 시간
    const duration = e.target.duration; // 오디오의 총 길이
    let progressWidth = (currentTime/duration)*100
    musicProgressBar.style.width = `${progressWidth}%`;
    // 전체 시간
    musicAudio.addEventListener("loadeddata", ()=> {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`
    })
    // 진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) currentSec = `0${currentSec}`
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`


});
// 진행 버튼 클릭
musicProgress.addEventListener("click",(e) => {
    let progressWidth = musicProgress.clientWidth;  //진행바 전체 길이
    let clickedOffsetX = e.offsetX; //진행바를 기준으로 측정되는 X좌표값
    let songDuration = musicAudio.duration; //오디오 전체 길이 
    // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
})


// 플레이 버튼 클릭 했을 때 
// musicPlay.addEventListener("click", ()=> {

// });
window.addEventListener("load", () => {
    loadMusic(musicIndex);
})