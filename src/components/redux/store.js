import { createStore, applyMiddleware } from 'redux';
import { ADD_MOVIE } from './actions';
import thunk from 'redux-thunk';

const initialMovie = {
    movie: []
}

const movieReducer = (state = initialMovie, action) => {
    if (action.type === ADD_MOVIE) {
        return {
            ...state,
            movie: action.movie
        }
    }

    return state;
}

export default createStore(movieReducer, applyMiddleware(thunk));