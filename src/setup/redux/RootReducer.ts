import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { saga, tableReducer } from '../../app/redux/reducers/TableRedux';
import { usersReducer, sagaUsers } from '../../app/redux/reducers/UsersRedux';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  table: tableReducer,
  users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga(), saga(), sagaUsers()])
}
