import {AuthModel} from '../models/AuthModel'
import { UserModel } from '../../global/models/UserModel';
import { httpClient } from '../../../../setup/axios/setUpAxios';

import httpClient from '../../../../api/httpClient'
// import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL 

export interface Data {
  username: string,
  password: string
}

export interface NewPasswordModel {
  new_password1: string,
  new_password2: string,
  uid: string,
  token: string
}


// Servidor debe retonar UserModel
// export function login(data:Data): Promise<UserModel> {
//   const url = API_URL+'/soaang-users/api/token/'
//   return axios.post(url, data)
// }

export function login(data:Data): Promise<UserModel> {
  const url = '/soaang-users/api/token/'
  return httpClient.post(url, data)
}

// Servidor debe retonar AuthModel
export function register(email: string, firstname: string, lastname: string, password: string) {
  const url = '/auth/register/'
  return httpClient.post<AuthModel>(url, {
    email,
    firstname,
    lastname,
    password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function forgotPassword(email: string) {
  const url = '/soaang-users/api/password-reset/'
  return httpClient.post(url, {email})
}

export function newPassword(data: NewPasswordModel) {
  const url = `/soaang-users/api/password-reset-confirm/${data.uid}/${data.token}/`
  return httpClient.post(url, data)
}