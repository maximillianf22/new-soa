import { httpClient } from '../../setup/axios/setUpAxios';
import { IQuestionsResponse } from '../modules/plan_services/Interfaces/models';


export const QUESTIONS_URL = `soaang-catalogs/api/services/metadata-service`;
export const CREATE_OPTION_URL = `soaang-catalogs/api/services/metadata-options-service-create/`;
export const DELETE_OPTION_URL = `soaang-catalogs/api/services/metadata-service-options-delete/`;
// Servidor debe retonar IQuestionsResponse


export function createQuestion(payload:any): Promise<IQuestionsResponse> {
  const formData = new FormData()
  formData.append('s_metadata_service', payload)
  return httpClient.post(`${QUESTIONS_URL}-create/`, payload)
};

export function createQuestionOption(payload:any): Promise<IQuestionsResponse> {
  return httpClient.post(`${CREATE_OPTION_URL}`, payload)
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

export function deleteOption(payload: any): Promise<IQuestionsResponse> {
  return httpClient.post(`${DELETE_OPTION_URL}`,payload)
};

export function deleteQuestionOption(payload: any): Promise<IQuestionsResponse> {
  return httpClient.delete(`${DELETE_OPTION_URL}`,payload)
};