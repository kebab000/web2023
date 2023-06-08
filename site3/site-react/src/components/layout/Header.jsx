import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header
            id="header"
            className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
            role="heading"
            aria-level="1"
        >
            <div className="header__inner container">
                <h1 className="header__logo">
                    <Link to="/">
                        web <em>site</em>
                    </Link>
                </h1>
                <nav className="header__nav" role="navigation">
                    <ul>
                        <li>
                            <Link to="#memberSection">멤버</Link>
                        </li>
                        <li>
                            <Link to="#portSection">포트폴리오</Link>
                        </li>
                        <li>
                            <Link to="#youtubeSection">youtube</Link>
                        </li>
                        <li>
                            <Link to="#unsplashSection">unsplash</Link>
                        </li>
                        <li>
                            <Link to="#movieSection">movies</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        //header -->
    );
}

export default Header;
