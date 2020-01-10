import React from 'react';

const Favorite = () => (
    <div className="card">
        <img className="card-image"
            src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.jpg"
            alt="Movie Poster"
        />
        <div className="card-items">
            <div className="card-title"><h2>Joker</h2></div>
            <span className="card-year">2019</span>
            <div className="rate-fav">
                <div className="movie-rating">
                    <i className="fas fa-star"> <span>8.6</span></i>
                </div>
                <button className="fav-btn">
                    <i className="fas fa-heart"> <span>Remove favorite</span></i>
                </button>
            </div>
        </div>
    </div>
);

export default Favorite;
