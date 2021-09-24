import { httpClient } from '../../setup/axios/setUpAxios';
import { IAccountInfo, IAccountResponse } from '../modules/accounts/Interfaces/models';


export const GET_ACCOUNTS_URL = `/soaang-catalogs/api/accounts/account/`;

export function createAccount({account}:any): Promise<IAccountInfo[]> {
  return httpClient.post(`${GET_ACCOUNTS_URL}`, account)
};

export function getAccounts(): Promise<IAccountResponse[]> {
  return httpClient.get(GET_ACCOUNTS_URL)
};

export function getAccount({acId}: IAccountInfo): Promise<IAccountInfo[]> {
  return httpClient.get(`${GET_ACCOUNTS_URL}/${acId}/`)
};

export function updateAccount({account}:any): Promise<IAccountInfo[]> {
  const {id} = account;
  console.log(account)
  return httpClient.patch(`${GET_ACCOUNTS_URL}${id}/`, account)
};

export function deleteAccount({acId}: IAccountInfo): Promise<IAccountInfo[]> {
  return httpClient.delete(`${GET_ACCOUNTS_URL}${acId}/`)
};
