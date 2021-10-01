import { httpClient } from '../../setup/axios/setUpAxios';
import { IServicesResponse } from '../modules/services/Interfaces/models';


export const SERVICES_URL = `soaang-catalogs/api/services/service/`;

// Servidor debe retonar IServicesResponse

export function createService({service}:any): Promise<IServicesResponse> {
  return httpClient.post(`${SERVICES_URL}`, service)
};

export function getServices(): Promise<IServicesResponse> {
  return httpClient.get(SERVICES_URL)
};

export function getService(id: number): Promise<IServicesResponse> {
  return httpClient.get(`${SERVICES_URL}/${id}/`)
};

export function updateService({service}:any): Promise<IServicesResponse> {
  console.log("ESTOY EN SERVICE",service)
  const {fmId} = service;
  return httpClient.patch(`${SERVICES_URL}${fmId}/`, service)
};

export function deleteService(id: number): Promise<IServicesResponse> {
  return httpClient.delete(`${SERVICES_URL}${id}/`)
};