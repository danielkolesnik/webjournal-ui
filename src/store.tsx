// outsource dependencies
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// local dependencies
import createRootReducer from './reducer';
import sagas from './sagas';

export const history = createBrowserHistory({
    // basename: '/',
});
// configure
const sagaMiddleware = createSagaMiddleware();
const middlewareHistory = routerMiddleware(history);


export default createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            middlewareHistory,
            thunk,
            sagaMiddleware
        ),
    ),
);

sagaMiddleware.run(sagas);
