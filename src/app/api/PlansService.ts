import { httpClient } from '../../setup/axios/setUpAxios';
import { IPlanResponse } from '../modules/plans/Interfaces/models';


export const PLANS_URL = `/soaang-catalogs/api/plans/plan/`;

export function createPlan(payload: any): Promise<IPlanResponse> {
  const formData = new FormData()
  formData.append('plName', payload.plName)
  formData.append('plIsVip', payload.plIsVip)
  formData.append('plStatus', payload.plStatus)
  formData.append('plStartDate', payload.plStartDate)
  formData.append('plDueDate', payload.plDueDate)
  formData.append('plDaysToDue', payload.plDaysToDue)
  formData.append('plEventsShared', payload.plEventsShared)
  formData.append('plnumEventsShared', payload.plnumEventsShared)
  if (payload.plFileUploadPath !== undefined && payload.plFileUploadPath !== null) {
    formData.append('plFileUploadPath', payload.plFileUploadPath)
  }
  formData.append('acId', payload.acId)
  return httpClient.post(`${PLANS_URL}`, formData)
};

export function getPlans(): Promise<IPlanResponse[]> {
  return httpClient.get(PLANS_URL)
};

export function getPlan({plId}: IPlanResponse): Promise<IPlanResponse[]> {
  return httpClient.get(`${PLANS_URL}${plId}/`)
};

export function getPlanByAcId({acId}: any): Promise<IPlanResponse[]> {
  return httpClient.get(`${PLANS_URL}?acId=${acId}`)
};

export function updatePlan(payload:any): Promise<IPlanResponse[]> {
  const formData = new FormData()
  formData.append('plName', payload.plName)
  formData.append('plIsVip', payload.plIsVip)
  formData.append('plStatus', payload.plStatus)
  formData.append('plStartDate', payload.plStartDate)
  formData.append('plDueDate', payload.plDueDate)
  formData.append('plDaysToDue', payload.plDaysToDue)
  formData.append('plEventsShared', payload.plEventsShared)
  formData.append('plnumEventsShared', payload.plnumEventsShared)
  if (payload.plFileUploadPath !== undefined && payload.plFileUploadPath !== null) {
    formData.append('plFileUploadPath', payload.plFileUploadPath)
  }
  formData.append('acId', payload.acId)
  return httpClient.patch(`${PLANS_URL}${payload.plId}/`, formData)
};

export function deletePlan(id: any): Promise<IPlanResponse> {
  return httpClient.delete(`${PLANS_URL}${id}/`)
};
