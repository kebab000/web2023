const allMusic = [
    {
        name : "1.Deck The Halls - DJ Williams",
        artist : "몰루",
        img: "music_view01",
        audio: "music_audio01"
    }, {
        name : "2.Dove Love - Quincas Moreira",
        artist : "dd",
        img: "music_view02",
        audio: "music_audio02"
    }, {
        name : "3.Frightmare - Jimena Contreras",
        artist : "dd",
        img: "music_view03",
        audio: "music_audio03"
    }, {
        name : "4.Ice & Fire - King Canyon",
        artist : "dd",
        img: "music_view04",
        audio: "music_audio04"
    }, {
        name : "5.Illusions - Anno Domini Beats",
        artist : "dd",
        img: "music_view05",
        audio: "music_audio05"
    }, {
        name : "6.In Memory of Jean Talon - The Mini Vandals",
        artist : "dd",
        img: "music_view06",
        audio: "music_audio06"
    }, {
        name : "7.Savior - Telecasted",
        artist : "dd",
        img: "music_view07",
        audio: "music_audio07"
    }, {
        name : "8.Smoke Jacket Blues - TrackTribe",
        artist : "dd",
        img: "music_view08",
        audio: "music_audio08"
    }, {
        name : "9.To Loom Is to Love - The Mini Vandals",
        artist : "dd",
        img: "music_view09",
        audio: "music_audio09"
    }, {
        name : "10.When You're Not Looking - Nathan Moore",
        artist : "dd",
        img: "music_view10",
        audio: "music_audio10"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = document.querySelector("#main-audio");



let musicIndexd = 6; // 현재음악 인덱스

// 음악재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;  //음악 이름
    musicArtist.innerText = allMusic[num-1].artist;  //음악 이름
    musicView.src = `img/${allMusic[num-1].img}.png` //음악 이미지
    musicView.alt = allMusic[num-1].artist; //음악 알트
    musicAudio.src = `audio/${allMusic[num-1].img}.mp3`; // 뮤직파일
}
window.addEventListener("load", () => {
    loadMusic(musicIndexd);

    musicAudio.play();
})