import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection';
import IntroSection from '../section/IntroSection';
import MemberSection from '../section/MemberSection';
import PortSection from '../section/PortSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

function Home({ children }) {
    return (
        <>
            <Main>
                <SliderSection attr={'slider__wrap section nexon5'} />
                <IntroSection attr={'intro__wrap section bg-blue nexon5'} />
                <MemberSection attr={'members__wrap section center nexon5'} />
                <PortSection attr={'ports__wrap section center bg-blue nexon5'} />
                <YoutubeSection attr={'youtube__wrap section nexon5'} />
                <UnsplashSection attr={'unsplash__wrap section bg-blue nexon5'} />
                <MovieSection attr={'movie__wrap section nexon5'} />
            </Main>
        </>
    );
}

export default Home;
