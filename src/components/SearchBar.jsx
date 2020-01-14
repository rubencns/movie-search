import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMovie, setLoader } from './redux/actionCreators';

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

    const resetInput = (e) => {
        setMovie({
            title: ''
        })
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
                    value={movie.title}
                    onChange={(e) => handleClick(e)}
                    onKeyDown={(e) => pressEnter(e)}
                />
                {
                    (movie.title !== '')
                        ? <button type="reset" className="reset-icon fas fa-times"
                            onClick={() => resetInput()}>
                        </button>
                        : <button className="reset-icon-hidden fas fa-times"></button>
                }

            </div>
        </div >
    );
}

const mapDispatchToProps = dispatch => ({
    showMovie(title) {
        if (title !== '') {
            dispatch(getMovie(title));
            dispatch(setLoader())
        } else alert("Please, enter a movie")
    }
});

export default connect(null, mapDispatchToProps)(SearchBar);