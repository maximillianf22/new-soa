import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const tableActionTypes = {
  asyncLoad: '[TableRedux] start loading data',
  Load: '[TableRedux] load data to reducer',
  clearTable: '[TableRedux] clear data to reducer',
  LoadTableHeads: '[TableRedux] Load tableHeads'
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
      case tableActionTypes.Load: { 
        const tableHeader = action.payload?.tableHeader
        const tableBody = action.payload?.tableBody
        // console.log(state.tableBody?.tableHeads)
        return {tableHeader, tableBody}
      }
      case tableActionTypes.clearTable: {
        return {...initialTableState}
      }

      case tableActionTypes.LoadTableHeads: {
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

export const tableActions = {
  load: (payload: any) => ({type: tableActionTypes.Load, payload: payload}),
  updateTableHeads: (payload: any) => ({type: tableActionTypes.LoadTableHeads, payload: payload}),
  clear: () => ({type: tableActionTypes.clearTable,}),
}

export function* saga() {
  // Worker Sagas
  // function* asyncLoad() {
  //   try {
  //     const {data}: response = yield call(getUsers)
  //     yield put(tableActions.load({
  //       tableHeader: {
  //         title: 'Usuario',
  //         count: 234,
  //         btnLink: '/usuarios/crear',
  //         btnModal: ''
  //       },
  //       tableBody: {
  //           tableHeads: ['Nombre','Correo','Usuario','Rol'],
  //           tableContent: data
  //       }
  //   }))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Watcher Sagas
  // yield takeLatest(tableActionTypes.asyncLoad, asyncLoad) 
}