import { httpClient } from '../../setup/axios/setUpAxios';
import { IQuestionsResponse } from '../modules/plan_services/Interfaces/models';


export const QUESTIONS_URL = `soaang-catalogs/api/services/metadata-service`;

// Servidor debe retonar IQuestionsResponse


export function createQuestion(payload:any): Promise<IQuestionsResponse> {
  const formData = new FormData()
  formData.append('smName', payload.smName)
  formData.append('smFieldType', payload.smFieldType)
  formData.append('smPlatformType', payload.smPlatformType)
  formData.append('smServiceId', payload.smServiceId)
  formData.append('smIsRequired', payload.smIsRequired)
  formData.append('metadata_service_options', payload.metadata_service_options)
  
  return httpClient.post(`${QUESTIONS_URL}-create`, payload)
};

export function getQuestions(payload:any): Promise<IQuestionsResponse> {
  return httpClient.get(`${QUESTIONS_URL}/${payload}`)
};

export function getQuestion(selectedQuestion:any): Promise<IQuestionsResponse> {
  const {spId} = selectedQuestion;
  return httpClient.get(`${QUESTIONS_URL}/${spId}/`)
};

export function updateQuestion(payload:any): Promise<IQuestionsResponse> {
  return httpClient.patch(`${QUESTIONS_URL}/${payload.spId}/, payload`)
};

export function deleteQuestion(id: number): Promise<IQuestionsResponse> {
  return httpClient.delete(`${QUESTIONS_URL}/${id}/`)
};