import { IfamilyResponseRR, IfamilyResponse } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { getFamilies, deleteFamily, updateFamily, createFamily } from '../../api/FamilyService';
import { familiesTypes } from '../types/types';
import { familiesActions } from '../actions/familiesActions';


interface ActionTypePayload {
    type: string, 
    payload: number
  }
  

export function* sagaFamilies() {
    // Worker Sagas
    function* asyncLoad() {
      try {
        const {data: {results}}: IfamilyResponseRR = yield call(getFamilies)
        yield put(familiesActions.load(results))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteFamily({payload}:ActionTypePayload) {
      try {
        const resp: IfamilyResponse = yield call(deleteFamily, payload)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateFamily({payload}:ActionTypePayload) {
      try {
        const {data}: IfamilyResponseRR = yield call(updateFamily, payload)
        yield put(familiesActions.updateFromReducer(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateFamily({payload}:ActionTypePayload) {
      try {
        const resp: IfamilyResponse = yield call(createFamily, payload)
        yield put({type: familiesTypes.AsyncLoad})
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(familiesTypes.AsyncLoad, asyncLoad)
    yield takeLatest(familiesTypes.Delete, sagaDeleteFamily)
    yield takeLatest(familiesTypes.Update, sagaUpdateFamily)
    yield takeLatest(familiesTypes.Create, sagaCreateFamily)
  }