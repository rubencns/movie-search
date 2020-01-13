import React from 'react';
import { addToFavorites, removeFromFavorites } from './redux/actionCreators';
import { connect } from 'react-redux';

const Movie = ({ movie, id, poster, title, year, rating,
    plot, length, cast, fav, addMovieToFavorites, removeMovieFromFavorites }) => {

    return (

        <div className="movie">
            <img className="movie-poster"
                src={poster}
                alt="Movie Poster" />
            <div className="movie-items">
                <h1 className="movie-item">
                    {
                        title
                    }
                </h1>
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
                <span className="movie-item">{length}</span>
                <ul className="movie-item">
                    <h2>Cast:</h2>
                    <hr />
                    {
                        /* movie.cast.map(p => (<li>{p.actor} - {p.character}</li>)) */
                    }

                    <li>Joaquin Phoenix - Arthur Fleck</li>
                    <li>Robert De Niro - Murray Franklin</li>
                    <li>Zazie Beetz - Sophie Dumond</li>
                    <li>Frances Conroy - Penny Fleck</li>
                    <li>Brett Cullen - Thomas Wayne</li>
                    <li>Shea Whigham - Detective Burke</li>
                    <li>Bill Camp - Detective Garrity</li>
                    <li>Glenn Fleshler - Randall</li>
                    <li>Leigh Gill - Gary</li>

                </ul>
            </div>
        </div >
    );


};

Movie.defaultProps = {
    title: "No title",
    year: "Unknown release date",
    rating: "No rating",
    plot: "No plot",
    length: "Unknown length",
    cast: "Unknown cast"
}

const mapStateToProps = state => ({
    fav: state.favoriteReducer.favorites
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