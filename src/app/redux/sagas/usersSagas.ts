import { response } from '../reducers/AuthRedux';
import { getUsers } from '../../api/TableCRUD';
import { call, put } from '@redux-saga/core/effects';
import { userActions } from '../actions/actions';
import { deleteUser, updateUser, createUser } from '../../api/UsersCRUD';
import { usersTypes } from '../types/types';
import { takeLatest } from 'redux-saga/effects';


interface ActionTypePayload {
  type: string, 
  payload: number
}

export function* sagaUsers() {
    // Worker Sagas
    function* asyncLoad() {
      try {
        const {data}: response = yield call(getUsers)
        yield put(userActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteUser({payload}:ActionTypePayload) {
      try {
        const resp: response = yield call(deleteUser, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateUser({payload}:ActionTypePayload) {
      try {
        const resp: response = yield call(updateUser, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateUser({payload}:ActionTypePayload) {
      try {
        const resp: response = yield call(createUser, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(usersTypes.AsyncLoad, asyncLoad)
    yield takeLatest(usersTypes.Delete, sagaDeleteUser)
    yield takeLatest(usersTypes.Update, sagaUpdateUser)
    yield takeLatest(usersTypes.Create, sagaCreateUser)
  }