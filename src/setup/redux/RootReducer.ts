import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { tableReducer } from '../../app/redux/reducers/TableRedux';
import { usersReducer } from '../../app/redux/reducers/UsersRedux';
import { familiesReducer } from '../../app/redux/reducers/FamilyRedux';
import { sagaUsers, authSaga, tableSaga, sagaFamilies } from '../../app/redux/sagas/sagas';
import { uiReducer } from '../../app/redux/reducers/uiRedux';
import { accountsReducer } from '../../app/redux/reducers/AccountsRedux';
import { sagaAccounts } from '../../app/redux/sagas/accountsSagas';
import { servicesReducer } from '../../app/redux/reducers/ServicesReducer';
import { sagaServices } from '../../app/redux/sagas/servicesSagas';
import { plansReducer } from '../../app/redux/reducers/PlansRedux';

export const rootReducer = combineReducers({
  accounts: accountsReducer,
  auth: auth.reducer,
  families: familiesReducer,
  plans: plansReducer,
  table: tableReducer,
  ui: uiReducer,
  services: servicesReducer,
  users: usersReducer,
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
