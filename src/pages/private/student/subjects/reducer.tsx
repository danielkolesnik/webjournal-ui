// local dependencies
import Subject, {SubjectDTO} from '../../../../types/student/Subject';
import {STUDENT} from "../../../../constants/actions";
import Action from "../../../../types/Action";
const {SUBJECTS} = STUDENT;

type State = {
    preloader: boolean
    subjects: Subject[]
    subject: SubjectDTO | null
}

let initialState: State = {
    preloader: false,
    subjects: [],
    subject: null
};

// App Reducer
export default function(state: State = initialState, action: Action): State {
    const { type, payload } = action;

    switch(type) {
        case SUBJECTS.PRELOADER:
            state = {...state, preloader: !!payload};
            break;
        case SUBJECTS.GET_SUBJECTS.FINISH:
            state = {...state, subjects: payload};
            break;
        case SUBJECTS.GET_SUBJECT.FINISH:
            state = {...state, subject: payload};
            break;
        case SUBJECTS.CLEAR:
            state = initialState;
            break;

        default:
            state = {...state};
    }

    return state;
}
