import React from 'react';
import { Link } from 'react-router-dom';

const memberTitle = {
    title: '멤버소개',
    desc: '함께 공부한 웹쓰 30기 멤버들 입니다.',
};
const memberText = [
    {
        title: '진현미',
        img: '../assets/images/member/member80.svg',
        link: '/',
    },
    {
        title: '김도현',
        img: '../assets/images/member/member02.svg',
        link: '/',
    },
    {
        title: '이양구',
        img: '../assets/images/member/member03.svg',
        link: '/',
    },
];
function MemberDesc({ title, img, link }) {
    return (
        <div className="member">
            <figure className="member__header">
                <img src={img} alt={title} />
            </figure>
            <div className="member__body">
                <h4 className="title">{title}</h4>
                <p className="desc">웹쓰30기</p>
                <Link to={link} clLinkssName="btn">
                    포트폴리오 바로가기
                </Link>
            </div>
        </div>
    );
}
function MemberSection(props) {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>{memberTitle.title}</h3>
            <p>{memberTitle.desc}</p>
            <div className="member__inner container">
                {/* <div className="member">
                    <figure className="member__header">
                        <img
                            src="../assets/images/member/member80.svg"
                            alt="땡땡님"
                        />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">진현미</h4>
                        <p className="desc">웹쓰30기</p>
                        <a href="/" className="btn">
                            포트폴리오 바로가기
                        </a>
                    </div>
                </div> */}
                {memberText.map((text, index) => (
                    <MemberDesc
                        key={index}
                        title={text.title}
                        img={text.img}
                        link={text.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default MemberSection;
