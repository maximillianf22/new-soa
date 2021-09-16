import { UserModel } from '../../global/models/UserModel';
import { httpClient } from '../../../../setup/axios/setUpAxios';


export const GET_USERS_URL = `/soaang-users/api/users/`;

// Servidor debe retonar UserModel
export function getUsers(): Promise<UserModel[]> {
  return httpClient.get(GET_USERS_URL)
};

export function getUser(id: number): Promise<UserModel[]> {
  return httpClient.get(`${GET_USERS_URL}/id`)
};

export function deleteUser(id: number): Promise<UserModel[]> {
  return httpClient.delete(`${GET_USERS_URL}/id`)
};

export function updateUser(id: number, user: UserModel): Promise<UserModel[]> {
  return httpClient.put(`${GET_USERS_URL}/id`, { user })
};