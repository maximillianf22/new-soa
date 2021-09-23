import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { tableReducer } from '../../app/redux/reducers/TableRedux';
import { usersReducer } from '../../app/redux/reducers/UsersRedux';
import { sagaUsers, authSaga, tableSaga } from '../../app/redux/sagas/sagas';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  table: tableReducer,
  users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([authSaga(), tableSaga(), sagaUsers()])
}
