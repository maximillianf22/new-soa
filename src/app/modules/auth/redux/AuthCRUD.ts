import axios from 'axios'
import {AuthModel} from '../models/AuthModel'
import { UserModel } from '../models/UserModel';

const API_URL = process.env.REACT_APP_API_URL 

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`
export const LOGIN_URL = `${API_URL}/soaang-users/api/token/`
export const REGISTER_URL = `${API_URL}/auth/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`

export interface Data {
  username: string,
  password: string
}


// Servidor debe retonar UserModel
export function login(data:Data): Promise<UserModel> {
  return axios.post(LOGIN_URL, data)
}

// Servidor debe retonar AuthModel
export function register(email: string, firstname: string, lastname: string, password: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    firstname,
    lastname,
    password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {email})
}