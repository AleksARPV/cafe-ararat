import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import history from './utils/history'
import {Router} from "react-router-dom";
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
);

