// outsource
import { toastr } from 'react-redux-toastr';
import { takeEvery, take, put, call } from 'redux-saga/effects';

// local dependencies
import {STUDENT} from "../../../../constants/actions";
import API from '../../../../services/API';


const { HOME } = STUDENT;

export default function* ():any {
    yield takeEvery(HOME.INITIALIZE, initializeSaga);
    yield takeEvery(HOME.GET_LAST_EVENTS.REQUEST, getLastSaga);
    yield takeEvery(HOME.GET_UPCOMING_EVENTS.REQUEST, getUpcomingSaga);
}

function* initializeSaga():any {
    yield put({type: HOME.CLEAR});
    yield put({type: HOME.PRELOADER, payload: {lastEvents: true, upcomingEvents: true}});

    // main initialization logic
    yield put({type: HOME.GET_LAST_EVENTS.REQUEST});
    let {type, payload} = yield take([HOME.GET_LAST_EVENTS.SUCCESS, HOME.GET_LAST_EVENTS.ERROR]);
    if(type === HOME.GET_LAST_EVENTS.SUCCESS) {
        // additional preparing of data
        yield put({type: HOME.GET_LAST_EVENTS.FINISH, payload});
        yield put({type: HOME.PRELOADER, payload: {lastEvents: false}});
    }
    yield put({type: HOME.GET_UPCOMING_EVENTS.REQUEST});
    let action = yield take([HOME.GET_UPCOMING_EVENTS.SUCCESS, HOME.GET_UPCOMING_EVENTS.ERROR]);
    if(action.type === HOME.GET_UPCOMING_EVENTS.SUCCESS) {
        // additional preparing of data
        yield put({type: HOME.GET_UPCOMING_EVENTS.FINISH, payload: action.payload});
        yield put({type: HOME.PRELOADER, payload: {upcomingEvents: false}});
    }

}

function* getLastSaga():any {
    try {
        let data = yield call(API.getLastEvents);
        yield put({type: HOME.GET_LAST_EVENTS.SUCCESS, payload: data});
    } catch(error) {
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: HOME.GET_LAST_EVENTS.ERROR});
    }
}

function* getUpcomingSaga():any {
    try {
        let data = yield call(API.getUpcomingEvents);
        yield put({type: HOME.GET_UPCOMING_EVENTS.SUCCESS, payload: data});
    } catch(error) {
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: HOME.GET_UPCOMING_EVENTS.ERROR});
    }
}
