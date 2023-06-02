import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main.jsx';
import Member from './components/pages/Member.jsx';
import Port from './components/pages/Port.jsx';
import Youtube from './components/pages/Youtube.jsx';
import UnsplashSection from './components/pages/UnsplashSection.jsx';
import Movies from './components/pages/Movies.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/member" element={<Member />} />
                <Route path="/port" element={<Port />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/unsplashSection" element={<UnsplashSection />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
