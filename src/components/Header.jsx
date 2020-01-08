import React from 'react';

const Header = () => (

    <header className="header">
        <div className="logo"><h1>Movie Search</h1></div>
        <nav className="nav">
            <div className="nav-btn">
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <ul className="nav-menu">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Favorites</a></li>
            </ul>
        </nav>
    </header>
)

export default Header;