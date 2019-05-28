// local dependencies
import ROLES from '../constants/roles';
import Action from "../types/Action";
import {APP, SIGN_IN} from "../constants/actions";


type State = {
    preloader: boolean,
    auth: boolean,
    role: string,
    user: any
}

let initialState: State = {
    preloader: false,
    auth: false,
    // auth: true,
    role: '',
    user: null
    // role: ROLES.STUDENT
};

// App Reducer
export default function(state: State = initialState, action: Action): State {
    const { type, payload } = action;

    switch(type) {

        case SIGN_IN.LOG_IN.SUCCESS:
            console.log('SIGN_IN.LOG_IN.SUCCESS', payload.user);
            state = {...state, auth: true, role: payload.role, user: payload.user};
            break;

        case APP.LOG_OUT.SUCCESS:
            state = initialState;
            break;

        // case '@@router/LOCATION_CHANGE':
        //     console.log(payload.action, payload.location.pathname, payload.location.state);
        //     break;

        default:
            state = {...state};
    }

    return state;
}
