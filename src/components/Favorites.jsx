import React from 'react';
import Favorite from './Favorite';
import { connect } from 'react-redux';

const Favorites = ({ fav }) => (

    <main className="favorites">
        {
            fav.find(f => f)
                ? fav.map(f =>
                    <Favorite
                        title={f.title}
                        year={f.year}
                        rating={f.rating}
                        image={f.poster}
                    />)
                : "No favorites"
        }
    </main>
);

const mapStateToProps = state => ({
    fav: state.favoriteReducer.favorites
});

export default connect(mapStateToProps)(Favorites);