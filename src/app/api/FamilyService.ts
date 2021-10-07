import { httpClient } from '../../setup/axios/setUpAxios';
import { IfamilyResponse } from '../modules/families/Interfaces/models';


export const FAMILIES_URL = `soaang-catalogs/api/families/family/`;

// Servidor debe retonar IfamilyResponse

export function createFamily(family:any): Promise<IfamilyResponse> {
  return httpClient.post(`${FAMILIES_URL}`, family)
};

export function getFamilies(): Promise<IfamilyResponse> {
  return httpClient.get(FAMILIES_URL)
};

export function getFamily(id: number): Promise<IfamilyResponse> {
  return httpClient.get(`${FAMILIES_URL}id`)
};

export function updateFamily(family:any): Promise<IfamilyResponse> {
  const {fmId} = family;
  return httpClient.patch(`${FAMILIES_URL}${fmId}/`, family)
};

export function deleteFamily(id: number): Promise<IfamilyResponse> {
  return httpClient.delete(`${FAMILIES_URL}${id}/`)
};