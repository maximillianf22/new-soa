
import { planTypes } from '../types/planTypes';

export const plansActions = {
    load: (payload: any) => ({
        type: planTypes.load,
        payload: {plans: payload.results}
    }),
    loadPlansByAcId: (payload: any) => ({
        type: planTypes.loadPlansByAcId,
        payload: {plans: payload.results}
    }),
    selectedPlan: (payload:any) => ({
      type: planTypes.selectedPlan, payload
    }),
    addRedux: (payload:any) => ({
      type: planTypes.addRedux, payload: {plans: payload}
    }),
    deleteRedux: (payload:any) => ({
      type: planTypes.deleteRedux, payload: payload
    }),
    updateRedux: (payload:any) => ({
      type: planTypes.updateRedux, payload: payload
    }),
    setAllReduxPlans: (payload:any) => ({
      type: planTypes.setAllReduxPlans, payload: payload
    }),
    clear: () => ({type: planTypes.clear,}),
//     updateTableHeads: (payload: any) => ({type: planTypes.LoadTableHeads, payload: payload}),
  }
