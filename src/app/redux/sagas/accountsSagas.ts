import { call, put } from '@redux-saga/core/effects';
import { accountTypes } from '../types/accountTypes';
import { takeLatest } from 'redux-saga/effects';
import { IAccountsReduxType } from '../../modules/accounts/Interfaces/models';
import { createAccount, deleteAccount, getAccounts, updateAccount } from '../../api/AccountsService';
import { response } from '../../modules/global/models/uiModel';
import { accountsActions } from '../actions/accountsActions';
import { uiActions } from '../actions/uiActions';
import { toast } from 'react-toastify';
import { successToastOptions } from '../../modules/global/models/toastOptions';

export function* sagaAccounts() {
    // Worker Sagas
    function* sagaLoadAccounts() {
      try {
        const {data}: response = yield call(getAccounts)
        yield put(accountsActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteAccount({payload}: IAccountsReduxType) {
      try {
        const id = toast.loading("Eliminando...")
        yield call(deleteAccount, payload)
        yield put(accountsActions.deleteRedux(payload))
        toast.update(id, successToastOptions);
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateAccount({payload}:IAccountsReduxType) {
      try {
        const id = toast.loading("Actualizando...")
        const {data}: response = yield call(updateAccount, payload)
        yield put(accountsActions.updateRedux(data))
        toast.update(id, successToastOptions);
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateAccount({payload}:IAccountsReduxType) {
      try {
        yield put(uiActions.uiStartLoading())
        const id = toast.loading("Creando...")
        const resp: response = yield call(createAccount, payload)
        yield put(accountsActions.addRedux(resp.data))
        toast.update(id, successToastOptions);
        yield put(uiActions.uiFinishLoading())
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(accountTypes.get, sagaLoadAccounts)
    yield takeLatest(accountTypes.create, sagaCreateAccount)
    yield takeLatest(accountTypes.update, sagaUpdateAccount)
    yield takeLatest(accountTypes.delete, sagaDeleteAccount)
}
