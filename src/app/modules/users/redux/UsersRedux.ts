import { call, put } from '@redux-saga/core/effects';
import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createUser, deleteUser, getUsers, updateUser } from './UsersCRUD';
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
  Update: '[usersRedux] update user',
  Create: '[usersRedux] create user',
  SelectedUser: '[usersRedux] selected user',
  ClearSelectedUser: '[usersRedux] clear selected user',
}

const initialUsersState = {
    users: [],
    SelectedUser: undefined
}

interface IuserState {
    users: UserModel[] | undefined
    SelectedUser: UserModel | undefined
}

export const usersReducer = persistReducer(
  {storage, key: 'v100-demo1-users', whitelist: ['users', 'SelectedUser']},
  (state: IuserState = initialUsersState, action: ActionWithPayload<IuserState>) => {
    switch (action.type) {
      case actionTypes.Load: { 
        return {...state, users: action.payload?.users}
      }
      case actionTypes.Clear: {
        return {...initialUsersState}
      }
      case actionTypes.SelectedUser: {
        return {...state, SelectedUser: action.payload?.SelectedUser}
      }
      case actionTypes.ClearSelectedUser: {
        return {...state, SelectedUser: undefined}
      }

      default:
        return state
    }
  }
)

export const actions = {
  load: (payload: any) => ({type: actionTypes.Load, payload: {users:payload}}),
  clear: () => ({type: actionTypes.Clear,}),
  SelectedUser: (payload:any) => ({type: actionTypes.SelectedUser, payload: {SelectedUser:payload}}),
  ClearSelectedUser: () => ({type: actionTypes.ClearSelectedUser}),
  updateUser: (payload:any) => ({type: actionTypes.Update, payload: {user:payload}}),
  createUser: (payload:any) => ({type: actionTypes.Create, payload: {user:payload}}),
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
  yield takeLatest(actionTypes.AsyncLoad, asyncLoad)
  yield takeLatest(actionTypes.Delete, sagaDeleteUser)
  yield takeLatest(actionTypes.Update, sagaUpdateUser)
  yield takeLatest(actionTypes.Create, sagaCreateUser)
}