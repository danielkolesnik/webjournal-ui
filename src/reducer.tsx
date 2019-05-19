// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

// local dependencies
import appReducer from './pages/reducer';
import modal from './components/modal/reducer';
import studentReduser from './pages/private/student/reducer';
import professorReduser from './pages/private/professor/reducer';

export default (history: any) => combineReducers({
    router: connectRouter(history),
    toastr,
    form,
    modal,
    app: appReducer,
    ...studentReduser,
    professor: professorReduser,
})
