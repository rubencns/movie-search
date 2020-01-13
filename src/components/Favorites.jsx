import React from 'react';
import Favorite from './Favorite';
import { getMovie, showFavMovie } from './redux/actionCreators';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Favorites = ({ fav, showMovie }) => (

    <main className="favorites">
        {
            fav.find(f => f)
                ? fav.map(f =>
                    <Link to="/" onClick={() => showMovie(f)} >
                        <Favorite
                            id={f.id}
                            title={f.title}
                            year={f.year}
                            rating={f.rating}
                            image={f.poster}
                        />
                    </Link>)
                : <><h1>You haven't added any movie to your favorite list</h1></>
        }
    </main >
);

const mapStateToProps = state => ({
    fav: state.favoriteReducer.favorites
});

const mapDispatchToProps = dispatch => ({
    showMovie(movie) {
        dispatch(showFavMovie(movie));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);