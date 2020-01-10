import React from "react";
import main from "../scss/main.scss";
import Routes from './Routes.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';


const App = () => (

    <Provider store={store}>
        <Routes />
    </Provider>
)

export default App;
