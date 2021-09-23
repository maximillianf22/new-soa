import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest, call} from 'redux-saga/effects'
import { UserModel } from '../../modules/global/models/UserModel';
import { login, Data } from '../../api/AuthCRUD';
import { toast } from "react-toastify";
import { authTypes } from '../types/types';
import { authActions } from '../actions/actions';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

const initialAuthState: ResponseGenerator = {
  user: undefined,
  access: undefined,
  loading: false,
  error: undefined,
}

export interface IAuthState {
  user?: UserModel
  access?: any
}

export const reducer = persistReducer(
  {storage, key: 'v100-demo1-auth', whitelist: ['user', 'access']},
  (state: ResponseGenerator = initialAuthState, action: ActionWithPayload<ResponseGenerator>) => {
    switch (action.type) {
      case authTypes.Login: {
        const access = action.payload?.access
        const user = action.payload?.user
        return {...state, access, user, error: undefined}
      }

      case authTypes.Loading: {
        return {...state, loading: !state.loading}
      }

      case authTypes.LoginError: {
        toast.error("Usuario y/o contraseña incorrecta")
        const error = action.payload
        return {...state, error}
      }
      
      case authTypes.Register: {
        const access = action.payload?.access
        return {access, user: undefined}
      }
      

      case authTypes.Logout: {
        return initialAuthState
      }

      case authTypes.UserRequested: {
        return {...state, user: undefined}
      }

      case authTypes.UserLoaded: {
        const user = action.payload?.user
        return {...state, user}
      }

      case authTypes.SetUser: {
        const user = action.payload?.user
        return {...state, user}
      }

      default:
        return state
    }
  }
)

export interface ResponseGenerator{
  access?: string | undefined
  refresh?:string,
  user?:UserModel,
  loading?: boolean,
  error?: ResponseGenerator | undefined
}

export interface response {
  data?: ResponseGenerator | undefined
}

interface ActionTypePayload {
  type: string, 
  payload: Data
}
// interface IerrorResponse {
//   config: object
//   data: object
//   headers: { detail: string }
//   status: number
//   statusText: string
// }
