import React from 'react';
import Favorite from './Favorite';
import { showFavMovie } from './redux/actionCreators';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Favorites = ({ fav, showMovie }) => (

    <main className="favorites">
        {
            /* 
                If there is a movie saved in the favorites list, show it. If not, 
                add a recommendation 
            */
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
                : <div className="heading">
                    <h2 className="heading-item">Add a movie to your favorites list...</h2>
                    <Link to="/" className="heading-item heading-btn fas fa-plus-circle fa-5x"></Link>
                </div>
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