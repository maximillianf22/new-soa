import { httpClient } from '../../setup/axios/setUpAxios';
import { IProviderInfo, IProviderResponse } from '../modules/providers/Interfaces/models';


export const PROVIDERS_URL = `/soaang-catalogs/api/providers/provider/`;

export function createProvider(payload: any): Promise<IProviderInfo> {
  return httpClient.post(`${PROVIDERS_URL}`, payload)
};

export function getProviders(): Promise<IProviderResponse[]> {
  return httpClient.get(PROVIDERS_URL)
};

export function getProvider({provId}: IProviderInfo): Promise<IProviderInfo[]> {
  return httpClient.get(`${PROVIDERS_URL}${provId}/`)
};

export function updateProvider(provider:any): Promise<IProviderInfo[]> {
  const {provId} = provider;
  return httpClient.patch(`${PROVIDERS_URL}${provId}/`, provider)
};

export function deleteProvider(id: any): Promise<IProviderInfo> {
  return httpClient.delete(`${PROVIDERS_URL}${id}/`)
};