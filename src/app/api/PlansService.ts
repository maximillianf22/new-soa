import { httpClient } from '../../setup/axios/setUpAxios';
import { IPlanResponse } from '../modules/plans/Interfaces/models';


export const PLANS_URL = `/soaang-catalogs/api/plans/plan/`;

export function createPlan(payload: any): Promise<IPlanResponse> {
  return httpClient.post(`${PLANS_URL}`, payload)
};

export function getPlans(): Promise<IPlanResponse[]> {
  return httpClient.get(PLANS_URL)
};

export function getPlan({plId}: IPlanResponse): Promise<IPlanResponse[]> {
  return httpClient.get(`${PLANS_URL}${plId}/`)
};

export function updatePlan(plan:any): Promise<IPlanResponse[]> {
  const {plId} = plan;
  return httpClient.patch(`${PLANS_URL}${plId}/`, plan)
};

export function deletePlan(plan: any): Promise<IPlanResponse> {
  return httpClient.delete(`${PLANS_URL}${plan.plId}/`)
};
