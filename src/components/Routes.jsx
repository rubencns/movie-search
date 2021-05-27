import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Favorites from './Favorites.jsx';

const Routes = () => (
    <Router basename="movie-search">
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    </Router>
);

export default Routes;