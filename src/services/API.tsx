// outsource
import axios from 'axios';
// temporary emulation of API service
import SUBJECTS, {SUBJECT_DTOS} from '../constants/subjects';
import EVENTS from '../constants/events';

export default {
    getSubjects: () => {
        return axios.get('http://localhost:8000/api/subjects');

        // return new Promise((resolve: any, reject: any) => {
        //     setTimeout(() => {
        //         resolve(SUBJECTS);
        //         // reject('Can\'t find subjects for you');
        //     }, 0.5 * 1000)
        // });
    },
    getSubjectDTOById: (id: number) => {
        return axios.get(`http://localhost:8000/api/subjects/${id}`);
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