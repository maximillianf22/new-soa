import { IfamilyResponseRR } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { IServicesResponse, IResponseServiceService } from '../../modules/services/Interfaces/models';
import { servicesTypes } from '../types/types';
import { stagesTypes } from '../types/stagesTypes';
import { getStages, deleteStage, getStage, updateStage, createStage } from '../../api/StagesService';
import { stagesActions } from '../actions/stagesActions';

interface ActionTypePayload {
    type: string, 
    payload: number
}

export function* sagaStages() {
    // Worker Sagas
    function* asyncLoad() {
      try {
        const {data}: IfamilyResponseRR = yield call(getStages)
        yield put(stagesActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteStage({payload}:ActionTypePayload) {
      try {
        const resp: IServicesResponse = yield call(deleteStage, payload)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateStage({payload}:ActionTypePayload) {

      try {
        yield call(updateStage, payload);
        const {data}: IResponseServiceService = yield call(getStage, payload)
        yield put(stagesActions.updateFromReducer(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateStage({payload}:ActionTypePayload) {
      try {
        const resp: IServicesResponse = yield call(createStage, payload)
        yield put({type: servicesTypes.AsyncLoad})
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(stagesTypes.AsyncLoad, asyncLoad)
    yield takeLatest(stagesTypes.Delete, sagaDeleteStage)
    yield takeLatest(stagesTypes.Update, sagaUpdateStage)
    yield takeLatest(stagesTypes.Create, sagaCreateStage)
  }