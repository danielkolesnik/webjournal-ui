// local dependencies
import ROLES from '../constants/roles';

type State = {
    preloader: boolean,
    auth: boolean,
    role: string
}

type Action = {
    type: string,
    payload?: any
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
        case 'some action':
            state = {...state, preloader: !!payload};
            break;

        case 'authorization':
            state = {...state, auth: true, role: payload.role};
            console.log(payload.role);
            break;

        // case '@@router/LOCATION_CHANGE':
        //     console.log(payload.action, payload.location.pathname, payload.location.state);
        //     break;

        default:
            state = {...state};
    }

    return state;
}
