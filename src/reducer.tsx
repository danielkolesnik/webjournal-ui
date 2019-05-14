// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

// local dependencies
import appReducer from './pages/reducer';

export default (history: any) => combineReducers({
    app: appReducer,
    router: connectRouter(history),
    form: formReducer,
})