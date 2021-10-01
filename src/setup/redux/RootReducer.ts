import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { tableReducer } from '../../app/redux/reducers/TableRedux';
import { usersReducer } from '../../app/redux/reducers/UsersRedux';
import { familiesReducer } from '../../app/redux/reducers/FamilyRedux';
import { sagaUsers, authSaga, tableSaga, sagaFamilies } from '../../app/redux/sagas/sagas';
import { uiReducer } from '../../app/redux/reducers/uiReducer';
import { accountsReducer } from '../../app/redux/reducers/AccountsReducer';
import { sagaAccounts } from '../../app/redux/sagas/accountsSagas';
import { servicesReducer } from '../../app/redux/reducers/ServicesReducer';
import { sagaServices } from '../../app/redux/sagas/servicesSagas';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  table: tableReducer,
  users: usersReducer,
  families: familiesReducer,
  ui: uiReducer,
  accounts: accountsReducer,
  services: servicesReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([
    authSaga(),
    tableSaga(),
    sagaUsers(),
    sagaAccounts(),
    sagaFamilies(),
    sagaServices(),
  ])
};
