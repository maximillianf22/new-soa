import axios from 'axios'
import {AuthModel} from '../models/AuthModel'

const API_URL = process.env.REACT_APP_API_URL 

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`
export const LOGIN_URL = `${API_URL}/soaang-users/api/token/`
export const REGISTER_URL = `${API_URL}/auth/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`

// Server should return AuthModel
export async function login() {
  const data = {
    "username":"admin",
    "password":"admin"
}
  return axios.post("http://192.168.4.136:8080/soaang-users/api/token/", data)
    .then(res => res.data)
    .catch(e=>console.log(e))
}

// Server should return AuthModel
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

