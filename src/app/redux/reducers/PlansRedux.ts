import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ActionWithPayload } from '../../modules/global/models/uiModel';
import { IPlanInitialValues, IPlanResponse } from '../../modules/plans/Interfaces/models';
import { planTypes } from '../types/planTypes';


const initialState: IPlanInitialValues = {
    plans: [],
    selectedPlan: {},
    plId: 0,
    acId: 0,
}

export const plansReducer = persistReducer(
    {storage, key: 'plans', whitelist: ['plans', 'selectedPlan']},
    (state: any = initialState, action: ActionWithPayload<IPlanInitialValues>) => {

        switch (action.type) {
        
            case planTypes.selectedPlan:
                return {
                    ...state,
                    selectedPlan: action.payload
                }

            case  planTypes.addRedux:
                
                // console.log('action.payload', action.payload?.plans);
            
                // if (action.payload?.acId === selectedAccount.acId) {

                // }
                return {
                    ...state,
                    plans: [...state.plans, action.payload?.plans]
                }
                
            case planTypes.load:
                return {
                    plans: action.payload?.plans,
                    selectedPlan: {}
                }

            case planTypes.loadPlansByAcId:
                return {
                    plans: action.payload?.plans,
                    selectedPlan: {}
                }
        
            case planTypes.updateRedux:
                return {
                    ...state,
                    plans: state.plans.map(
                        (plan: IPlanResponse) => plan.plId === action.payload?.plId        
                            ? action.payload
                            : plan
                    )
                }

            case planTypes.deleteRedux:
                return {
                    ...state,
                    plans: state.plans.filter( (plan: IPlanResponse) => plan.plId !== action.payload)
                }

            case planTypes.setAllReduxPlans:
                return {
                    ...state,
                    plans: action.payload
                }

            case planTypes.clear:
                return {
                    initialState
                }

            default:
                return state
        }
    }
  )