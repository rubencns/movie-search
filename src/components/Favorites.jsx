import React from 'react';
import Favorite from './Favorite';
import { connect } from 'react-redux';

const Favorites = ({ fav }) => (

    <main className="favorites">
        {
            fav.find(f => f)
                ? fav.map(f =>
                    <Favorite
                        id={f.id}
                        title={f.title}
                        year={f.year}
                        rating={f.rating}
                        image={f.poster}
                    />)
                : <><h1>You haven't added any movie to your favorite list</h1></>
        }
    </main>
);

const mapStateToProps = state => ({
    fav: state.favoriteReducer.favorites
});

export default connect(mapStateToProps)(Favorites);