import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { tableTypes } from '../types/types';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}


const initialTableState: ITableState = {
  tableHeader: {
    title: '',
    count: 0,
    btnLink: '',
    btnModal: '',
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
  btnLink?: string,
  btnModal?: string,
}
export type TableBody = {
  tableHeads?: any
  tableContent?: object[]
}

export const tableReducer = persistReducer(
  {storage, key: 'v100-demo1-table', whitelist: ['TableHeader', 'TableBody']},
  (state: ITableState = initialTableState, action: ActionWithPayload<ITableState>) => {
    switch (action.type) {
      case tableTypes.Load: { 
        const tableHeader = action.payload?.tableHeader
        const tableBody = action.payload?.tableBody
        // console.log(state.tableBody?.tableHeads)
        return {tableHeader, tableBody}
      }
      case tableTypes.clearTable: {
        return {...initialTableState}
      }

      case tableTypes.LoadTableHeads: {
        return {
          ...state, 
          tableBody: {...state.tableBody, tableHeads: action.payload?.tableBody?.tableHeads}
        }
      }

      default:
        return state
    }
  }
)