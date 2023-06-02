import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer.jsx';
import Main from './components/layout/Main.jsx';

import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import MemberSection from './components/section/MemberSection.jsx';
import PortSection from './components/section/PortSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';
function App() {
    return (
        <>
            <Header attr={['header__wrap', 'gmarket5', 'bg-blue']} />
            <Main>
                <SliderSection attr={'slider__wrap section gmarket5'} />
                <IntroSection attr={'intro__wrap section bg-blue gmarket5'} />
                <MemberSection attr={'members__wrap section center gmarket5'} />
                <PortSection attr={'ports__wrap section center bg-blue gmarket5'} />
                <YoutubeSection attr={'youtube__wrap section gmarket5'} />
                <UnsplashSection attr={'unsplash__wrap section bg-bluegmarket5'} />
                <MovieSection attr={'movie__wrap section gmarket5'} />
            </Main>
            <Footer attr={'footer__wrap section bg-blue gmarket5'} />
        </>
    );
}

export default App;
