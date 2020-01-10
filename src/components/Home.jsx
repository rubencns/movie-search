import React from 'react';
import SearchBar from './SearchBar.jsx';
import Movie from './Movie.jsx';

const Home = () => (
    <main className="home">
        <SearchBar />
        <Movie />
    </main>
);

export default Home;