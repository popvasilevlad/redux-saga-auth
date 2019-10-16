import { put, takeLatest, all } from 'redux-saga/effects';
import * as ACTIONS from 'constants/action-types';

function* requestLogin() {
    console.log('req login')
    const json = yield fetch('https://reqres.in/api/login', { data: {
        login: 'eve.holt@reqres.in',
        password: 'cityslicka'
    }})
    .then(res => res.json());

    yield put({ type: ACTIONS.LOGIN_SUCCESS, json: json});
}

    function* actionWatcher() {
        yield takeLatest(ACTIONS.LOGIN_ATTEMPT, requestLogin)
    }

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}