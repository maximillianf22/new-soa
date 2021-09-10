import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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
  tableHeads: string[]
  tableContent: object[]
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

      default:
        return state
    }
  }
)

export const actions = {
  load: (payload: ITableState) => ({type: actionTypes.Load, payload: payload}),
  clear: () => ({type: actionTypes.clearTable,}),
}

export function* saga() {
}
