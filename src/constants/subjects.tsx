import {EVENT_TYPES} from "../types/student/Event";


export default [
    {
        id: 1,
        name: 'OOP Python',
        type: 'credit',
        teachers: ['Zaretskaya I.T.']
    },
    {
        id: 2,
        name: 'Mathematical Analysis',
        type: 'exam',
        teachers: ['Gefter S.L.']
    },
    {
        id: 3,
        name: 'C++ STL',
        type: 'exam',
        teachers: ['Vladimirova M.V.', 'Morozova A.G.']
    },
    {
        id: 4,
        name: 'Operation Systems',
        type: 'exam',
        teachers: ['Ignatov S.Y.']
    },
    {
        id: 4,
        name: 'Study of mathematical operations',
        type: 'exam',
        teachers: ['Polyakova L.Y.']
    }
];

export const SUBJECT_DTOS = [
    {
        id: 1,
        name: 'OOP Python',
        type: 'credit',
        teachers: ['Zaretskaya I.T.'],
        upcomingEvents: [
            {
                id: 120,
                name: 'Project',
                type: EVENT_TYPES.LABORATORY,
                date: '04-06-2019',
                maxPoints: 70
            }
        ],
        lastEvents: [
            {
                id: 452,
                name: 'Laboratory 1',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 9,
                evaluationDate: '21-05-2019'
            },
            {
                id: 458,
                name: 'Laboratory 2',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 6,
                evaluationDate: '21-05-2019'
            },
            {
                id: 456,
                name: 'Laboratory 3',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 4,
                evaluationDate: '21-05-2019'
            }
        ]
    },
    {
        id: 2,
        name: 'Mathematical Analysis',
        type: 'exam',
        teachers: ['Gefter S.L.'],
        upcomingEvents: [
            {
                id: 789,
                name: 'Exam',
                type: EVENT_TYPES.EXAM,
                date: '04-06-2019',
                maxPoints: 40
            }
        ],
        lastEvents: [
            {
                id: 932,
                name: 'Module #1',
                type: EVENT_TYPES.MODULE,
                date: '20-05-2019',
                maxPoints: 30,
                points: 20,
                evaluationDate: '21-05-2019'
            },
            {
                id: 241,
                name: 'Module #2',
                type: EVENT_TYPES.MODULE,
                date: '20-05-2019',
                maxPoints: 30,
                points: 29,
                evaluationDate: '21-05-2019'
            }
        ]
    },
    {
        id: 3,
        name: 'C++ STL',
        type: 'exam',
        teachers: ['Vladimirova M.V.', 'Morozova A.G.'],
        upcomingEvents: [],
        lastEvents: [
            {
                id: 113,
                name: 'Laboratory 1',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 9,
                evaluationDate: '21-05-2019'
            },
            {
                id: 121,
                name: 'Laboratory 2',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 6,
                evaluationDate: '21-05-2019'
            },
            {
                id: 212,
                name: 'Laboratory 3',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 4,
                evaluationDate: '21-05-2019'
            }
        ]
    },
    {
        id: 4,
        name: 'Operation Systems',
        type: 'exam',
        teachers: ['Ignatov S.Y.'],
        upcomingEvents: [
            {
                id: 789,
                name: 'Credit',
                type: EVENT_TYPES.CREDIT,
                date: '04-06-2019',
                maxPoints: 40
            }
        ],
        lastEvents: [
            {
                id: 113,
                name: 'Laboratory 1',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 9,
                evaluationDate: '21-05-2019'
            },
            {
                id: 121,
                name: 'Laboratory 2',
                type: EVENT_TYPES.LABORATORY,
                date: '20-05-2019',
                maxPoints: 10,
                points: 6,
                evaluationDate: '21-05-2019'
            }
        ]
    },
    {
        id: 4,
        name: 'Study of mathematical operations',
        type: 'exam',
        teachers: ['Polyakova L.Y.'],
        upcomingEvents: [
            {
                id: 698,
                name: 'Credit',
                type: EVENT_TYPES.CREDIT,
                date: '04-06-2019',
                maxPoints: 40
            }
        ],
        lastEvents: [
            {
                id: 932,
                name: 'Module #1',
                type: EVENT_TYPES.MODULE,
                date: '20-05-2019',
                maxPoints: 30,
                points: 20,
                evaluationDate: '21-05-2019'
            },
            {
                id: 241,
                name: 'Module #2',
                type: EVENT_TYPES.MODULE,
                date: '20-05-2019',
                maxPoints: 30,
                points: 29,
                evaluationDate: '21-05-2019'
            }
        ]
    }
];
