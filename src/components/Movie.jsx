import React, { useState } from 'react';
import { addToFavorites, removeFromFavorites } from './redux/actionCreators';
import { connect } from 'react-redux';

const Movie = ({ movie, id, poster, title, year, rating,
    plot, length, cast, fav, addMovieToFavorites, removeMovieFromFavorites, loader }) => {

    let timeout;

    const [time, setTime] = useState({
        hasExpired: false
    })
    const loading = () => {
        timeout = setTimeout(() => {
            setTime({
                hasExpired: true
            })
        }, 6000)
    }

    return (
        // Show loader icon until the data is loaded
        (loader)
            ? <i className="heading fas fa-spinner fa-spin fa-5x"></i>
            :
            (movie.id === '')
                ? <>
                    {loading()}
                    {
                        // Give 6 seconds to load. If time is exceeded throw a message error
                        (!time.hasExpired)
                            ? <i className="heading fas fa-spinner fa-spin fa-5x"></i>
                            : <><div className="heading"><i className="heading-item far fa-times-circle fa-5x"></i>
                                <h2 className="heading-item">No movie found... Try it again</h2></div>
                                {clearTimeout(timeout)}
                            </>
                    }
                </>
                : <div className="movie">
                    <img className="movie-poster"
                        src={poster}
                        alt="Movie Poster" />
                    <div className="movie-items">
                        <h1 className="movie-item">
                            {title}</h1>
                        <span className="movie-item">{year}</span>
                        <div className="movie-item rate-fav">
                            <div className="movie-rating">
                                <i className="fas fa-star"> <span>{rating}</span></i>
                            </div>

                            {
                                // Validate if movie is already added to favorite list
                                fav.find(f => f.id === id)
                                    ? <button className="fav-btn fav-btn-disable"
                                        onClick={() => removeMovieFromFavorites(id)}>
                                        <i className="fas fa-heart">
                                            <span> Remove from favorites</span></i>
                                    </button>
                                    : <button className="fav-btn"
                                        onClick={() => addMovieToFavorites(movie)}>
                                        <i className="fas fa-heart">
                                            <span> Add to favorites</span></i>
                                    </button>
                            }

                        </div>
                        <p className="movie-item movie-plot">{plot}</p>
                        <span className="movie-item">
                            {
                                // If movie length is 0 by default, set defaultProps.length
                                (length === 0)
                                    ? Movie.defaultProps.length
                                    : length
                            }
                        </span>
                        <ul className="movie-item">
                            <h2>Cast:</h2>
                            <hr />
                            {
                                movie.cast.map(p => (<li><span className="movie-actor">{p.actor}</span> - {p.character}</li>))
                            }

                        </ul>
                    </div>
                </div >

    );


}

Movie.defaultProps = {
    title: "No title",
    year: "Unknown release date",
    rating: "No rating",
    plot: "No plot",
    length: "Unknown length",
    cast: "Unknown cast"
}

const mapStateToProps = state => ({
    fav: state.favoriteReducer.favorites,
    loader: state.movieReducer.loader
});

const mapDispatchToProps = dispatch => ({
    addMovieToFavorites(movie) {
        dispatch(addToFavorites(movie));
    },
    removeMovieFromFavorites(id) {
        dispatch(removeFromFavorites(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);