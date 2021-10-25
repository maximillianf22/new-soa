import { IfamilyResponseRR } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { getServices, deleteService, updateService, createService, getService } from '../../api/ServicesService';
import { IServicesResponse, IResponseServiceService } from '../../modules/services/Interfaces/models';
import { servicesTypes } from '../types/types';
import { servicesActions } from '../actions/servicesActions';

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
        yield call(updateService, payload);
        const {data}: IResponseServiceService = yield call(getService, payload)
        yield put(servicesActions.updateFromReducer(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateService({payload}:ActionTypePayload) {
      try {
        const resp: IServicesResponse = yield call(createService, payload)
        yield put({type: servicesTypes.AsyncLoad})
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