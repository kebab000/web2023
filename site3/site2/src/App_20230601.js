import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

import SliderSection from './components/section/SliderSection';
import IntroSection from './components/section/IntroSection';
import MemberSection from './components/section/MemberSection';
import PortSection from './components/section/PortSection';
import YoutubeSection from './components/section/YoutubeSection';
import UnsplashSection from './components/section/UnsplashSection';
import MovieSection from './components/section/MovieSection';
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
