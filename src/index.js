import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lista from './Lista';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './Unidade.js';
ReactDOM.render(
    (<Router>
        <Route path="/" component={Lista} />

    </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
