// outsource dependencies
import {takeEvery, put, call} from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import {toastr} from "react-redux-toastr";

// local dependencies
import { SIGN_IN, APP } from "../../constants/actions";
import API from '../../services/API';


// Export root watcher
export default function* () {
    yield takeEvery(SIGN_IN.LOG_IN.REQUEST, logInSaga);
    yield takeEvery(APP.LOG_OUT.REQUEST, logOutSaga);
}

function* logInSaga({payload}: any) {
    yield put({type: SIGN_IN.CLEAR});
    yield put({type: SIGN_IN.PRELOADER, payload: true});
    try {
        let {values, role} = payload;
        let {username, password} = values;

        //@ts-ignore
        let { data } = yield call(API.signIn, username, password, role);
        yield put({type: SIGN_IN.LOG_IN.SUCCESS, payload: {user: data, role}});
    } catch ( error ) {
        yield call(toastr.error, 'Error', error.message||error);
        yield put({type: SIGN_IN.LOG_IN.ERROR, payload: error});
    }
    yield put({type: SIGN_IN.PRELOADER, payload: false});
}

function* logOutSaga() {
    yield call(API.signOut);
    yield put({type: APP.LOG_OUT.SUCCESS});
}
