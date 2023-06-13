<template>
       <footer id="footer" :class="attr" role="contentinfo">
            <div class="footer__inner container">
                <div class="footer__text">
                    <h5>kebab00</h5>
                    <p>
                        안녕하세요! <br /> 더 다양한 정보와 문의는 SNS와 이메일을 통해주세요 <br /> im.kebab00@gmail.com
                    </p>
                    <ul class="sns">
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
                <div class="footer__menu">
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
                <div class="footer__right">
                    <p>Copyright 2022. All Rights Reserved. - Designed by Webstoryboy</p>
                </div>
            </div>
        </footer>
</template>
<script>
export default ({
  props: {
    attr: String
  }
})
</script>
<style lang="scss">
//footer__wrap
@import "../assets/scss/setting/mixins.scss";
@import "../assets/scss/common/common.scss";
.footer__wrap {

.footer__inner{
    flex-wrap: wrap;
    @include flex-between;
    .footer__text {
        width: 30%;
        > h5 {
            font-size: 18px;
            line-height: 1.2;
            font-weight: 400;
            margin-bottom: 25px;
        }
        > p {
            font-size: 14px;
            line-height: 1.7;
            font-weight: 400;
            color: #909090;
            margin-bottom: 30px;
        }
        > ul {
            > li {
                display: inline-block;
                position: relative;
                > a {
                    margin-right: 35px;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
                &::before {
                    content: '';
                    background-color: #f5f5f5;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    position: absolute;
                    left: -8px;
                    top: -7px;
                    z-index: -999;
                }
            }
        }
    }
    .footer__menu {
        width: 70%;
        display: flex;
        > div {
            width: 25%;
            > h4 {
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 20px;
            }
            > ul {

                > li {

                    > a {
                        font-weight: 400;
                        color: #808080;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .footer__right {
        width: 100%;
        padding: 30px;
        text-align: center;
        border-top: 1px solid #E5E5E5;
        margin-top: 50px;
        color: #808080;
        font-size: 14px;
    }
}
}
</style>
