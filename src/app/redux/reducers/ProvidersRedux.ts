import { providerTypes } from '../types/providerTypes';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ActionWithPayload } from '../../modules/global/models/uiModel';
import { IProviderInfo, IProviderInitialValues } from '../../modules/providers/Interfaces/models';


const initialState: IProviderInitialValues = {
    providers: [],
    selectedProvider: {
        provId:                       0,
        provFiscalName:               '',
        provTradeName:                '',
        dtId:                         0,
        provDocumentNumber:           '',
        provInfrastructureAssessment: 0,
        provLoyaltyAssessment:        0,
        provSatisfactionAssessment:   0,
        provActivityStartDate:        '',
        provIsActive:                 true,
        provEmail1:                   '',
        provAvatarUrl:                '',
        provContractUrl:              '',
        curId:                        0,
        provUserApp:                  '',
        provPasswordApp:              '',
        provBaseType:                 '',
    },
    provId: 0
}

export const providersReducer = persistReducer(
    {storage, key: 'providers', whitelist: ['providers', 'selectedProvider']},
    (state: any = initialState, action: ActionWithPayload<IProviderInitialValues>) => {
        switch (action.type) {
        
            case providerTypes.selectedProvider:
                return {
                    ...state,
                    selectedProvider: action.payload
                }

            case  providerTypes.addRedux:
                return {
                    ...state,
                    providers: [...state.providers, action.payload?.providers]
                }

            case providerTypes.load:
                return {
                    providers: action.payload?.providers,
                    selectedProvider: {}
                }
        
            case providerTypes.updateRedux:
                return {
                    ...state,
                    providers: state.providers.map(
                        (provider: IProviderInfo) => provider.provId === action.payload?.provId        
                            ? action.payload
                            : provider
                    )
                }

            case providerTypes.deleteRedux:                
                return {
                    ...state,
                    providers: state.providers.filter( (provider: IProviderInfo) => provider.provId !== action.payload?.provId )
                } 

            case providerTypes.clear:
                return {
                    ...initialState
                }

            case providerTypes.resetSelectedProvider:
            return {
                ...state,
                selectedProvider: initialState.selectedProvider
            }

            default:
                return state
        }
    }
  )