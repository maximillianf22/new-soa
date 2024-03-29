import { httpClient } from '../../setup/axios/setUpAxios';
import { IPlanServicesResponse } from '../modules/plan_services/Interfaces/models';


export const PLAN_SERVICES_URL = `soaang-catalogs/api/services/plan-service/`;
export const STAGE_VALIDATION_URL = `soaang-catalogs/api/service-stages-validations/`;
export const STAGE_SAVE = `soaang-catalogs/api/service-stages/`;

// Servidor debe retonar IPlanServicesResponse

export function stagesSave(payload:any): Promise<any> {
  // payload.sid = payload.items[0].sId;
  console.log("en el service savestages",payload)
  return httpClient.post(`${STAGE_SAVE}`, payload)
}

export function stagesValidation(payload:any): Promise<any> {
  // payload.items.map( (s:any, i:number) => {
  //   delete s.className;
  //   delete s.description;
  //   delete s.laneId;
  //   delete s.style;
  //   delete s.title;
  // })
  return httpClient.post(`${STAGE_VALIDATION_URL}`, payload)
}

export function createPlanService(payload:any): Promise<IPlanServicesResponse> {
  
  const formData = new FormData()
  formData.append('spId', payload.spId)
  formData.append('spNumberOfEvents', payload.spNumberOfEvents)
  formData.append('spCost', payload.spCost)
  formData.append('spVehicle', payload.spVehicle)
  formData.append('spDataVehicular', payload.spDataVehicular)
  formData.append('spServApp', payload.spServApp)
  formData.append('spThreePoints', payload.spThreePoints)
  formData.append('spVideocall', payload.spVideocall)
  formData.append('spGroupService', payload.spGroupService)
  formData.append('spGroupEqualService', payload.spGroupEqualService)
  formData.append('spReAsignProvider', payload.spReAsignProvider)
  formData.append('spLabelForUser', payload.spLabelForUser)
  formData.append('spFrecuency', payload.spFrecuency)
  formData.append('spConditionsDescription', payload.spConditionsDescription)
  formData.append('servId', payload.servId)
  formData.append('plId', payload.plId)
  formData.append('pId', payload.pId)

  if (payload.spLogoUploadPath !== undefined) {
    formData.append('spLogoUploadPath', payload.spLogoUploadPath)
  }
  return httpClient.post(`${PLAN_SERVICES_URL}`, formData)
};

export function getPlanServices(): Promise<IPlanServicesResponse> {
  return httpClient.get(PLAN_SERVICES_URL)
};

export function getPlanService(selectedPlanService:any): Promise<IPlanServicesResponse> {
  const {spId} = selectedPlanService;
  return httpClient.get(`${PLAN_SERVICES_URL}${spId}/`)
};

export function updatePlanService(payload:any): Promise<IPlanServicesResponse> {

  
  const formData = new FormData()
  formData.append('spId', payload.spId)
  formData.append('spNumberOfEvents', payload.spNumberOfEvents)
  formData.append('spCost', payload.spCost)
  formData.append('spVehicle', payload.spVehicle)
  formData.append('spDataVehicular', payload.spDataVehicular)
  formData.append('spServApp', payload.spServApp)
  formData.append('spThreePoints', payload.spThreePoints)
  formData.append('spVideocall', payload.spVideocall)
  formData.append('spGroupService', payload.spGroupService)
  formData.append('spGroupEqualService', payload.spGroupEqualService)
  formData.append('spReAsignProvider', payload.spReAsignProvider)
  formData.append('spLabelForUser', payload.spLabelForUser)
  formData.append('spFrecuency', payload.spFrecuency)
  formData.append('spConditionsDescription', payload.spConditionsDescription)
  formData.append('servId', payload.servId)
  formData.append('plId', payload.plId)
  formData.append('pId', payload.pId)

  if (payload.spLogoUploadPath !== undefined) {
    formData.append('spLogoUploadPath', payload.spLogoUploadPath)
  }
  return httpClient.patch(`${PLAN_SERVICES_URL}${payload.spId}/`, formData)
};

export function deletePlanService(id: number): Promise<IPlanServicesResponse> {
  return httpClient.delete(`${PLAN_SERVICES_URL}${id}/`)
};