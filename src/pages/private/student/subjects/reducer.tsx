// local dependencies
import ROLES from '../../../../constants/roles';

type Subject = {
    name: string
    course: number
    teachers: string | string[]
}

type State = {
    preloader: boolean,
    subjects: Subject[]
}

type Action = {
    type: string,
    payload?: any
}

let initialState: State = {
    preloader: false,
    subjects: [
        {
            name: 'Discrete Math',
            course: 2,
            teachers: 'Polyakova L.Y.'
        },
        {
            name: 'Mathematical Analysis',
            course: 2,
            teachers: 'Gefter S.L.'
        },
        {
            name: 'C++ STL',
            course: 2,
            teachers: ['Vladimirova M.V.', 'Morozova A.G.']
        },
        {
            name: 'Operation Systems',
            course: 2,
            teachers: 'Ignatov S.Y.'
        },
    ]
};

// App Reducer
export default function(state: State = initialState, action: Action): State {
    const { type, payload } = action;

    switch(type) {
        case 'PRELOADER':
            state = {...state, preloader: !!payload};
            break;


        default:
            state = {...state};
    }

    return state;
}
