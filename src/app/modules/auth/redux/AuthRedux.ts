import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest, call} from 'redux-saga/effects'
import { UserModel } from '../models/UserModel';
import { login, Data } from './AuthCRUD';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  asyncLogin: '[Login] asyncLogin',
  Login: '[Login] Action',
  Loading: '[Login] Loading',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
}

const initialAuthState: ResponseGenerator = {
  user: undefined,
  access: undefined,
  loading: false
}

export interface IAuthState {
  user?: UserModel
  access?: any
}

export const reducer = persistReducer(
  {storage, key: 'v100-demo1-auth', whitelist: ['user', 'access']},
  (state: ResponseGenerator = initialAuthState, action: ActionWithPayload<ResponseGenerator>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const access = action.payload?.access
        const user = action.payload?.user
        return {...state, access, user}
      }

      case actionTypes.Loading: {
        return {...state, loading: !state.loading}
      }

      case actionTypes.Register: {
        const access = action.payload?.access
        return {access, user: undefined}
      }

      case actionTypes.Logout: {
        return initialAuthState
      }

      case actionTypes.UserRequested: {
        return {...state, user: undefined}
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user
        return {...state, user}
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user
        return {...state, user}
      }

      default:
        return state
    }
  }
)

export const actions = {
  login: (loginResponse: ResponseGenerator | undefined) => ({type: actionTypes.Login, payload: loginResponse}),
  loading: () => ({type: actionTypes.Loading}),
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: {accessToken},
  }),
  logout: () => ({type: actionTypes.Logout}),
  requestUser: () => ({
    type: actionTypes.UserRequested,
  }),
  fulfillUser: (user: UserModel) => ({type: actionTypes.UserLoaded, payload: {user}}),
  setUser: (user: UserModel) => ({type: actionTypes.SetUser, payload: {user}}),
}

export interface ResponseGenerator{
  access?: string | undefined
  refresh?:string,
  user?:UserModel,
  loading?: boolean
}

interface ActionTypePayload {
  type: string, 
  payload: Data
}

interface response {
  data?: ResponseGenerator | undefined
}

export function* saga() {
  // Worker Sagas
  function* loginSaga({payload}:ActionTypePayload) {
    try {
      yield put(actions.loading());
      const {data}:response = yield call(login, payload);
      yield put(actions.login(data))
      console.log("final del try", data)
    } catch (error) {
      console.log(error)
    } finally {
      yield put(actions.loading());
    }
  };

  // Watcher Sagas
  yield takeLatest(actionTypes.asyncLogin, loginSaga)
  
  // yield takeLatest(actionTypes.Login, function* loginSaga() {
  //   yield put(actions.requestUser())
  // })

  // yield takeLatest(actionTypes.Register, function* registerSaga() {
  //   yield put(actions.requestUser())
  // })

  // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
  //   // const {data: user} = yield getUserByToken()
  //   // yield put(actions.fulfillUser(user))
  // })
}