import { IAccountInfo, IAccountInitialValues } from '../../modules/accounts/Interfaces/models';
import { accountTypes } from '../types/accountTypes';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ActionWithPayload } from '../../modules/global/models/uiModel';


const initialState: IAccountInitialValues = {
    accounts: [],
    active: {},
    acId: 0
}

export const accountsReducer = persistReducer(
    {storage, key: 'accounts', whitelist: ['accounts', 'active']},
    (state: any = initialState, action: ActionWithPayload<IAccountInitialValues>) => {
        switch (action.type) {
        
            case accountTypes.accountActive:
                return {
                    ...state,
                    active: {
                        ...action.payload
                    }
                }

            case  accountTypes.accountAddRedux:
                return {
                    ...state,
                    accounts: [...state.accounts, action.payload?.accounts]
                }

            case accountTypes.accountsLoad:
                return {
                    accounts: action.payload?.accounts,
                    active: {}
                }
        
            case accountTypes.accountUpdateRedux:
                return {
                    ...state,
                    accounts: state.accounts.map(
                        (account: IAccountInfo) => account.acId === action.payload?.acId        
                            ? action.payload
                            : account
                    )
                }

            case accountTypes.accountDeleteRedux:
                return {
                    ...state,
                    accounts: state.accounts.filter( (account: IAccountInfo) => account.acId !== action.payload)
                } 

            case accountTypes.accountsClear:
                return {
                    initialState
                }

            default:
                return state
        }
    }
  )