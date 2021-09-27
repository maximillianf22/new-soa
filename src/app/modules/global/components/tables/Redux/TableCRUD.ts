import { UserModel } from '../../../models/UserModel';
import { httpClient } from '../../../../../../setup/axios/setUpAxios';

const API_URL = process.env.REACT_APP_API_URL 

export const GET_USERS_URL = `/soaang-users/api/users/`;

// Servidor debe retonar UserModel
export function getUsers(): Promise<UserModel[]> {
  return httpClient.get(GET_USERS_URL)
}