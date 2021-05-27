import React from 'react';
import SearchBar from './SearchBar.jsx';
import Movie from './Movie.jsx';
import { connect } from 'react-redux';

const Home = ({ movie }) => (
  <main className="home">
    <SearchBar />
    <Movie
      movie={movie}
      id={movie.id}
      poster={movie.poster}
      title={movie.title}
      year={movie.year}
      rating={movie.rating}
      plot={movie.plot}
      length={movie.length}
      cast={movie.cast}
    />
  </main>
);

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movie,
});

export default connect(mapStateToProps)(Home);
