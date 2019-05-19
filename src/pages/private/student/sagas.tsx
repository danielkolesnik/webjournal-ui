// outsource dependencies
import { fork } from 'redux-saga/effects';

// sagas
import subjectsSaga from './subjects/saga';
import homeSaga from './home/saga'

export default function* (): any {
    yield fork(subjectsSaga);
    yield fork(homeSaga);
}
