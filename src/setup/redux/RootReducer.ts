import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { saga, tableReducer } from '../../app/modules/globalComponents/tables/Redux/TableRedux';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  table: tableReducer
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga(), saga()])
}
