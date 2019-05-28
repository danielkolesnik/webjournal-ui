// local dependencies
import {Subject} from '../../../../types/student/Subject';
import {PROFESSOR} from "../../../../constants/actions";
import Action from "../../../../types/Action";
const {HOME} = PROFESSOR;

type State = {
    preloader: object
    error: object
    lastEvents: any[]
    upcomingEvents: any[],
    event: any
}

let initialState: State = {
    preloader: {
        lastEvents: false,
        upcomingEvents: false
    },
    error: {
        lastEvents: false,
        upcomingEvents: false,
        event: false
    },
    lastEvents: [],
    upcomingEvents: [],
    event: null

};

// App Reducer
export default function(state: State = initialState, action: Action): State {
    const { type, payload } = action;

    switch(type) {
        case HOME.PRELOADER:
            console.log('preloader', payload);
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
            state = {...state, error: {...state.error, upcomingEvents: true}};
            break;

        case HOME.GET_EVENT.SUCCESS:
            console.log(payload);
            state = {...state, event: payload};
            break;

        case HOME.GET_EVENT.ERROR:
            state = {...state, error: {...state.error, upcomingEvents: true}};
            break;

        case HOME.CLEAR:
            state = initialState;
            break;

        case HOME.CLEAR_MODAL:
            state = {...state, event: null};
            break;

        default:
            state = {...state};
    }

    return state;
}
