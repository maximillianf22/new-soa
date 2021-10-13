import { httpClient } from '../../setup/axios/setUpAxios';
import { IServicesResponse } from '../modules/services/Interfaces/models';


export const STAGES_URL = `soaang-configurations/api/stages/`;

// Servidor debe retonar IServicesResponse

export function createStage(payload:any): Promise<IServicesResponse> {
  return httpClient.post(`${STAGES_URL}`, payload)
};

export function getStages(): Promise<IServicesResponse> {
  return httpClient.get(STAGES_URL)
};

export function getStage(payload:any): Promise<IServicesResponse> {
  const {sid} = payload;
  return httpClient.get(`${STAGES_URL}${sid}/`)
};

export function updateStage(payload:any): Promise<IServicesResponse> {
  const {sid} = payload;
  return httpClient.patch(`${STAGES_URL}${sid}/`, payload)
};

export function deleteStage(id: number): Promise<IServicesResponse> {
  return httpClient.delete(`${STAGES_URL}${id}/`)
};