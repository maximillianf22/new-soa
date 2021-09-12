import axios from 'axios'
import { UserModel } from '../../../auth/models/UserModel';

const API_URL = process.env.REACT_APP_API_URL 

export const GET_USERS_URL = `${API_URL}/soaang-users/api/users/`;

// Servidor debe retonar UserModel
export function getUsers(): Promise<UserModel[]> {
  return axios.get(GET_USERS_URL)
}