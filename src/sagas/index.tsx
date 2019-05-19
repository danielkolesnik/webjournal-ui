// outsource dependencies
import { fork } from 'redux-saga/effects';

// sagas
import studentSagas from '../pages/private/student/sagas';
import professorSagas from '../pages/private/professor/sagas';

export default function* (): any {
    yield fork(studentSagas);
    yield fork(professorSagas);
}
