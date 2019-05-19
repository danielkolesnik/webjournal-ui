
// local dependencies
// import {PROFESSOR} from '../../../../constants/actions';
import ROLES from '../../../../constants/roles';
import Action from "../../../../types/Action";
// const {SUBJECTS} = STUDENT;

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

        // case PROFESSOR.GET_SUBJECTS.FINISH:
        //     state = {...state, auth: true, role: payload.role};
        //     console.log(type, payload);
        //     break;

        default:
            state = {...state};
    }

    return state;
}
