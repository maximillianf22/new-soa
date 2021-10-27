import { login, Data } from '../../api/AuthCRUD';
import { call, put } from '@redux-saga/core/effects';
import { authActions } from '../actions/actions';
import { response } from '../reducers/AuthRedux';
import { takeLatest } from 'redux-saga/effects';
import { authTypes } from '../types/types';
import { permitActions } from '../actions/permitActions';

interface ActionTypePayloadAuth {
    type: string, 
    payload: Data
  }

  export function* authSaga() {
    // Worker Sagas
    function* loginSaga({payload}:ActionTypePayloadAuth) {
      try {
        yield put(authActions.loading());
        const {data}:response = yield call(login, payload);
        yield put(authActions.login(data))
        yield put(permitActions.loadReduxFromLogin(data))
      } catch (error:any) {
        yield put(authActions.loginError(error.response.data.detail))
      } finally {
        yield put(authActions.loading());
      }
    };
  
    // Watcher Sagas
    yield takeLatest(authTypes.asyncLogin, loginSaga)
    
    // yield takeLatest(authTypes.Login, function* loginSaga() {
    //   yield put(authActions.requestUser())
    // })
  
    // yield takeLatest(authTypes.Register, function* registerSaga() {
    //   yield put(authActions.requestUser())
    // })
  
    // yield takeLatest(authTypes.UserRequested, function* userRequested() {
    //   // const {data: user} = yield getUserByToken()
    //   // yield put(authActions.fulfillUser(user))
    // })
  }