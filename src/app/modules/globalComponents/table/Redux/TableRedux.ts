import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest} from 'redux-saga/effects'
// import {string[]} from '../models/string[]'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  asyncLoad: '[TableRedux] start loading data',
  Load: '[TableRedux] load data to reducer',
  clearTable: '[TableRedux] clear data to reducer',

}

const initialTableState: ITableState = {
  tableHeader: {
    title: '',
    count: 0,
    btnPath: '',
    btnTarget: ''
  },
  tableBody: {
    tableHeads: ['', '', '', ''],
    tableContent: []
  }
}

export interface ITableState {
  tableHeader?: TableHeader
  tableBody?: TableBody
}

export type TableHeader = {
  title?: string,
  count?: number,
  btnPath?: string,
  btnTarget?: string
}
export type TableBody = {
  tableHeads: any[]
  tableContent: any[]
}

export const tableReducer = persistReducer(
  {storage, key: 'v100-demo1-table', whitelist: ['TableHeader', 'TableBody']},
  (state: ITableState = initialTableState, action: ActionWithPayload<ITableState>) => {
    switch (action.type) {
      case actionTypes.Load: { 
        const tableHeader = action.payload?.tableHeader
        const tableBody = action.payload?.tableBody
        return {tableHeader, tableBody}
      }
      case actionTypes.clearTable: {
        return {...initialTableState}
      }

      // case actionTypes.Register: {
      //   const accessToken = action.payload?.accessTokenreturn {accessToken, TableBody}
      //   return initialTableState
      // }

      // case actionTypes.UserRequested: {
      //   return {...state, user: undefined}
      // }

      // case actionTypes.UserLoaded: {
      //   const user = action.payload?.user
      //   return {...state, user}
      // }

      // case actionTypes.SetUser: {
      //   const user = action.payload?.user
      //   return {...state, user}
      // }

      default:
        return state
    }
  }
)

export const actions = {
  load: (payload: ITableState) => ({type: actionTypes.Load, payload: payload}),
  clear: () => ({type: actionTypes.clearTable,}),
  // register: (accessToken: string) => ({
  //   type: actionTypes.Register,
  //   payload: {accessToken},
  // }),
  // logout: () => ({type: actionTypes.Logout}),
  // requestUser: () => ({
  //   type: actionTypes.UserRequested,
  // }),
  // fulfillUser: (user: string[]) => ({type: actionTypes.UserLoaded, payload: {user}}),
  // setUser: (user: string[]) => ({type: actionTypes.SetUser, payload: {user}}),
}

export function* saga() {
  // yield takeLatest(actionTypes.Load, function* loginSaga() {
  //   yield put(actions.load())
  // })

  // yield takeLatest(actionTypes.Register, function* registerSaga() {
  //   yield put(actions.requestUser())
  // })

  // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
  //   const {data: user} = yield getUserByToken()
  //   yield put(actions.fulfillUser(user))
  // })
}
