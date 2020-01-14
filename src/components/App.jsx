import React from "react";
import main from "../scss/main.scss";
import { getMovie } from "./redux/actionCreators";
import Routes from './Routes.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

// Add random movie recommendations to avoid an empty space when visiting the website for the first time

const movies = ["Inception", "Joker", "Interstellar", "Pulp Fiction",
    "The Godfather", "Fight Club", "Lord Of The Rings", "Blade Runner"]

const randomMovie = () => {
    return movies[Math.floor(Math.random() * movies.length)]
}

store.dispatch(getMovie(randomMovie()));

// App
const App = () => (

    <Provider store={store}>
        <Routes />
    </Provider>
)

export default App;
