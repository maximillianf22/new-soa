import { call, put } from '@redux-saga/core/effects';
import { accountTypes } from '../types/accountTypes';
import { takeLatest } from 'redux-saga/effects';
import { IAccountsReduxType } from '../../modules/accounts/Interfaces/models';
import { createAccount, deleteAccount, getAccounts, updateAccount } from '../../api/AccountsService';
import { response } from '../../modules/global/models/uiModel';
import { accountsActions } from '../actions/accountsActions';



export function* sagaAccounts() {
    // Worker Sagas
    function* sagaLoadAccounts() {
        console.log('entro');
      try {
        const {data}: response = yield call(getAccounts)
        console.log(data);
        // yield put(accountsActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteAccount({payload}: IAccountsReduxType) {
      try {
        const resp: response = yield call(deleteAccount, payload[0])
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateAccount({payload}:IAccountsReduxType) {
      try {
        const resp: response = yield call(updateAccount, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateAccount({payload}:IAccountsReduxType) {
      try {
        const resp: response = yield call(createAccount, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(accountTypes.accountsLoad, sagaLoadAccounts)
    yield takeLatest(accountTypes.accountCreate, sagaCreateAccount)
    yield takeLatest(accountTypes.accountUpdate, sagaUpdateAccount)
    yield takeLatest(accountTypes.accountDelete, sagaDeleteAccount)
}
