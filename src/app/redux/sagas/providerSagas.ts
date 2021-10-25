import { call, put } from '@redux-saga/core/effects';
import { accountTypes } from '../types/accountTypes';
import { takeLatest } from 'redux-saga/effects';
import { IAccountsReduxType, IAccountsReduxType2 } from '../../modules/accounts/Interfaces/models';
import { response } from '../../modules/global/models/uiModel';
import { uiActions } from '../actions/uiActions';
import { toast } from 'react-toastify';
import { successToastOptions } from '../../modules/global/models/toastOptions';
import { getProviders } from '../../api/ProvidersService';
import { providerActions } from '../actions/providersActions';
import { providerTypes } from '../types/providerTypes';

export function* sagaProviders() {
    // Worker Sagas
    function* sagaLoadProviders() {
      try {
        const {data}: response = yield call(getProviders)
        yield put(providerActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    // function* sagaDeleteAccount({payload}: IAccountsReduxType2) {
    //   const id = toast.loading("Eliminando...")
    //   try {
    //     yield call(deleteAccount, payload.acId)
    //     yield put(accountsActions.deleteRedux(payload))
    //     toast.update(id, successToastOptions);
    //   } catch (error) {
    //     console.log(error)
    //     toast.update(id, successToastOptions);
    //   }
    // }
  
    // function* sagaUpdateAccount({payload}:IAccountsReduxType) {
    //   const id = toast.loading("Actualizando...")
    //   try {
    //     const {data}: response = yield call(updateAccount, payload)
    //     yield put(accountsActions.updateRedux(data))
    //     toast.update(id, successToastOptions);
    //   } catch (error) {
    //     toast.update(id, successToastOptions);
    //     console.log(error)
    //   }
    // }
  
    // function* sagaCreateAccount({payload}:IAccountsReduxType) {
    //   try {
    //     yield put(uiActions.uiStartLoading())
    //     const id = toast.loading("Creando...")
    //     const resp: response = yield call(createAccount, payload)
    //     yield put(accountsActions.addRedux(resp.data))
    //     toast.update(id, successToastOptions);
    //     yield put(uiActions.uiFinishLoading())
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  
    // Watcher Sagas
    yield takeLatest(providerTypes.get, sagaLoadProviders)
    // yield takeLatest(providerTypes.create, sagaCreateAccount)
    // yield takeLatest(providerTypes.update, sagaUpdateAccount)
    // yield takeLatest(providerTypes.delete, sagaDeleteAccount)
}
