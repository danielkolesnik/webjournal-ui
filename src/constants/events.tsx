import Subject from "../types/student/Subject";
import {EVENT_TYPES} from "../types/student/Event";

export const UPCOMING_EVENTS = [
    {
        id: 1,
        name: 'Module 1',
        subject: {
            id: 1,
            name: 'Discrete Math',
            teacher: 'Polyakova L.Y.'
        },
        type: EVENT_TYPES.CREDIT,
        date: '24-03-2019',
        maxPoints: 20,
        points: 17
    },
    {
        id: 2,
        name: 'Module 12',
        subject: {
            id: 2,
            name: 'Mathematical Analysis',
            teacher: 'Gefter S.L.'
        },
        type: EVENT_TYPES.CREDIT,
        date: '24-05-2019',
        maxPoints: 20,
        points: 17
    },
    {
        id: 3,
        name: 'Module 13',
        subject: {
            id: 1,
            name: 'C++ STL',
            teacher: 'Vladimirova M.V.'
        },
        type: EVENT_TYPES.CREDIT,
        date: '08-01-2019',
        maxPoints: 20,
        points: 17
    },
    {
        id: 4,
        name: 'Module 14',
        subject: {
            id: 1,
            name: 'Discrete Math',
            teacher: 'Morozova A.G.'
        },
        type: EVENT_TYPES.CREDIT,
        date: '12-05-2019',
        maxPoints: 20,
        points: 17
    },
    {
        id: 5,
        name: 'Module 15',
        subject: {
            id: 1,
            name: 'Discrete Math',
            teacher: 'Morozova A.G.'
        },
        type: EVENT_TYPES.CREDIT,
        date: '04-06-2019',
        maxPoints: 20,
        points: 17
    }
];

export const LAST_EVENTS = [
    {
        id: 12,
        name: 'Credit',
        subject: {
            id: 1,
            name: 'Discrete Math',
            teacher: 'Morozova A.G.'
        },
        type: EVENT_TYPES.CREDIT,
        date: '20-05-2019',
        maxPoints: 20,
        points: 17
    },
    {
        id: 134,
        name: 'Exam',
        subject: {
            id: 1,
            name: 'Discrete Math',
            teacher: 'Morozova A.G.'
        },
        type: EVENT_TYPES.EXAM,
        date: '04-06-2019',
        maxPoints: 20,
        points: 17
    },
    {
        id: 86,
        name: 'Exam',
        subject: {
            id: 1,
            name: 'Discrete Math',
            teacher: 'Morozova A.G.'
        },
        type: EVENT_TYPES.EXAM,
        date: '12-06-2019',
        maxPoints: 20,
        points: 17
    }
];

export default {
    LAST_EVENTS,
    UPCOMING_EVENTS
}
