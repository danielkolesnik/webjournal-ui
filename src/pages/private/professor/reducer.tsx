// outsource dependencies
import { combineReducers } from 'redux';

// local dependencies
import subjectsReduser from './subjects/reducer';
// import homeReduser from './home/reducer';

export default () => combineReducers({
    subjectsS: subjectsReduser,
    // homeS: homeReduser
})
