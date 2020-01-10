import React from 'react';
import { connect } from 'react-redux';
import { removeFromFavorites } from './redux/actionCreators';

const Favorite = ({ title, year, rating, image, removeFavorite }) => (
    <div className="card">
        <img className="card-image"
            src={image}
            alt="Movie Poster"
        />
        <div className="card-items">
            <div className="card-title"><h2>{title}</h2></div>
            <span className="card-year">{year}</span>
            <div className="rate-fav">
                <div className="movie-rating">
                    <i className="fas fa-star"> <span>{rating}</span></i>
                </div>
                <button className="fav-btn" onClick={() => removeFavorite(title)}>
                    <i className="fas fa-heart"> <span>Remove favorite</span></i>
                </button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    removeFavorite(title) {
        dispatch(removeFromFavorites(title))
    }
});

export default connect(null, mapDispatchToProps)(Favorite);