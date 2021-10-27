import { familiesTypes } from '../types/types';

export const familiesActions = {
    load: (payload: any) => ({type: familiesTypes.Load, payload: {families:payload}}),
    clear: () => ({type: familiesTypes.Clear,}),
    SelectedFamily: (payload:any) => ({type: familiesTypes.SelectedFamily, payload: {SelectedFamily:payload}}),
    ClearSelectedFamily: () => ({type: familiesTypes.ClearSelectedFamily}),
    updateFamily: (payload:any) => ({type: familiesTypes.Update, payload: {family:payload}}),
    updateFromReducer: (payload:any) => ({type: familiesTypes.UpdateFromReducer, payload: {SelectedFamily:payload}}),
    createFamily: (payload:any) => ({type: familiesTypes.Create, payload: {family:payload}}),
  }