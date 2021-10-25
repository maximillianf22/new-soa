import { servicesTypes } from '../types/types';
export const servicesActions = {
    load: (payload: any) => ({type: servicesTypes.Load, payload: {services:payload}}),
    clear: () => ({type: servicesTypes.Clear,}),
    SelectedService: (payload:any) => ({type: servicesTypes.selectedService, payload: {selectedService:payload}}),
    ClearSelectedService: () => ({type: servicesTypes.ClearSelectedService}),
    updateService: (payload:any) => ({type: servicesTypes.Update, payload: {selectedService:payload}}),
    updateFromReducer: (payload:any) => ({type: servicesTypes.UpdateFromReducer, payload: {selectedService:payload}}),
    createService: (payload:any) => ({type: servicesTypes.Create, payload: {selectedService:payload}}),
  }