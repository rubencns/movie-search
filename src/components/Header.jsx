import React, { useState } from 'react';

const Header = () => {

    const [menu, setMenu] = useState({
        show: false,
        navBtn: '',
        navMenu: '',
        navItem: ''
    });

    const handleClick = () => {
        if (menu.show === true) {
            setMenu({
                show: false,
                navBtn: '',
                navMenu: ''
            })
        } else {
            setMenu({
                show: true,
                navBtn: ' close',
                navMenu: ' show'
            })
        }
    };

    return (
        <header className="header">
            <div className="logo"><h2>Movie Search</h2></div>
            <nav className="nav">
                <div className={`nav-btn${menu.navBtn}`} onClick={() => handleClick()}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <ul className={`nav-menu${menu.navMenu}`}>
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <hr className="nav-line" />
                    <li className="nav-item"><a href="#" className="nav-link">Favorites</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;