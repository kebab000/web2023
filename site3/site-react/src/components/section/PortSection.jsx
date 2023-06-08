import React from 'react';
import { Link } from 'react-router-dom';

const portText = [
    {
        portLink: '/',
        portImg: '../assets/images/port/port01.png',
        iconImg: '../assets/images/member/member80.svg',
        title: '진현미 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        portLink: '/',
        portImg: '../assets/images/port/port02.png',
        iconImg: '../assets/images/member/member02.svg',
        title: '김도현 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        portLink: '/',
        portImg: '../assets/images/port/port03.png',
        iconImg: '../assets/images/member/member03.svg',
        title: '이양구 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        portLink: '/',
        portImg: '../assets/images/port/port04.png',
        iconImg: '../assets/images/member/member04.svg',
        title: '천설희 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        portLink: '/',
        portImg: '../assets/images/port/port05.png',
        iconImg: '../assets/images/member/member05.svg',
        title: '이승연 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        portLink: '/',
        portImg: '../assets/images/port/port06.png',
        iconImg: '../assets/images/member/member06.svg',
        title: '김현빈 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
];
const portTitle = {
    title: '포트폴리오 소개',
    desc: '웹쓰 30기 포트폴리오 모음집입니다.',
};
function PortDesc({ portLink, portImg, iconImg, title, desc }) {
    return (
        <div className="port">
            <figure className="port__header">
                <Link to={portLink}>
                    <img src={portImg} alt="포트폴리오" />
                </Link>
            </figure>
            <div className="port__body">
                <span>
                    <img src={iconImg} alt={title} />
                </span>
                <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}
function PortSection(props) {
    return (
        <section id="portSection" className={props.attr}>
            <h3>{portTitle.title}</h3>
            <p>{portTitle.desc}</p>
            <div className="port__inner container">
                <div className="port__btn"></div>
                <div className="port__cont">
                    {portText.map((text, index) => (
                        <PortDesc
                            key={index}
                            portLink={text.portLink}
                            portImg={text.portImg}
                            iconImg={text.iconImg}
                            title={text.title}
                            desc={text.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortSection;
