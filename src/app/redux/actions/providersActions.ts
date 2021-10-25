import { providerTypes } from "../types/providerTypes";

export const providerActions = {
    load: (payload: any) => ({
        type: providerTypes.load,
        payload: {providers: payload.results}
    }),
    selectedProvider: (payload:any) => ({
      type: providerTypes.selectedProvider, payload
    }),
    addRedux: (payload:any) => ({
      type: providerTypes.addRedux, payload: {providers: payload}
    }),
    deleteRedux: (payload:any) => ({
      type: providerTypes.deleteRedux, payload: payload
    }),
    updateRedux: (payload:any) => ({
      type: providerTypes.updateRedux, payload: payload
    }),
    clear: () => ({type: providerTypes.clear}),
    resetSelectedProvider: () => ({type: providerTypes.resetSelectedProvider})
//     updateTableHeads: (payload: any) => ({type: providerTypes.LoadTableHeads, payload: payload}),
  }
