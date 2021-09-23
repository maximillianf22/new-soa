import { response } from '../reducers/AuthRedux';
import { getUsers } from '../../api/TableCRUD';
import { call, put } from '@redux-saga/core/effects';
import { userActions, authActions } from '../actions/actions';
import { deleteUser, updateUser, createUser } from '../../api/UsersCRUD';
import { usersTypes, authTypes } from '../types/types';
import { takeLatest } from 'redux-saga/effects';
import { login, Data } from '../../api/AuthCRUD';


interface ActionTypePayload {
    type: string, 
    payload: number
  }



export function* sagaUsers() {
    // Worker Sagas
    function* asyncLoad() {
      try {
        const {data}: response = yield call(getUsers)
        yield put(userActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteUser({payload}:ActionTypePayload) {
      try {
        const resp: response = yield call(deleteUser, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateUser({payload}:ActionTypePayload) {
      try {
        const resp: response = yield call(updateUser, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateUser({payload}:ActionTypePayload) {
      try {
        const resp: response = yield call(createUser, payload)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }
  
    // Watcher Sagas
    yield takeLatest(usersTypes.AsyncLoad, asyncLoad)
    yield takeLatest(usersTypes.Delete, sagaDeleteUser)
    yield takeLatest(usersTypes.Update, sagaUpdateUser)
    yield takeLatest(usersTypes.Create, sagaCreateUser)
  }

  export function* tableSaga() {
    // Worker Sagas
    // function* asyncLoad() {
    //   try {
    //     const {data}: response = yield call(getUsers)
    //     yield put(tableActions.load({
    //       tableHeader: {
    //         title: 'Usuario',
    //         count: 234,
    //         btnLink: '/usuarios/crear',
    //         btnModal: ''
    //       },
    //       tableBody: {
    //           tableHeads: ['Nombre','Correo','Usuario','Rol'],
    //           tableContent: data
    //       }
    //   }))
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  
    // Watcher Sagas
    // yield takeLatest(tableTypes.asyncLoad, asyncLoad) 
  }

  interface ActionTypePayloadAuth {
    type: string, 
    payload: Data
  }

  export function* authSaga() {
    // Worker Sagas
    function* loginSaga({payload}:ActionTypePayloadAuth) {
      try {
        yield put(authActions.loading());
        const {data}:response = yield call(login, payload);
        yield put(authActions.login(data))
      } catch (error:any) {
        yield put(authActions.loginError(error.response.data.detail))
      } finally {
        yield put(authActions.loading());
      }
    };
  
    // Watcher Sagas
    yield takeLatest(authTypes.asyncLogin, loginSaga)
    
    // yield takeLatest(authTypes.Login, function* loginSaga() {
    //   yield put(authActions.requestUser())
    // })
  
    // yield takeLatest(authTypes.Register, function* registerSaga() {
    //   yield put(authActions.requestUser())
    // })
  
    // yield takeLatest(authTypes.UserRequested, function* userRequested() {
    //   // const {data: user} = yield getUserByToken()
    //   // yield put(authActions.fulfillUser(user))
    // })
  }