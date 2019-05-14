// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

// local dependencies
import appReducer from './pages/reducer';
import subjectsSReduser from './pages/private/student/subjects/reducer';

export default (history: any) => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    app: appReducer,
    subjectsS: subjectsSReduser
})
