// outsource
import { toastr } from 'react-redux-toastr';
import { takeEvery, take, put, call } from 'redux-saga/effects';

// local dependencies
import {PROFESSOR} from "../../../../constants/actions";
import API from '../../../../services/API';
import moment from "moment";
import {Event} from "../../../../models";


const { HOME } = PROFESSOR;

export default function* () {
    yield takeEvery(HOME.INITIALIZE, initializeSaga);
    yield takeEvery(HOME.GET_LAST_EVENTS.REQUEST, getLastSaga);
    yield takeEvery(HOME.GET_UPCOMING_EVENTS.REQUEST, getUpcomingSaga);
    yield takeEvery(HOME.GET_EVENT.REQUEST, getEventSaga);
}

function* initializeSaga() {
    yield put({type: HOME.CLEAR});
    yield put({type: HOME.PRELOADER, payload: {lastEvents: true, upcomingEvents: true}});

    // main initialization logic
    yield put({type: HOME.GET_LAST_EVENTS.REQUEST});
    let {type, payload} = yield take([HOME.GET_LAST_EVENTS.SUCCESS, HOME.GET_LAST_EVENTS.ERROR]);
    if(type === HOME.GET_LAST_EVENTS.SUCCESS) {
        // additional preparing of data
        console.log('LAST GOING TO REDUCER',payload);
        yield put({type: HOME.GET_LAST_EVENTS.FINISH, payload});
        yield put({type: HOME.PRELOADER, payload: {lastEvents: false}});
    }
    yield put({type: HOME.GET_UPCOMING_EVENTS.REQUEST});
    let action = yield take([HOME.GET_UPCOMING_EVENTS.SUCCESS, HOME.GET_UPCOMING_EVENTS.ERROR]);
    if(action.type === HOME.GET_UPCOMING_EVENTS.SUCCESS) {
        console.log('UPCOMING GOING TO REDUCER',action.payload);
        // additional preparing of data
        yield put({type: HOME.GET_UPCOMING_EVENTS.FINISH, payload: action.payload});
        yield put({type: HOME.PRELOADER, payload: {upcomingEvents: false}});
    }

}

function* getLastSaga() {
    try {
        // last events (arg 'from' passed and arg 'to' missed)
        let {data} = yield call(API.getEvents, '', moment().format("YYYY.MM.DD"));
        let result = data.map((entity: any) => (new Event(entity)));
        yield put({type: HOME.GET_LAST_EVENTS.SUCCESS, payload: result});
    } catch(error) {
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: HOME.GET_LAST_EVENTS.ERROR});
    }
}

function* getUpcomingSaga() {
    try {
        // last events (arg 'from' missed and arg 'to' passed)
        let {data} = yield call(API.getEvents, moment().format("YYYY.MM.DD"));
        let result = data.map((entity: any) => (new Event(entity)));
        yield put({type: HOME.GET_UPCOMING_EVENTS.SUCCESS, payload: result});
    } catch(error) {
        console.log(error.message||error);
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: HOME.GET_UPCOMING_EVENTS.ERROR});
    }
}

function* getEventSaga({payload}: any) {
    try {
        // last events (arg 'from' missed and arg 'to' passed)
        let {data} = yield call(API.getEventById, payload);
        console.log('CONCRETE EVENT',data);
        yield put({type: HOME.GET_EVENT.SUCCESS, payload: new Event(data)});
    } catch(error) {
        console.log(error.message||error);
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: HOME.GET_EVENT.ERROR});
    }
}