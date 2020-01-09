import React from 'react';
import SearchBar from './SearchBar.jsx';

const Home = () => (
    <main className="main">
        <div className="search">
            <h1 className="search-heading">Find a Movie</h1>
            <SearchBar />
        </div>
        <div className="movie-container"></div>
    </main>
);

export default Home;