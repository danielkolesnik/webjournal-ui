
// temporary emulation of API service
import SUBJECTS from '../constants/subjects';
import EVENTS from '../constants/events';

export default {
    getSubjects: () => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve(SUBJECTS);
                // reject('Can\'t find subjects for you');
            }, 0.7 * 1000)
        });
    },
    getSubjectById: () => {

    },
    getUpcomingEvents: () => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve(EVENTS.UPCOMING_EVENTS);
                // reject('Can\'t find upcoming events for you');
            }, 0.7 * 1000)
        });
    },
    getLastEvents: () => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve(EVENTS.LAST_EVENTS);
                // reject('Can\'t find last events for you');
            }, 0.7 * 1000)
        });
    }
};