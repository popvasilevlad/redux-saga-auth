import { put, takeLatest, all, call} from 'redux-saga/effects';
import * as API from 'utils/api';
import * as ACTIONS from 'constants/action-types';

function* requestLogin(credentials) {
    try {
        const response = yield call(API.loginPostRequest, credentials);
        yield put({ type: ACTIONS.LOGIN_SUCCESS, data: response.data});
    } catch(res) {
        yield put({ type: ACTIONS.LOGIN_FAIL, err: res.error });
    };
};

function* redirectToDasboard() {
    yield put({ type: ACTIONS.REDIRECT_TO_DASHBOARD });
}

function* loginWatcher() {
    yield takeLatest(ACTIONS.LOGIN_ATTEMPT, requestLogin);
    yield takeLatest(ACTIONS.LOGIN_SUCCESS, redirectToDasboard);
}

export default function* rootSaga() {
    yield all([
        loginWatcher()
    ]);
}