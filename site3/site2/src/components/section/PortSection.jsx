function PortSection(props) {
    return (
        <section id="portSection" className={props.attr}>
            <h3>포트폴리오 소개</h3>
            <p>웹쓰 30기 포트폴리오 모음집입니다.</p>
            <div className="port__inner container">
                <div className="port__btn"></div>
                <div className="port__cont">
                    <div className="port">
                        <figure className="port__header">
                            <a href="/">
                                <img src="../assets/images/port/port01.png" alt="포트폴리오" />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img src="../assets/images/member/member80.svg" alt="김땡땡" />
                            </span>
                            <div>
                                <h4>진현미 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="../assets/images/port/port02.png" alt="포트폴리오" />
                        </figure>
                        <div className="port__body">
                            <span>
                                <a href="/">
                                    <img src="../assets/images/member/member02.svg" alt="포트폴리오" />
                                </a>
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="/">
                                <img src="../assets/images/port/port03.png" alt="포트폴리오" />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img src="../assets/images/member/member03.svg" alt="김땡땡" />
                            </span>
                            <div>
                                <h4>이양구 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="/">
                                <img src="../assets/images/port/port04.png" alt="포트폴리오" />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img src="../assets/images/member/member04.svg" alt="김땡땡" />
                            </span>
                            <div>
                                <h4>천설희 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="/">
                                <img src="../assets/images/port/port05.png" alt="포트폴리오" />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img src="../assets/images/member/member05.svg" alt="김땡땡" />
                            </span>
                            <div>
                                <h4>이승연 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="/">
                                <img src="../assets/images/port/port06.png" alt="포트폴리오" />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img src="../assets/images/member/member10.svg" alt="김땡땡" />
                            </span>
                            <div>
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortSection;
