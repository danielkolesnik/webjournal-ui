// outsource dependencies

// local dependencies

export const PUBLIC = '';
export const PRIVATE = '/private';
export const PROFESSOR = PRIVATE + '/professor';
export const STUDENT = PRIVATE + '/student';


/*-------------------------------------------------
        PUBLIC routes
---------------------------------------------------*/
export const LOGIN = {
    LINK: encodeURIComponent(`${PUBLIC}/login`),
    ROUTE: `${PUBLIC}/login`,
    REGEXP: new RegExp(`${PUBLIC}/login`, 'i'),
    HEADING: 'Login',
    NAME: 'Login'
};

/*-------------------------------------------------
        PRIVATE routes
---------------------------------------------------*/
export const P_HOME = {
    LINK: encodeURIComponent(`${PROFESSOR}/home`),
    ROUTE: `${PROFESSOR}/home`,
    REGEXP: new RegExp(`${PROFESSOR}/home`, 'i'),
    HEADING: 'Home',
    NAME: 'Home'
};
export const P_SUBJECTS = {
    LINK: encodeURIComponent(`${PROFESSOR}/subjects`),
    ROUTE: `${PROFESSOR}/subjects`,
    REGEXP: new RegExp(`${PROFESSOR}/subjects`, 'i'),
    HEADING: 'Subjects',
    NAME: 'Subjects'
};
export const P_GROUPS = {
    LINK: encodeURIComponent(`${PROFESSOR}/groups`),
    ROUTE: `${PROFESSOR}/groups`,
    REGEXP: new RegExp(`${PROFESSOR}/groups`, 'i'),
    HEADING: 'Groups',
    NAME: 'Groups'
};


export const S_HOME = {
    LINK: encodeURIComponent(`${STUDENT}/home`),
    ROUTE: `${STUDENT}/home`,
    REGEXP: new RegExp(`${STUDENT}/home`, 'i'),
    HEADING: 'Home',
    NAME: 'Home'
};

export const S_SUBJECTS = {
    LINK: encodeURIComponent(`${STUDENT}/subjects`),
    ROUTE: `${STUDENT}/subjects`,
    REGEXP: new RegExp(`${STUDENT}/subjects`, 'i'),
    HEADING: 'Subjects',
    NAME: 'Subjects'
};

export const PROFESSOR_ROUTES = {
    HOME: P_HOME,
    SUBJECTS: P_SUBJECTS,
    GROUPS: P_GROUPS,
};

export const STUDENT_ROUTES = {
    HOME: S_HOME,
    SUBJECTS: S_SUBJECTS
};

export const MENU_ROUTES = {

};
