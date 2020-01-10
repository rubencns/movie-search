import { createStore } from 'redux';
import { ADD_MOVIE } from './actions';

const initialMovie = {
    movie: []
}

const movieReducer = (state = initialMovie, action) => {
    if (action.type === ADD_MOVIE) {
        return {
            ...state,
            movie: action.id
        }
    }

    return state;
}

export default createStore(movieReducer);