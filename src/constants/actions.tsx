
// local dependencies
import ROLES from './roles';

export const SUFFIX: any = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    FINISH: 'FINISH',
};

function createComplexType (type: string, suffix: any = SUFFIX) {
    let action: any = {};
    for ( let name of Object.keys(suffix) ) {
        action[name] = `${type}.${suffix[name]}`;
    }
    return action;
}

export const SIGN_IN = (() => {
    let prefix = `@@signin-page/`;

    return {
        // simple
        PRELOADER: prefix+'PRELOADER',
        HANDLE_ERROR: prefix+'HANDLE_ERROR',
        CLEAR: prefix+'CLEAR',
        // complex
        LOG_IN: createComplexType(prefix+'LOG_IN')
    }
})();

export const APP = (() => {
    let prefix = `@app/`;
    // common action types for all roles
    return {
        // helpers
        PREFIX: new RegExp(prefix, 'i'),
        // simple
        PRELOADER: prefix+'PRELOADER',
        // complex
        LOG_OUT: createComplexType(prefix+'LOG_OUT')
    };
})();

const SUBJECTS = (role: string) => {
    let prefix = `@${role}@subjects-page/`;

    // common action types for all roles
    let actions = {
        // helpers
        PREFIX: new RegExp(prefix, 'i'),
        // simple
        INITIALIZE: prefix+'INITIALIZE',
        PRELOADER: prefix+'PRELOADER',
        HANDLE_ERROR: prefix+'HANDLE_ERROR',
        CLEAR: prefix+'CLEAR',
        CLEAR_MODAL: prefix+'CLEAR_MODAL',
        FILTER: prefix+'FILTER',
        // complex
        GET_SUBJECTS: createComplexType(prefix+'GET_SUBJECTS'),
        GET_SUBJECT: createComplexType(prefix+'GET_SUBJECT')
    };
    // NOTE here depends on role you can add some role-specific actions
    switch(role) {
        default:
    }
    return actions;
};

const HOME = (role: string) => {
    let prefix = `@${role}@home-page/`;

    // common action types for all roles
    let actions:any = {
        // helpers
        PREFIX: new RegExp(prefix, 'i'),
        // simple
        INITIALIZE: prefix+'INITIALIZE',
        PRELOADER: prefix+'PRELOADER',
        HANDLE_ERROR: prefix+'HANDLE_ERROR',
        CLEAR: prefix+'CLEAR',
        CLEAR_MODAL: prefix+'CLEAR_MODAL',
        // complex
        GET_LAST_EVENTS: createComplexType(prefix+'GET_LAST_EVENTS'),
        GET_UPCOMING_EVENTS: createComplexType(prefix+'GET_UPCOMING_EVENTS'),
        GET_EVENT: createComplexType(prefix+'GET_SUBJECT')
    };
    // NOTE here depends on role you can add some role-specific actions
    switch(role) {
        default:
            actions['SOME_ACTION'] = prefix+'SOME_ACTION'
    }
    return actions;
};

export const STUDENT = {
    SUBJECTS: SUBJECTS(ROLES.STUDENT),
    HOME: HOME(ROLES.STUDENT),

};

export const PROFESSOR = {
    SUBJECTS: SUBJECTS(ROLES.PROFESSOR),
    HOME: HOME(ROLES.PROFESSOR),
};

export default {
    APP: APP,

}

let modalPrefix = `@@modal/`;
export const MODAL = {
    SHOW: modalPrefix + 'SHOW',
    HIDE: modalPrefix + 'HIDE',
};
