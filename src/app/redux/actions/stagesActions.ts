import { stagesTypes } from '../types/stagesTypes';


export const stagesActions = {
    load: (payload: any) => ({type: stagesTypes.Load, payload: {stages:payload}}),
    loadPlanServiceStages: (payload: any) => ({type: stagesTypes.LoadPlanServiceStages, payload: {planServiceStages:payload}}),
    getPlanServiceStages: (payload: any) => ({type: stagesTypes.getPlanServiceStages, payload}),
    clear: () => ({type: stagesTypes.Clear,}),
    SelectedStage: (payload:any) => ({type: stagesTypes.SelectedStage, payload: {selectedStage:payload}}),
    ClearSelectedService: () => ({type: stagesTypes.ClearSelectedStage}),
    updateStage: (payload:any) => ({type: stagesTypes.Update, payload: {SelectedStage:payload}}),
    updateFromReducer: (payload:any) => ({type: stagesTypes.UpdateFromReducer, payload: {SelectedStage:payload}}),
    createStage: (payload:any) => ({type: stagesTypes.Create, payload: {SelectedStage:payload}}),
}