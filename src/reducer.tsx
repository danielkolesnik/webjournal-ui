// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

// local dependencies
import appReducer from './pages/reducer';
import loginReducer from './pages/public/reducer';
import modal from './components/modal/reducer';
import studentRedusers from './pages/private/student/reducer';
import professorRedusers from './pages/private/professor/reducer';

export default (history: any) => combineReducers({
    router: connectRouter(history),
    toastr,
    form,
    modal,
    app: appReducer,
    login: loginReducer,
    ...studentRedusers,
    ...professorRedusers,
})
