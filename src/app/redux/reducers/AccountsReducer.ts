import { IInitialValues, IAccountsReduxType } from '../../modules/accounts/Interfaces/models';
import { accountTypes } from '../types/accountTypes';

const initialState: IInitialValues = {
    accounts: [],
    active: {}
}

export const accountsReducer = ( state = initialState, action: IAccountsReduxType ) => {

    switch (action.type) {
        
        case accountTypes.accountActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case  accountTypes.accountCreate:
            return {
                ...state,
                accounts: [ action.payload, ...state.accounts ]
            }

        case accountTypes.accountsLoad:
            console.log('aber', action);
            return {...state, accounts: [action.payload]}
            // return {
            //     ...state,
            //     accounts: [ ...action.payload ]
            // }
    
        case accountTypes.accountUpdate:
            return {
                ...state,
                accounts: state.accounts.map(
                    account => account.acId === action.payload[0].acId
                        ? action.payload[0].acId
                        : account
                )
            }

        case accountTypes.accountDelete:
            return {
                ...state,
                active: null,
                accounts: state.accounts.filter( account => account.acId !== action.payload[0].acId)
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