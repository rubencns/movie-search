import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SHOW_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialMovie = {
    movie: []
}

const initialFavorites = {
    favorites: []
}

const movieReducer = (state = initialMovie, action) => {
    if (action.type === SHOW_MOVIE) {
        return {
            ...state,
            movie: action.movie
        }
    }

    return state;
}

const favoriteReducer = (state = initialFavorites, action) => {
    if (action.type === ADD_FAVORITE) {
        return {
            ...state,
            favorites: state.favorites.concat(action.favorite)
        }
    }
    if (action.type === REMOVE_FAVORITE) {
        return {
            ...state,
            favorites: state.favorites.filter(f => f.id !== action.id)
        }
    }

    return state;
}

export default createStore(combineReducers({ movieReducer, favoriteReducer }), composeWithDevTools(applyMiddleware(thunk)));