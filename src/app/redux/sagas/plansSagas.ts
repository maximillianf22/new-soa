import { call, put } from '@redux-saga/core/effects';
import { takeLatest } from 'redux-saga/effects';
import { IPlanResponse, IPlansReduxType } from '../../modules/plans/Interfaces/models';
import { response } from '../../modules/global/models/uiModel';
import { plansActions } from '../actions/plansActions';
import { uiActions } from '../actions/uiActions';
import { toast } from 'react-toastify';
import { errorToastOptions, successToastOptions } from '../../modules/global/models/toastOptions';
import { createPlan, deletePlan, getPlanByAcId, getPlans, updatePlan } from '../../api/PlansService';
import { planTypes } from '../types/planTypes';
import { accountsActions } from '../actions/accountsActions';
import { getAccounts } from '../../api/AccountsService';

export function* sagaPlans() {
    // Worker Sagas
    function* sagaLoadPlans() {
      try {
        const {data}: response = yield call(getPlans)
        yield put(plansActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }

    function* sagaGetPlanByAcId({payload}:IPlansReduxType) {
      try {
        const {data}: response = yield call(getPlanByAcId, payload)
        yield put(plansActions.loadPlansByAcId(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdatePlan({payload}:IPlansReduxType) {
      try {
        const id = toast.loading("Actualizando...")
        const {data}: response = yield call(updatePlan, payload)
        yield put(plansActions.updateRedux(data))
        // yield put(accountsActions.load(yield call(getAccounts)))
        toast.update(id, successToastOptions);
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreatePlan({payload}:IPlansReduxType) {
      const id = toast.loading("Creando...")      
      yield put(uiActions.uiStartLoading())
      try {
        const resp: response = yield call(createPlan, payload)
        yield put(plansActions.addRedux(resp.data))
        toast.update(id, successToastOptions);
        yield put(uiActions.uiFinishLoading())
      } catch (error: any) {
        yield put(uiActions.uiFinishLoading())
        if (error.response?.data?.plName?.length > 0) {
          errorToastOptions.render = error.response.data.plName[0]
        }
        toast.update(id, errorToastOptions);
        console.log(error.response)
      }
    }

    function* sagaDeletePlan({payload}: IPlansReduxType) {
      const id = toast.loading("Eliminando...")
      console.log('delete', payload);
      
      try {
        yield call(deletePlan, payload)
        yield put(plansActions.deleteRedux(payload))
        toast.update(id, successToastOptions);
      } catch (error: any) {
        console.log(error.response)
        toast.update(id, errorToastOptions);
      }
    }
  
    // Watcher Sagas
    yield takeLatest(planTypes.get, sagaLoadPlans)
    yield takeLatest(planTypes.create, sagaCreatePlan)
    yield takeLatest(planTypes.update, sagaUpdatePlan)
    yield takeLatest(planTypes.delete, sagaDeletePlan)
    yield takeLatest(planTypes.getByAcId, sagaGetPlanByAcId)
}
