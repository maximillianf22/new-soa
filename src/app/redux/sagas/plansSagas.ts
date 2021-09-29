import { call, put } from '@redux-saga/core/effects';
import { accountTypes } from '../types/accountTypes';
import { takeLatest } from 'redux-saga/effects';
import { IPlansReduxType } from '../../modules/plans/Interfaces/models';
import { response } from '../../modules/global/models/uiModel';
import { accountsActions } from '../actions/accountsActions';
import { uiActions } from '../actions/uiActions';
import { toast } from 'react-toastify';
import { successToastOptions } from '../../modules/global/models/toastOptions';
import { createPlan, deletePlan, getPlans, updatePlan } from '../../api/PlansService';

export function* sagaPlans() {
    // Worker Sagas
    function* sagaLoadPlans() {
      try {
        const {data}: response = yield call(getPlans)
        yield put(accountsActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeletePlan({payload}: IPlansReduxType) {
      try {
        const id = toast.loading("Eliminando...")
        yield call(deletePlan, payload)
        yield put(accountsActions.deleteRedux(payload))
        toast.update(id, successToastOptions);
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdatePlan({payload}:IPlansReduxType) {
      try {
        const id = toast.loading("Actualizando...")
        const {data}: response = yield call(updatePlan, payload)
        yield put(accountsActions.updateRedux(data))
        toast.update(id, successToastOptions);
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreatePlan({payload}:IPlansReduxType) {
      try {
        yield put(uiActions.uiStartLoading())
        const id = toast.loading("Creando...")
        const resp: response = yield call(createPlan, payload)
        yield put(accountsActions.addRedux(resp.data))
        toast.update(id, successToastOptions);
        yield put(uiActions.uiFinishLoading())
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(accountTypes.get, sagaLoadPlans)
    yield takeLatest(accountTypes.create, sagaCreatePlan)
    yield takeLatest(accountTypes.update, sagaUpdatePlan)
    yield takeLatest(accountTypes.delete, sagaDeletePlan)
}
