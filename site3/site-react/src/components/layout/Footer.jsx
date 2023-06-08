import React from 'react';

function Footer(props) {
    return (
        <footer id="footer" className={props.attr} role="contentinfo">
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>kebab00</h5>
                    <p>
                        안녕하세요! <br /> 더 다양한 정보와 문의는 SNS와 이메일을 통해주세요 <br /> im.kebab00@gmail.com
                    </p>
                    <ul className="sns">
                        <li>
                            <a href="/">
                                <img src="../assets/images/footer/footer01.svg" alt="페이스북" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="../assets/images/footer/footer02.svg" alt="인스타그램" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="../assets/images/footer/footer03.svg" alt="유튜브" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="../assets/images/footer/footer04.svg" alt="깃헙" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="../assets/images/footer/footer05.svg" alt="디스코드" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <div>
                        <h4>사이트</h4>
                        <ul>
                            <li>
                                <a href="/">웹표준 사이트</a>
                            </li>
                            <li>
                                <a href="/">반응형 사이트</a>
                            </li>
                            <li>
                                <a href="/">패럴랙스 사이트</a>
                            </li>
                            <li>
                                <a href="/">포트폴리오 사이트</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>유형</h4>
                        <ul>
                            <li>
                                <a href="/">이미지 유형</a>
                            </li>
                            <li>
                                <a href="/">카드 유형</a>
                            </li>
                            <li>
                                <a href="/">이미지/텍스트 유형</a>
                            </li>
                            <li>
                                <a href="/">배너 유형</a>
                            </li>
                            <li>
                                <a href="/">텍스트 유형</a>
                            </li>
                            <li>
                                <a href="/">푸터 유형 </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>스크립트</h4>
                        <ul>
                            <li>
                                <a href="/">검색 이펙트</a>
                            </li>
                            <li>
                                <a href="/">퀴즈 이펙트</a>
                            </li>
                            <li>
                                <a href="/">마우스 이펙트</a>
                            </li>
                            <li>
                                <a href="/">슬라이드 이펙트</a>
                            </li>
                            <li>
                                <a href="/">패랠랙스 이펙트</a>
                            </li>
                            <li>
                                <a href="/">게임 이팩트</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>레퍼런스</h4>
                        <ul>
                            <li>
                                <a href="/">CSS</a>
                            </li>
                            <li>
                                <a href="/">FONTS</a>
                            </li>
                            <li>
                                <a href="/">BLOG</a>
                            </li>
                            <li>
                                <a href="/">REFERENCE</a>
                            </li>
                            <li>
                                <a href="/">TUTORIAL</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    <p>Copyright 2022. All Rights Reserved. - Designed by Webstoryboy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
