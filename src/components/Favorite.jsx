import React from 'react';
import { connect } from 'react-redux';
import { removeFromFavorites } from './redux/actionCreators';
import { Link } from 'react-router-dom';

const Favorite = ({ id, title, year, rating, image, removeMovieFromFavorites }) => {

    return (
        <div className="card">
            <img className="card-image"
                src={image}
                alt="Movie Poster"
            />
            <div className="card-items">
                <div className="card-title">
                    <h2>
                        {
                            // Shortens the title if it is too long
                            (title.length < 16)
                                ? title
                                : title.substr(0, 16).concat('...')

                        }
                    </h2>
                </div>
                <span className="card-year">{year}</span>
                <div className="rate-fav">
                    <div className="movie-rating">
                        <i className="fas fa-star"> <span>{rating}</span></i>
                    </div>
                    <Link to="favorites" className="fav-btn" onClick={() => removeMovieFromFavorites(id)}>
                        <i className="fas fa-heart"> <span>Remove favorite</span></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

Favorite.defaultProps = {
    title: "No title",
    year: "Unknown release date",
    rating: "No rating",
}

const mapDispatchToProps = dispatch => ({
    removeMovieFromFavorites(id) {
        dispatch(removeFromFavorites(id));
    }
});

export default connect(null, mapDispatchToProps)(Favorite);
