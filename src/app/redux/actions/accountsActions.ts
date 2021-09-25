
import { accountTypes } from '../types/accountTypes';

export const accountsActions = {
    load: (payload: any) => ({
        type: accountTypes.accountsLoad,
        payload: {accounts: payload.results}
    }),
    active: (payload:any) => ({
      type: accountTypes.accountActive, payload: {active: payload}
    }),
    accountAddRedux: (payload:any) => ({
      type: accountTypes.accountAddRedux, payload: {accounts: payload}
    }),
    accountDeleteRedux: (payload:any) => ({
      type: accountTypes.accountDeleteRedux, payload: payload
    }),
    clear: () => ({type: accountTypes.accountsClear,}),
//     updateTableHeads: (payload: any) => ({type: accountTypes.LoadTableHeads, payload: payload}),
  }
