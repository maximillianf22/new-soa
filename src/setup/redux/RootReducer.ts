import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { tableReducer } from '../../app/redux/reducers/TableRedux';
import { usersReducer } from '../../app/redux/reducers/UsersRedux';
import { familiesReducer } from '../../app/redux/reducers/FamilyRedux';
import { sagaUsers } from '../../app/redux/sagas/usersSagas';
import { uiReducer } from '../../app/redux/reducers/uiRedux';
import { accountsReducer } from '../../app/redux/reducers/AccountsRedux';
import { sagaAccounts } from '../../app/redux/sagas/accountsSagas';
import { servicesReducer } from '../../app/redux/reducers/ServicesReducer';
import { sagaServices } from '../../app/redux/sagas/servicesSagas';
import { plansReducer } from '../../app/redux/reducers/PlansRedux';
import { sagaPlans } from '../../app/redux/sagas/plansSagas';
import { sagaPlanServices } from '../../app/redux/sagas/planServicesSagas';
import { planServicesReducer } from '../../app/redux/reducers/PlanServicesReducer';
import { permitsReducer } from '../../app/redux/reducers/permitsRedux';
import { stagesReducer } from '../../app/redux/reducers/StagesReducer';
import { sagaStages } from '../../app/redux/sagas/stagesSagas';
import { sagaFamilies } from '../../app/redux/sagas/familiesSaga';
import { authSaga } from '../../app/redux/sagas/authSaga';
import { questionsReducer } from '../../app/redux/reducers/QuestionsReducer';
import { sagaQuestions } from '../../app/redux/sagas/questionsSagas';
import { sagaProviders } from '../../app/redux/sagas/providerSagas';
import { providersReducer } from '../../app/redux/reducers/ProvidersRedux';

export const rootReducer = combineReducers({
  accounts: accountsReducer,
  auth: auth.reducer,
  families: familiesReducer,
  permits: permitsReducer,
  plans: plansReducer,
  planServices: planServicesReducer,
  providers: providersReducer,
  services: servicesReducer,
  table: tableReducer,
  ui: uiReducer,
  users: usersReducer,
  stages: stagesReducer,
  questions: questionsReducer
});

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([
    authSaga(),
    sagaUsers(),
    sagaAccounts(),
    sagaPlans(),
    sagaFamilies(),
    sagaServices(),
    sagaPlanServices(),
    sagaProviders(),
    sagaStages(),
    sagaQuestions()
  ])
};