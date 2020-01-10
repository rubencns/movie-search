import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMovie } from './redux/actionCreators';

const SearchBar = ({ showMovie }) => {

    const [movie, setMovie] = useState({
        movieName: ''
    });

    const handleClick = (e) => {
        e.preventDefault();
        setMovie({
            movieName: e.target.value
        })
    }

    return (
        <div className="search">
            <div className="search-bar">
                <div className="search-icon" onClick={() => showMovie(movie.movieName)}>
                    <i className="fas fa-search"></i>
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="search for a movie..."
                    onChange={(e) => handleClick(e)}
                />
            </div>
        </div >
    );
}

const mapDispatchToProps = dispatch => ({
    showMovie(movieName) {
        dispatch(getMovie(movieName));
    }
});

export default connect(null, mapDispatchToProps)(SearchBar);