import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ favCount }) => {

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

    // Hide menu when a link is clicked
    const hideMenu = () => {
        setMenu({
            ...menu,
            navBtn: '',
            navMenu: ''
        })
    }

    return (
        <header className="header" >
            <div className="logo"><Link to="/" onClick={() => hideMenu()}><h2>Movie Search</h2></Link></div>
            <nav className="nav">
                <div className={`nav-btn${menu.navBtn}`} onClick={() => handleClick()}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <ul className={`nav-menu${menu.navMenu}`}>
                    <NavLink to="/" className="nav-link" onClick={() => hideMenu()}>
                        <li className="nav-item" >Home</li>
                    </NavLink>
                    <hr className="nav-line" />
                    <NavLink to="/favorites" className="nav-link" onClick={() => hideMenu()}>
                        <li className="nav-item">Favorites <span className="fav-count">{favCount}</span></li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    favCount: state.favoriteReducer.favorites.length
});

export default connect(mapStateToProps)(Header);