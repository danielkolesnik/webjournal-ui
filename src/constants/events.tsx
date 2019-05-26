import {EVENT_TYPES, MarkEvent, UpcomingEvent} from "../types/student/Event";

export const UPCOMING_EVENTS: MarkEvent[] | UpcomingEvent[] = [
    {
        id: 1,
        name: 'Module 1',
        subject: {
            id: 1,
            type: EVENT_TYPES.EXAM,
            name: 'Discrete Math',
            professors: [{id: 3, first_name: "Lyudmila", last_name: "Polyakova"}]
        },
        type: EVENT_TYPES.MODULE,
        date: '24-03-2019',
        maxPoints: 20
    },
    {
        id: 2,
        name: 'Module 2',
        subject: {
            id: 2,
            type: EVENT_TYPES.CREDIT,
            name: 'Mathematical Analysis',
            professors: [{id: 3, first_name: 'Gefter S.L.', last_name: "Polyakova"}]
        },
        type: EVENT_TYPES.MODULE,
        date: '24-05-2019',
        maxPoints: 20
    },
    {
        id: 3,
        name: 'Module 3',
        subject: {
            id: 1,
            type: EVENT_TYPES.EXAM,
            name: 'C++ STL',
            professors: [{id: 3, first_name: '', last_name: "Vladimirova"}, {id: 3, first_name: '', last_name: "Morozova"}]
        },
        type: EVENT_TYPES.MODULE,
        date: '08-01-2019',
        maxPoints: 20
    },
    {
        id: 4,
        name: 'Module 4',
        subject: {
            id: 1,
            type: EVENT_TYPES.EXAM,
            name: 'Discrete Math',
            professors: [{id: 3, first_name: '', last_name: "Morozova"}]
        },
        type: EVENT_TYPES.MODULE,
        date: '12-05-2019',
        maxPoints: 20
    },
    {
        id: 5,
        name: 'Module 5',
        subject: {
            id: 1,
            type: EVENT_TYPES.CREDIT,
            name: 'Discrete Math',
            professors: [{id: 3, first_name: '', last_name: "Morozova"}]
        },
        type: EVENT_TYPES.MODULE,
        date: '04-06-2019',
        maxPoints: 20
    }
];

export const LAST_EVENTS: MarkEvent[] = [
    {
        id: 12,
        name: 'Credit',
        subject: {
            id: 1,
            type: EVENT_TYPES.CREDIT,
            name: 'Discrete Math',
            professors: [{id: 3, first_name: '', last_name: "Morozova"}]
        },
        type: EVENT_TYPES.CREDIT,
        date: '20-05-2019',
        maxPoints: 20,
        points: 17,
        evaluationDate: '21-05-2019'
    },
    {
        id: 12,
        name: 'Credit',
        subject: {
            id: 1,
            type: EVENT_TYPES.CREDIT,
            name: 'Discrete Math',
            professors: [{id: 3, first_name: '', last_name: "Morozova"}]
        },
        type: EVENT_TYPES.CREDIT,
        date: '20-05-2019',
        maxPoints: 20,
        points: 17,
        evaluationDate: '21-05-2019'
    },
    {
        id: 134,
        name: 'Exam',
        subject: {
            id: 1,
            type: EVENT_TYPES.EXAM,
            name: 'Discrete Math',
            professors: [{id: 3, first_name: '', last_name: "Morozova"}]
        },
        type: EVENT_TYPES.EXAM,
        date: '04-06-2019',
        maxPoints: 20,
        points: 10,
        evaluationDate: '07-06-2019'
    },
    {
        id: 86,
        name: 'Exam',
        subject: {
            id: 1,
            type: EVENT_TYPES.EXAM,
            name: 'Discrete Math',
            professors: [{id: 3, first_name: '', last_name: "Morozova"}]
        },
        type: EVENT_TYPES.EXAM,
        date: '12-06-2019',
        maxPoints: 20,
        points: 9,
        evaluationDate: '15-06-2019'
    }
];

export default {
    LAST_EVENTS,
    UPCOMING_EVENTS
}
