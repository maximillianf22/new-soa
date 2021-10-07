import { IfamilyResponseRR } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { IResponseServiceService } from '../../modules/services/Interfaces/models';
import { getPlanServices, deletePlanService, updatePlanService, getPlanService, createPlanService } from '../../api/PlanServicesService';
import { IPlanServicesResponse } from '../../modules/plan_services/Interfaces/models';
import { planServicesActions } from '../actions/planServicesActions';
import { planServicesTypes } from '../types/planServicesTypes';

interface ActionTypePayload {
    type: string, 
    payload: number
}

export function* sagaPlanServices() {
    // Worker Sagas
    function* asyncLoad() {
      try {
        const {data: {results}}: IfamilyResponseRR = yield call(getPlanServices)
        yield put(planServicesActions.load(results))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeletePlanService({payload}:ActionTypePayload) {
      try {
        const resp: IPlanServicesResponse = yield call(deletePlanService, payload)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdatePlanService({payload}:ActionTypePayload) {

      try {
        yield call(updatePlanService, payload);
        const {data}: IResponseServiceService = yield call(getPlanService, payload)
        yield put(planServicesActions.updateFromReducer(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreatePlanService({payload}:ActionTypePayload) {
      try {
        const resp: IPlanServicesResponse = yield call(createPlanService, payload)
        yield put({type: planServicesTypes.AsyncLoad})
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(planServicesTypes.AsyncLoad, asyncLoad)
    yield takeLatest(planServicesTypes.Delete, sagaDeletePlanService)
    yield takeLatest(planServicesTypes.Update, sagaUpdatePlanService)
    yield takeLatest(planServicesTypes.Create, sagaCreatePlanService)
  }