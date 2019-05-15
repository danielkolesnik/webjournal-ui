
// local dependencies
import ROLES from './roles';

export const SUFFIX: any = {
    ASK: 'ASK',
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    FINISH: 'FINISH',
};

export function createComplexType (type: string) {
    let action: any = {};
    for ( let name of Object.keys(SUFFIX) ) {
        action[name] = `${type}.${SUFFIX[name]}`;
    }
    return action;
}

let loginPrefix = `@@signin-page/`;
export const SIGN_IN = {
    // simple
    PRELOADER: loginPrefix+'PRELOADER',
    HANDLE_ERROR: loginPrefix+'HANDLE_ERROR',
    CLEAR: loginPrefix+'CLEAR',
    // complex
    LOG_IN: createComplexType(loginPrefix+'LOG_IN')
};

export const APP = (role: string) => {
    let appPrefix = `@${role}@app/`;
    // common action types for all roles
    let actions = {
        PRELOADER: appPrefix+'PRELOADER',
        LOG_OUT: createComplexType(appPrefix+'LOG_OUT')
    };
    // NOTE here depends on role you can add some role-specific actions
    switch(role) {
        default:
    }
    return actions;
};

export const SUBJECTS = (role: string) => {
    let cardsPrefix = `@${role}@subjects-page/`;

    // common action types for all roles
    let actions = {
        // simple
        PRELOADER: cardsPrefix+'PRELOADER',
        HANDLE_ERROR: cardsPrefix+'HANDLE_ERROR',
        CLEAR: cardsPrefix+'CLEAR',
        FILTER: cardsPrefix+'FILTER',
        // complex
        GET_SUBJECTS: createComplexType(cardsPrefix+'GET_SUBJECTS')
    };
    // NOTE here depends on role you can add some role-specific actions
    switch(role) {
        default:
    }
    return actions;
};

const STUDENT = {
    APP: APP(ROLES.STUDENT),
    SUBJECTS: SUBJECTS(ROLES.STUDENT)
};

export default {
    SIGN_IN,
    STUDENT
}
