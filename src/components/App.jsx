import React from 'react';
import '../scss/main.scss';
import { getMovie } from './redux/actionCreators';
import Routes from './Routes.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import movies from '../constants/movies.js';

const randomMovie = () => {
  return movies[Math.floor(Math.random() * movies.length)];
};

store.dispatch(getMovie(randomMovie()));

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
