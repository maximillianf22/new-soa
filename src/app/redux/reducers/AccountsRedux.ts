import { IAccountInfo, IAccountInitialValues } from '../../modules/accounts/Interfaces/models';
import { accountTypes } from '../types/accountTypes';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ActionWithPayload } from '../../modules/global/models/uiModel';


const initialState: IAccountInitialValues = {
    accounts: [],
    selectedAccount: {
        acId: 0,
        acName: ''
    },
    acId: 0
}

export const accountsReducer = persistReducer(
    {storage, key: 'accounts', whitelist: ['accounts', 'selectedAccount']},
    (state: any = initialState, action: ActionWithPayload<IAccountInitialValues>) => {
        switch (action.type) {
        
            case accountTypes.selectedAccount:
                return {
                    ...state,
                    selectedAccount: action.payload
                }

            case  accountTypes.addRedux:
                return {
                    ...state,
                    accounts: [...state.accounts, action.payload?.accounts]
                }

            case accountTypes.load:
                return {
                    accounts: action.payload?.accounts,
                    selectedAccount: {}
                }
        
            case accountTypes.updateRedux:
                return {
                    ...state,
                    accounts: state.accounts.map(
                        (account: IAccountInfo) => account.acId === action.payload?.acId        
                            ? action.payload
                            : account
                    )
                }

            case accountTypes.deleteRedux:                
                return {
                    ...state,
                    accounts: state.accounts.filter( (account: IAccountInfo) => account.acId !== action.payload?.acId )
                } 

            case accountTypes.clear:
                return {
                    initialState
                }

            default:
                return state
        }
    }
  )