import { UserModel } from '../modules/global/models/UserModel';
import { httpClient } from '../../setup/axios/setUpAxios';


export const GET_USERS_URL = `/soaang-users/api/users/`;

// Servidor debe retonar UserModel

export function createUser({user}:any): Promise<UserModel[]> {
  return httpClient.post(`${GET_USERS_URL}`, user)
};

export function getUsers(): Promise<UserModel[]> {
  return httpClient.get(GET_USERS_URL)
};

export function getUser(id: number): Promise<UserModel[]> {
  return httpClient.get(`${GET_USERS_URL}id`)
};

export function updateUser({user}:any): Promise<UserModel[]> {
  const {id} = user;
  console.log(user)
  return httpClient.patch(`${GET_USERS_URL}${id}/`, user)
};

export function deleteUser(id: number): Promise<UserModel[]> {
  return httpClient.delete(`${GET_USERS_URL}${id}/`)
};