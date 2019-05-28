// outsource
import axios from 'axios';
// temporary emulation of API service
import EVENTS from '../constants/events';

let api: any = null;

function getInitializedAPI() {
    const apiHost = 'http://localhost:8000';
    const apiURL = `${apiHost}/api`;
    if(api==null)
        api = axios.create({
            baseURL: apiURL,
            responseType: 'json',
            headers: {
                'content-type': 'application/json',
                Accept: '*/*'
            }
        });

    return api;
}

export default class API {
    static auth: any = {username: null, password: null};
    static role: string = '';

    static setAuth(username: string, password: string, role: string, token: string) {
        getInitializedAPI().defaults.headers['Authorization'] = `Token ${token}`;
        this.auth = {username, password};
        this.role = role;
    }

    static async signIn(username: string, password: string, role: string) {
        let {data} = await getInitializedAPI().post('/login', {
            "username": username,
            "password": password
        });
        console.log(data);
        API.setAuth(username, password, role, data.token);

        return getInitializedAPI().get('/user/', {
            params: {
                'role': role
            }
        });
    }

    static signOut() {
        API.auth = {username: null, password: null};
        api  = null;
        API.role = '';
    }

    static getSubjects () {
        return getInitializedAPI().get('/subjects');
    }

    static getSubjectById (id: number) {
        return getInitializedAPI().get(`/subjects/${id}`);
    }

    static getEventsOfSubjectById (id: number, from: string = '', to: string = '') {
        let params: any = {};
        if(from.length) params.from = from;
        if(to.length) params.to = to;
        return getInitializedAPI().get(`/subjects/${id}/events`, {
            params
        });
    }

    static getEvents (from: string = '', to: string = '')  {
        let params: any = {};
        if(from.length) params.from = from;
        if(to.length) params.to = to;
        return getInitializedAPI().get(`/events`, {
            params
        });
    }

    static getEventById (id: number) {
        return getInitializedAPI().get(`/events/${id}`);
    }
}

// export default {
//     getSubjects: () => {
//         return axios.get('http://localhost:8000/api/subjects');
//
//         // return new Promise((resolve: any, reject: any) => {
//         //     setTimeout(() => {
//         //         resolve(SUBJECTS);
//         //         // reject('Can\'t find subjects for you');
//         //     }, 0.5 * 1000)
//         // });
//     },
//     getSubjectById: (id: number) => {
//         return axios.get(`http://localhost:8000/api/subjects/${id}`);
//     },
//     getUpcomingEvents: () => {
//         return new Promise((resolve: any, reject: any) => {
//             setTimeout(() => {
//                 resolve(EVENTS.UPCOMING_EVENTS);
//                 // reject('Can\'t find upcoming events for you');
//             }, 0.5 * 1000)
//         });
//     },
//     getLastEvents: () => {
//         return new Promise((resolve: any, reject: any) => {
//             setTimeout(() => {
//                 resolve(EVENTS.LAST_EVENTS);
//                 // reject('Can\'t find last events for you');
//             }, 0.3 * 1000)
//         });
//     }
// };