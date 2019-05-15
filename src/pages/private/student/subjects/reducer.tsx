// local dependencies
import ROLES from '../../../../constants/roles';

type Subject = {
    name: string
    type: string
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
            name: 'Study of mathematical operations',
            type: 'exam',
            teachers: 'Polyakova L.Y.'
        },
        {
            name: 'Mathematical Analysis',
            type: 'credit',
            teachers: 'Gefter S.L.'
        },
        {
            name: 'C++ STL',
            type: 'exam',
            teachers: ['Vladimirova M.V.', 'Morozova A.G.']
        },
        {
            name: 'Operation Systems',
            type: 'exam',
            teachers: 'Ignatov S.Y.'
        },
        {
            name: 'Mathematical Analysis',
            type: 'credit',
            teachers: 'Gefter S.L.'
        },
        {
            name: 'C++ STL',
            type: 'credit',
            teachers: ['Vladimirova M.V.', 'Morozova A.G.']
        },
        {
            name: 'Operation Systems',
            type: 'exam',
            teachers: 'Ignatov S.Y.'
        },
        {
            name: 'Mathematical Analysis',
            type: 'exam',
            teachers: 'Gefter S.L.'
        },
        {
            name: 'C++ STL',
            type: 'credit',
            teachers: ['Vladimirova M.V.', 'Morozova A.G.']
        },
        {
            name: 'Operation Systems',
            type: 'exam',
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
