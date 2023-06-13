import React from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to="/">
                                <img src="../assets/images/footer/footer01.svg" alt="페이스북" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src="../assets/images/footer/footer02.svg" alt="인스타그램" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src="../assets/images/footer/footer03.svg" alt="유튜브" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src="../assets/images/footer/footer04.svg" alt="깃헙" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img src="../assets/images/footer/footer05.svg" alt="디스코드" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <div>
                        <h4>사이트</h4>
                        <ul>
                            <li>
                                <Link to="/">웹표준 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">반응형 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">패럴랙스 사이트</Link>
                            </li>
                            <li>
                                <Link to="/">포트폴리오 사이트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>유형</h4>
                        <ul>
                            <li>
                                <Link to="/">이미지 유형</Link>
                            </li>
                            <li>
                                <Link to="/">카드 유형</Link>
                            </li>
                            <li>
                                <Link to="/">이미지/텍스트 유형</Link>
                            </li>
                            <li>
                                <Link to="/">배너 유형</Link>
                            </li>
                            <li>
                                <Link to="/">텍스트 유형</Link>
                            </li>
                            <li>
                                <Link to="/">푸터 유형 </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>스크립트</h4>
                        <ul>
                            <li>
                                <Link to="/">검색 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">퀴즈 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">마우스 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">슬라이드 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">패랠랙스 이펙트</Link>
                            </li>
                            <li>
                                <Link to="/">게임 이팩트</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>레퍼런스</h4>
                        <ul>
                            <li>
                                <Link to="/">CSS</Link>
                            </li>
                            <li>
                                <Link to="/">FONTS</Link>
                            </li>
                            <li>
                                <Link to="/">BLOG</Link>
                            </li>
                            <li>
                                <Link to="/">REFERENCE</Link>
                            </li>
                            <li>
                                <Link to="/">TUTORIAL</Link>
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
