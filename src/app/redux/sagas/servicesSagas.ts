import { IfamilyResponseRR } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { getServices, deleteService, updateService, createService } from '../../api/ServicesService';
import { IServicesResponse } from '../../modules/services/Interfaces/models';
import { servicesActions } from '../actions/actions';
import { servicesTypes } from '../types/types';

interface ActionTypePayload {
    type: string, 
    payload: number
}

export function* sagaServices() {
    // Worker Sagas
    function* asyncLoad() {
      try {
        const {data: {results}}: IfamilyResponseRR = yield call(getServices)
        yield put(servicesActions.load(results))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteService({payload}:ActionTypePayload) {
      try {
        const resp: IServicesResponse = yield call(deleteService, payload)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateService({payload}:ActionTypePayload) {
      try {
        const resp: IServicesResponse = yield call(updateService, payload)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateService({payload}:ActionTypePayload) {
      try {
        const resp: IServicesResponse = yield call(createService, payload)
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(servicesTypes.AsyncLoad, asyncLoad)
    yield takeLatest(servicesTypes.Delete, sagaDeleteService)
    yield takeLatest(servicesTypes.Update, sagaUpdateService)
    yield takeLatest(servicesTypes.Create, sagaCreateService)
  }