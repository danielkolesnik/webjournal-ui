// outsource dependencies
import { fork } from 'redux-saga/effects';

// sagas
import subjectsSaga from './subjects/saga';

export default function* (): any {
    yield fork(subjectsSaga);
}
