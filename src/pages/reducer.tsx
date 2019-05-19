// local dependencies
import ROLES from '../constants/roles';
import Action from "../types/Action";
import {APP, SIGN_IN} from "../constants/actions";


type State = {
    preloader: boolean,
    auth: boolean,
    role: string
}

let initialState: State = {
    preloader: false,
    // auth: false,
    auth: true,
    // role: ROLES.PROFESSOR,
    role: ROLES.STUDENT
};

// App Reducer
export default function(state: State = initialState, action: Action): State {
    const { type, payload } = action;

    switch(type) {

        // case SIGN_IN.LOG_IN.FINISH:
        //     state = {...state, auth: true, role: payload.role};
        //     console.log(payload);
        //     break;

        case 'authorization':
            state = {...state, auth: true, role: payload.role};
            console.log(payload);
            break;

        // case '@@router/LOCATION_CHANGE':
        //     console.log(payload.action, payload.location.pathname, payload.location.state);
        //     break;

        default:
            state = {...state};
    }

    return state;
}
