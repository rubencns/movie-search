import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMovie } from './redux/actionCreators';

const SearchBar = ({ showMovie }) => {

    const [movie, setMovie] = useState({
        title: ''
    });

    const handleClick = (e) => {
        e.preventDefault();
        setMovie({
            title: e.target.value
        })
    }

    const pressEnter = (e) => {
        // if enter key is pressed, call showMovie function
        if (e.keyCode === 13) {
            showMovie(movie.title);
        }
    }

    return (
        <div className="search">
            <div className="search-bar">
                <div className="search-icon" onClick={() => showMovie(movie.title)}>
                    <i className="fas fa-search"></i>
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="search for a movie..."
                    onChange={(e) => handleClick(e)}
                    onKeyDown={(e) => pressEnter(e)}
                />
            </div>
        </div >
    );
}

const mapDispatchToProps = dispatch => ({
    showMovie(title) {
        dispatch(getMovie(title));
    }
});

export default connect(null, mapDispatchToProps)(SearchBar);