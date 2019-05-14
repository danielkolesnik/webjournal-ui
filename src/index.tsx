// outsource
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// local dependencies
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import store from './store';
import AppRoot from './pages';

ReactDOM.render(
    <Provider store={store}>
        <AppRoot/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();