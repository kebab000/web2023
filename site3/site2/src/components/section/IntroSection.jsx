function IntroSection(props) {
    return (
        <section id="introSection" className={props.attr}>
            <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <span>Portfolio</span>
                    <figure className="myCharacter">
                        <img src="../../assets/images/member/member106.svg" alt="땡땡님" />
                    </figure>
                    <h3>
                        포토폴리오
                        <br />
                        준비과정
                    </h3>
                    <p>
                        프론트앤드 개발자로 취업하기 위한
                        <br />
                        준비 과정입니다.
                        <br />
                        블로그,깃헙,사이트 등이 있습니다!
                    </p>
                </div>
                <div className="intro__desc">
                    <div>
                        <a href="https://kebab00.tistory.com/">
                            <h4 className="icon-bg1">Tistory</h4>
                        </a>
                        <p>
                            수업을 시작하면서 개설한 Tistory 블로그 입니다. 그동안 배운 것들을 모두 정리하고 복습한
                            사이트이며 HTML, CSS, PHP, JavaScript, Programmers등이 정리되어 있습니다.
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/kebab000/">
                            <h4 className="icon-bg2">Github</h4>
                        </a>
                        <p>
                            GitHub은 분산 버전 관리 시스템인 Git을 기반으로 하는 웹 기반 호스팅 서비스입니다. 개발자들은
                            Git을 사용하여 소스 코드를 추적하고 변경사항을 관리할 수 있으며, GitHub을 통해 이러한 코드를
                            온라인으로 저장, 공유 및 협업할 수 있습니다. 수업시간에 했던 모든 것이 저장되어 있습니다.
                        </p>
                    </div>
                    <div>
                        <a href="https://kebab000.github.io/web2023/">
                            <h4 className="icon-bg3">JavaScript</h4>
                        </a>
                        <p>
                            수업의 기초가 되었던 JavaScript사이트 입니다. 가장 기초부터 시작해서 다양한 메서드까지
                            수업시간에 했던 모든 예제들이 올라가 있습니다.
                        </p>
                    </div>
                    <div>
                        <a href="http://kebab00.dothome.co.kr/php2/index.html">
                            <h4 className="icon-bg4">PHP</h4>
                        </a>
                        <p>
                            조별과제로 만든 php사이트입니다. Planty라는 사이트로 식물관리에 대한 정보를 제공하며 자기의
                            식물을 저장하고 커뮤니티를 통해 공유할 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;
