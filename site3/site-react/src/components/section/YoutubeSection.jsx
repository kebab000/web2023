import React from 'react';
import { Link } from 'react-router-dom';
const youtubeTitle = {
    desc: (
        <p>
            더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br />
            구독과 좋아요 부탁드립니다!
        </p>
    ),
    title: '코딩 유튜브 추천',
    link: '/',
};

const youtubeText = [
    {
        link: '/',
        img: '../assets/images/youtube/youtube01.jpg',
        title: 'youtube',
    },
    {
        link: '/',
        img: '../assets/images/youtube/youtube02.jpg',
        title: 'youtube',
    },
    {
        link: '/',
        img: '../assets/images/youtube/youtube03.jpg',
        title: 'youtube',
    },
    {
        link: '/',
        img: '../assets/images/youtube/youtube04.jpg',
        title: 'youtube',
    },
    {
        link: '/',
        img: '../assets/images/youtube/youtube01.jpg',
        title: 'youtube',
    },
    {
        link: '/',
        img: '../assets/images/youtube/youtube02.jpg',
        title: 'youtube',
    },
];
function YoutubeDesc({ img, title, link }) {
    return (
        <div>
            <Link to={link}>
                <img src={img} alt={title} />
            </Link>
        </div>
    );
}
function YoutubeSection(props) {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>{youtubeTitle.title}</h3>
                    <>{youtubeTitle.desc}</>
                    <a href={youtubeTitle.link} className="button-red">
                        자세히 보기
                    </a>
                </div>
                <div className="youtube__item">
                    {/* <div>
                        <a href="/">
                            <img
                                src="../assets/images/youtube/youtube01.jpg"
                                alt="youtube"
                            />
                        </a>
                    </div> */}
                    {youtubeText.map((text, index) => (
                        <YoutubeDesc
                            key={index}
                            img={text.img}
                            title={text.title}
                            link={text.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;
