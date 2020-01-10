import React from 'react';
import { connect } from 'react-redux';

const Movie = ({ movie }) => {

    const castList = movie.cast;

    return (

        <div className="movie">
            <img className="movie-poster"
                src={movie.poster}
                alt="Movie Poster" />
            <div className="movie-items">
                <h1 className="movie-item">{movie.title}</h1>
                <span className="movie-item">{movie.year}</span>
                <div className="movie-item rate-fav">
                    <div className="movie-rating">
                        <i className="fas fa-star"> <span>{movie.rating}</span></i>
                    </div>
                    <button className="fav-btn">
                        <i className="fas fa-heart"> <span>Add to favorites</span></i>
                    </button>
                </div>
                <p className="movie-item movie-plot">{movie.plot}</p>
                <span className="movie-item">{movie.length}</span>
                <ul className="movie-item">
                    <h2>Cast:</h2>
                    <hr />
                    {
                        /* castList.map(p => (<li>{p.actor} - {p.character}</li>)) */
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
        </div>
    );

};

const mapStateToProps = state => ({
    movie: state.movie
})

export default connect(mapStateToProps)(Movie);