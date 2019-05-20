
// temporary emulation of API service
import SUBJECTS, {SUBJECT_DTOS} from '../constants/subjects';
import EVENTS from '../constants/events';

export default {
    getSubjects: () => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve(SUBJECTS);
                // reject('Can\'t find subjects for you');
            }, 0.5 * 1000)
        });
    },
    getSubjectDTOById: (id: number) => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                for(let subject of SUBJECT_DTOS) {
                    if(subject.id === id) resolve(subject);
                }
                // reject('Can\'t find subjects for you');
            }, 0.5 * 1000)
        });
    },
    getUpcomingEvents: () => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve(EVENTS.UPCOMING_EVENTS);
                // reject('Can\'t find upcoming events for you');
            }, 0.5 * 1000)
        });
    },
    getLastEvents: () => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve(EVENTS.LAST_EVENTS);
                // reject('Can\'t find last events for you');
            }, 0.3 * 1000)
        });
    }
};