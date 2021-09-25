import { IAccountInfo, IAccountInitialValues } from '../../modules/accounts/Interfaces/models';
import { accountTypes } from '../types/accountTypes';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ActionWithPayload } from '../../modules/global/models/uiModel';


const initialState: IAccountInitialValues = {
    accounts: [],
    active: {}
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
                    ...state,
                    accounts: action.payload?.accounts
                }
        
            // case accountTypes.accountUpdate:
                // console.log('action', action);
                // console.log('state', state);
            //     return {
            //         ...state,
            //         accounts: state.accounts.map(
            //             account => account.acId === action.payload[0].acId
            //                 ? action.payload[0].acId
            //                 : account
            //         )
            //     }

            case accountTypes.accountDeleteRedux:
                return {
                    ...state,
                    accounts: state.accounts.filter( (account: IAccountInfo) => account.acId !== action.payload)
                } 

            case accountTypes.accountsClear:
                return {
                    ...state,
                    active: null,
                    accounts: []
                }

            default:
                return state
        }
    }
  )