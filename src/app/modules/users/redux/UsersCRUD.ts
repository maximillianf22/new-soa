import { UserModel } from '../../global/models/UserModel';
import { httpClient } from '../../../../setup/axios/setUpAxios';


export const GET_USERS_URL = `/soaang-users/api/users/`;

// Servidor debe retonar UserModel
export function getUsers(): Promise<UserModel[]> {
  return httpClient.get(GET_USERS_URL)
}