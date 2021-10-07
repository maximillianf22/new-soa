import { planServicesTypes } from '../types/planServicesTypes';


export const planServicesActions = {
    load: (payload: any) => ({type: planServicesTypes.Load, payload: {planServices:payload}}),
    clear: () => ({type: planServicesTypes.Clear,}),
    SelectedService: (payload:any) => ({type: planServicesTypes.SelectedPlanService, payload: {selectedPlanService:payload}}),
    ClearSelectedService: () => ({type: planServicesTypes.ClearSelectedPlanService}),
    updatePlanService: (payload:any) => ({type: planServicesTypes.Update, payload: {SelectedPlanService:payload}}),
    updateFromReducer: (payload:any) => ({type: planServicesTypes.UpdateFromReducer, payload: {SelectedPlanService:payload}}),
    createPlanService: (payload:any) => ({type: planServicesTypes.Create, payload: {SelectedPlanService:payload}}),
}