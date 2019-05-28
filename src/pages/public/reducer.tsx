// local dependencies
import {SIGN_IN} from "../../constants/actions";
import Action from "../../types/Action";

type State = {
    preloader: object
    error: object
}

let initialState: State = {
    preloader: {
        lastEvents: false,
        upcomingEvents: false
    },
    error: {
        lastEvents: false,
        upcomingEvents: false
    },
};

// App Reducer
export default function(state: State = initialState, action: Action): State {
    const { type, payload } = action;

    switch(type) {
        case SIGN_IN.PRELOADER:
            state = {...state, preloader: {...state.preloader, ...payload}};
            break;

        case SIGN_IN.LOG_IN.REQUEST:
            console.log('SIGN_IN.LOG_IN.REQUEST', payload);
            break;

        case SIGN_IN.CLEAR:
            state = initialState;
            break;

        default:
            state = {...state};
    }

    return state;
}
