// outsource
import { toastr } from 'react-redux-toastr';
import { takeEvery, take, put, call } from 'redux-saga/effects';

// local dependencies
import {STUDENT} from "../../../../constants/actions";
import API from '../../../../services/API';


const { SUBJECTS } = STUDENT;

export default function* ():any {
    yield takeEvery(SUBJECTS.INITIALIZE, initializeSaga);
    yield takeEvery(SUBJECTS.GET_SUBJECTS.REQUEST, getSubjectsSaga);
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
        let data = yield call(API.getSubjects);
        yield put({type: SUBJECTS.GET_SUBJECTS.SUCCESS, payload: data});
    } catch(error) {
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: SUBJECTS.GET_SUBJECTS.ERROR});
    }
}
