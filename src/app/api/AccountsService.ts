import { httpClient } from '../../setup/axios/setUpAxios';
import { IAccountInfo, IAccountResponse } from '../modules/accounts/Interfaces/models';


export const ACCOUNTS_URL = `/soaang-catalogs/api/accounts/account/`;

export function createAccount(payload: any): Promise<IAccountInfo> {
  return httpClient.post(`${ACCOUNTS_URL}`, payload)
};

export function getAccounts(): Promise<IAccountResponse[]> {
  return httpClient.get(ACCOUNTS_URL)
};

export function getAccount({acId}: IAccountInfo): Promise<IAccountInfo[]> {
  return httpClient.get(`${ACCOUNTS_URL}${acId}/`)
};

export function updateAccount({account}:any): Promise<IAccountInfo[]> {
  const {id} = account;
  return httpClient.patch(`${ACCOUNTS_URL}${id}/`, account)
};

export function deleteAccount(id: any): Promise<IAccountInfo> {
  return httpClient.delete(`${ACCOUNTS_URL}${id}/`)
};
