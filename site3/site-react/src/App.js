import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Member from './components/pages/Member';
import Port from './components/pages/Port';
import Youtube from './components/pages/Youtube';
import UnsplashSection from './components/pages/UnsplashSection';
import Movie from './components/pages/Movie';

function App() {
    return (
        <BrowserRouter>
            <Header attr={['header__wrap', 'nexon5', 'bg-blue']} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/port" element={<Port />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/unsplashSection" element={<UnsplashSection />} />
                <Route path="/movie" element={<Movie />} />
            </Routes>
            <Footer attr={'footer__wrap section bg-blue nexon5'} />
        </BrowserRouter>
    );
}

export default App;
