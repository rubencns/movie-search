import React from 'react';

const Movie = () => {


    return (

        <div className="movie">
            <img className="movie-poster"
                src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.jpg"
                alt="Movie Poster" />
            <div className="movie-items">
                <h1 className="movie-item">Joker</h1>
                <span className="movie-item">2019</span>
                <div className="movie-item rate-fav">
                    <div className="movie-rating">
                        <i className="fas fa-star"> <span>8.6</span></i>
                    </div>
                    <button className="fav-btn">
                        <i className="fas fa-heart"> <span>Add to favorites</span></i>
                    </button>
                </div>
                <p className="movie-item movie-plot">"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."</p>
                <span className="movie-item">2h 20min</span>
                <ul className="movie-item">
                    <h2>Cast:</h2>
                    <hr />
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

export default Movie;