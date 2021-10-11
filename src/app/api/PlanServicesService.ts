import { httpClient } from '../../setup/axios/setUpAxios';
import { IPlanServicesResponse } from '../modules/plan_services/Interfaces/models';


export const PLAN_SERVICES_URL = `soaang-catalogs/api/services/plan-service/`;

// Servidor debe retonar IPlanServicesResponse

export function createPlanService(planService:any): Promise<IPlanServicesResponse> {
  return httpClient.post(`${PLAN_SERVICES_URL}`, planService)
};

export function getPlanServices(): Promise<IPlanServicesResponse> {
  return httpClient.get(PLAN_SERVICES_URL)
};

export function getPlanService(selectedPlanService:any): Promise<IPlanServicesResponse> {
  const {spId} = selectedPlanService;
  return httpClient.get(`${PLAN_SERVICES_URL}${spId}/`)
};

export function updatePlanService(selectedPlanService:any): Promise<IPlanServicesResponse> {
  const {spId} = selectedPlanService;
  return httpClient.patch(`${PLAN_SERVICES_URL}${spId}/`, selectedPlanService)
};

export function deletePlanService(id: number): Promise<IPlanServicesResponse> {
  return httpClient.delete(`${PLAN_SERVICES_URL}${id}/`)
};