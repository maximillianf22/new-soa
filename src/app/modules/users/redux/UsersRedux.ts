import { call, put } from '@redux-saga/core/effects';
import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { deleteUser, getUsers } from './UsersCRUD';
import { takeLatest } from 'redux-saga/effects';
import { response } from '../../auth/redux/AuthRedux';
import { UserModel } from '../../global/models/UserModel';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  AsyncLoad: '[usersRedux] start loading data',
  Load: '[usersRedux] load data do reducer',
  Clear: '[usersRedux] clear reducer data',
  Delete: '[usersRedux] delete user',
}

const initialUsersState = {
    users: []
}

interface IuserState {
    users: UserModel[] | undefined
}

export const usersReducer = persistReducer(
  {storage, key: 'v100-demo1-users', whitelist: ['users']},
  (state: IuserState = initialUsersState, action: ActionWithPayload<IuserState>) => {
    switch (action.type) {
      case actionTypes.Load: { 
        return {...state, users: action.payload?.users}
      }
      case actionTypes.Clear: {
        return {...initialUsersState}
      }

      default:
        return state
    }
  }
)

export const actions = {
  load: (payload: any) => ({type: actionTypes.Load, payload: {users:payload}}),
  clear: () => ({type: actionTypes.Clear,}),
}

interface ActionTypePayload {
  type: string, 
  payload: number
}

export function* sagaUsers() {
  // Worker Sagas
  function* asyncLoad() {
    try {
      const {data}: response = yield call(getUsers)
      yield put(actions.load(data))
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

  // Watcher Sagas
  yield takeLatest(actionTypes.AsyncLoad, asyncLoad)
  yield takeLatest(actionTypes.Delete, sagaDeleteUser)
}