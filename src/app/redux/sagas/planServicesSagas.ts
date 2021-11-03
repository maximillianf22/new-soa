import { IfamilyResponseRR } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { IResponseServiceService } from '../../modules/services/Interfaces/models';
import { getPlanServices, deletePlanService, updatePlanService, getPlanService, createPlanService, stagesValidation, stagesSave } from '../../api/PlanServicesService';
import { IPlanServicesResponse } from '../../modules/plan_services/Interfaces/models';
import { planServicesActions } from '../actions/planServicesActions';
import { planServicesTypes } from '../types/planServicesTypes';
import { uiTypes } from '../types/types';
import { toast } from 'react-toastify';

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
        
        yield put({type: uiTypes.uiFinishLoading})
        yield put({type: planServicesTypes.AsyncLoad})
        yield put(planServicesActions.SelectedPlanService(resp.data))

      } catch (error) {
        console.log(error)
        yield put({type: uiTypes.uiFinishLoading}) //Así funciona 
      } 
    }

    function* sagaStagesValidation({payload}:ActionTypePayload) {
      try {
        const resp: IPlanServicesResponse = yield call(stagesValidation, payload)
      } catch (error:any) {
        toast.error(error.response.data.Error);
      } 
    }

    function* sagaStagesSave({payload}:ActionTypePayload) {
      try {
        console.log("en saga plstages save", payload)
        const resp: IPlanServicesResponse = yield call(stagesSave, payload)
      } catch (error:any) {
        toast.error(error.response.data.Error);
      } 
    }
  
    // Watcher Sagas
    yield takeLatest(planServicesTypes.AsyncLoad, asyncLoad)
    yield takeLatest(planServicesTypes.Delete, sagaDeletePlanService)
    yield takeLatest(planServicesTypes.Update, sagaUpdatePlanService)
    yield takeLatest(planServicesTypes.Create, sagaCreatePlanService)
    yield takeLatest(planServicesTypes.StageValidation, sagaStagesValidation)
    yield takeLatest(planServicesTypes.StageSave, sagaStagesSave)
  }