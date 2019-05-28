// outsource
import { toastr } from 'react-redux-toastr';
import { takeEvery, take, put, call } from 'redux-saga/effects';

// local dependencies
import {PROFESSOR} from "../../../../constants/actions";
import API from '../../../../services/API';
import {Event, Professor, Subject} from '../../../../models';
import moment from "moment";

const { SUBJECTS } = PROFESSOR;

export default function* ():any {
    yield takeEvery(SUBJECTS.INITIALIZE, initializeSaga);
    yield takeEvery(SUBJECTS.GET_SUBJECTS.REQUEST, getSubjectsSaga);
    yield takeEvery(SUBJECTS.GET_SUBJECT.REQUEST, getSubjectSaga);
}

function* initializeSaga():any {
    // preparation
    yield put({type: SUBJECTS.CLEAR});
    yield put({type: SUBJECTS.PRELOADER, payload: true});

    // main initialization logic
    yield put({type: SUBJECTS.GET_SUBJECTS.REQUEST});
    let {type, payload} = yield take([SUBJECTS.GET_SUBJECTS.SUCCESS, SUBJECTS.GET_SUBJECTS.ERROR]);
    if(type === SUBJECTS.GET_SUBJECTS.SUCCESS) {
        // additional preparing of data
        yield put({type: SUBJECTS.GET_SUBJECTS.FINISH, payload});
    }

    // post-business actions
    yield put({type: SUBJECTS.PRELOADER, payload: false});
}

function* getSubjectsSaga():any {
    try {
        let {data} = yield call(API.getSubjects);
        let result = data.map((entity:any) => (new Subject(entity)));
        console.log(data, result);
        yield put({type: SUBJECTS.GET_SUBJECTS.SUCCESS, payload: data});
    } catch(error) {
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: SUBJECTS.GET_SUBJECTS.ERROR});
    }
}

function* getSubjectSaga({payload}: any): any {
    try {
        let {data} = yield call(API.getSubjectById, payload);
        // NOTE Delete after implementing Events
        console.log(data);
        let subject = new Subject(data);
        // last events (arg 'from' passed and arg 'to' missed)
        let last = yield call(API.getEventsOfSubjectById, subject.id, '', moment().format("YYYY.MM.DD"));
        let lastEvents: any = last.data.map((entity: any) => (new Event(entity)));
        // last events (arg 'from' missed and arg 'to' passed)
        let upcoming = yield call(API.getEventsOfSubjectById, subject.id, moment().format("YYYY.MM.DD"));
        let upcomingEvents: any = upcoming.data.map((entity: any) => (new Event(entity)));
        console.log(lastEvents, upcomingEvents);
        yield put({type: SUBJECTS.GET_SUBJECT.FINISH, payload: {subject, lastEvents, upcomingEvents}});
    } catch(error) {
        console.log(error.message||error);
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: SUBJECTS.GET_SUBJECT.ERROR});
    }
}