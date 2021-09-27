import { usersTypes, tableTypes, authTypes, familiesTypes } from '../types/types';
import { ResponseGenerator } from '../reducers/AuthRedux';
import { UserModel } from '../../modules/global/models/UserModel';

export const userActions = {
    load: (payload: any) => ({type: usersTypes.Load, payload: {users:payload}}),
    clear: () => ({type: usersTypes.Clear,}),
    SelectedUser: (payload:any) => ({type: usersTypes.SelectedUser, payload: {SelectedUser:payload}}),
    ClearSelectedUser: () => ({type: usersTypes.ClearSelectedUser}),
    updateUser: (payload:any) => ({type: usersTypes.Update, payload: {user:payload}}),
    createUser: (payload:any) => ({type: usersTypes.Create, payload: {user:payload}}),
}
export const tableActions = {
  load: (payload: any) => ({type: tableTypes.Load, payload: payload}),
  updateTableHeads: (payload: any) => ({type: tableTypes.LoadTableHeads, payload: payload}),
  clear: () => ({type: tableTypes.clearTable,}),
}
export const authActions = {
    login: (loginResponse: ResponseGenerator | undefined) => ({type: authTypes.Login, payload: loginResponse}),
    loading: () => ({type: authTypes.Loading}),
    loginError: (error: ResponseGenerator) => ({type: authTypes.LoginError, payload: error}),
    register: (accessToken: string) => ({
      type: authTypes.Register,
      payload: {accessToken},
    }),
    logout: () => ({type: authTypes.Logout}),
    requestUser: () => ({
      type: authTypes.UserRequested,
    }),
    fulfillUser: (user: UserModel) => ({type: authTypes.UserLoaded, payload: {user}}),
    setUser: (user: UserModel) => ({type: authTypes.SetUser, payload: {user}}),
  }

  export const familiesActions = {
    load: (payload: any) => ({type: familiesTypes.Load, payload: {families:payload}}),
    clear: () => ({type: familiesTypes.Clear,}),
    SelectedFamily: (payload:any) => ({type: familiesTypes.SelectedFamily, payload: {SelectedFamily:payload}}),
    ClearSelectedFamily: () => ({type: familiesTypes.ClearSelectedFamily}),
    updateFamily: (payload:any) => ({type: familiesTypes.Update, payload: {family:payload}}),
    createFamily: (payload:any) => ({type: familiesTypes.Create, payload: {family:payload}}),
}