import React from 'react';

const SearchBar = () => (
    <div className="search">
        <div className="search-bar">
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
            <input type="text" className="search-input" placeholder="search for a movie..." />
        </div>
    </div>
);

export default SearchBar;