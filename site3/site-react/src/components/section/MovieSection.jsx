import React from 'react';
import { Link } from 'react-router-dom';
const movieTitle = {
    desc: (
        <p>
            개발에 관련된 영화 목록입니다.
            <br /> 영화를 보고 개발자에 대해 알아봅시다!
        </p>
    ),
    title: '개발자 추천 영화',
    link: '/',
};

const movieText = [
    {
        link: '/',
        img: '../assets/images/movie/movie01.png',
        title: 'movie',
    },
    {
        link: '/',
        img: '../assets/images/movie/movie02.png',
        title: 'movie',
    },
    {
        link: '/',
        img: '../assets/images/movie/movie03.png',
        title: 'movie',
    },
    {
        link: '/',
        img: '../assets/images/movie/movie04.png',
        title: 'movie',
    },
    {
        link: '/',
        img: '../assets/images/movie/movie01.png',
        title: 'movie',
    },
    {
        link: '/',
        img: '../assets/images/movie/movie02.png',
        title: 'movie',
    },
];
function MovieDesc({ img, title, link }) {
    return (
        <div>
            <Link to={link}>
                <img src={img} alt={title} />
            </Link>
        </div>
    );
}
function MovieSection(props) {
    return (
        <section id="movieSection" className={props.attr}>
            <div className="movie__inner container">
                <div className="movie__text">
                    <h3>{movieTitle.title}</h3>
                    <>{movieTitle.desc}</>
                    <a href={movieTitle.link} className="button-green">
                        자세히 보기
                    </a>
                </div>
                <div className="movie__item">
                    {movieText.map((text, index) => (
                        <MovieDesc
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

export default MovieSection;
