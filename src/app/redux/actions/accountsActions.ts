
import { accountTypes } from '../types/accountTypes';

export const accountsActions = {
    load: (payload: any) => ({
        type: accountTypes.load,
        payload: {accounts: payload.results}
    }),
    selectedAccount: (payload:any) => ({
      type: accountTypes.selectedAccount, payload
    }),
    addRedux: (payload:any) => ({
      type: accountTypes.addRedux, payload: {accounts: payload}
    }),
    deleteRedux: (payload:any) => ({
      type: accountTypes.deleteRedux, payload: payload
    }),
    updateRedux: (payload:any) => ({
      type: accountTypes.updateRedux, payload: payload
    }),
    clear: () => ({type: accountTypes.clear}),
    resetSelectedAccount: () => ({type: accountTypes.resetSelectedAccount})
//     updateTableHeads: (payload: any) => ({type: accountTypes.LoadTableHeads, payload: payload}),
  }
