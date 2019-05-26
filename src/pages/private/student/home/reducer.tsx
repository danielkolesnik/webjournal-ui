// local dependencies
import {Subject} from '../../../../types/student/Subject';
import {STUDENT} from "../../../../constants/actions";
import Action from "../../../../types/Action";
const {HOME} = STUDENT;

type State = {
    preloader: object
    error: object
    lastEvents: Subject[]
    upcomingEvents: Subject[]
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
    lastEvents: [],
    upcomingEvents: [],
};

// App Reducer
export default function(state: State = initialState, action: Action): State {
    const { type, payload } = action;

    switch(type) {
        case HOME.PRELOADER:
            state = {...state, preloader: {...state.preloader, ...payload}};
            break;

        case HOME.GET_LAST_EVENTS.FINISH:
            state = {...state, lastEvents: payload};
            break;

        case HOME.GET_LAST_EVENTS.ERROR:
            state = {...state, error: {...state.preloader, lastEvents: true}};
            break;

        case HOME.GET_UPCOMING_EVENTS.FINISH:
            state = {...state, upcomingEvents: payload};
            break;

        case HOME.GET_UPCOMING_EVENTS.ERROR:
            state = {...state, error: {...state.preloader, upcomingEvents: true}};
            break;

        case HOME.CLEAR:
            state = initialState;
            break;

        default:
            state = {...state};
    }

    return state;
}
