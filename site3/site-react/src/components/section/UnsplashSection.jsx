import React from 'react';
import { Link } from 'react-router-dom';
const unsplashTitle = {
    desc: (
        <p>
            unsplash에서는 다양한 이미지를 무료로 제공하고 있습니다.
            <br /> 다양한 사진들을 무료로 사용하세요!
        </p>
    ),
    title: '유용한 사진들',
    link: '/',
};

const unsplashText = [
    {
        link: '/',
        img: '../assets/images/unsplash/unsplash01.png',
        title: 'unsplash',
    },
    {
        link: '/',
        img: '../assets/images/unsplash/unsplash02.png',
        title: 'unsplash',
    },
    {
        link: '/',
        img: '../assets/images/unsplash/unsplash03.png',
        title: 'unsplash',
    },
    {
        link: '/',
        img: '../assets/images/unsplash/unsplash04.png',
        title: 'unsplash',
    },
    {
        link: '/',
        img: '../assets/images/unsplash/unsplash05.png',
        title: 'unsplash',
    },
    {
        link: '/',
        img: '../assets/images/unsplash/unsplash06.png',
        title: 'unsplash',
    },
];
function UnsplashDesc({ img, title, link }) {
    return (
        <div>
            <Link to={link}>
                <img src={img} alt={title} />
            </Link>
        </div>
    );
}
function UnsplashSection(props) {
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>{unsplashTitle.title}</h3>
                    <>{unsplashTitle.desc}</>
                    <Link to={unsplashTitle.link} className="button-blue">
                        자세히 보기
                    </Link>
                </div>
                <div className="unsplash__item">
                    {unsplashText.map((text, index) => (
                        <UnsplashDesc
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

export default UnsplashSection;
