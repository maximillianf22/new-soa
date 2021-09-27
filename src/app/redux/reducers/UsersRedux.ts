import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { UserModel } from '../../modules/global/models/UserModel';
import { usersTypes } from '../types/types';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

const initialUsersState: IUserState = {
    users: [],
    SelectedUser: {    
      first_name: '',
      id: 0,
      last_name: '',
      email: '',
      username: '',
      password_change: null,
      clients: [{}],
    }
}

interface IUserState {
    users: UserModel[] | undefined
    SelectedUser: UserModel | undefined
}

export const usersReducer = persistReducer(
  {storage, key: 'v100-demo1-users', whitelist: ['users', 'SelectedUser']},
  (state: IUserState = initialUsersState, action: ActionWithPayload<IUserState>) => {
    switch (action.type) {
      case usersTypes.Load: { 
        return {...state, users: action.payload?.users}
      }
      case usersTypes.Clear: {
        return {...initialUsersState}
      }
      case usersTypes.SelectedUser: {
        return {...state, SelectedUser: action.payload?.SelectedUser}
      }
      case usersTypes.ClearSelectedUser: {
        return {...state, SelectedUser: initialUsersState.SelectedUser}
      }

      default:
        return state
    }
  }
)