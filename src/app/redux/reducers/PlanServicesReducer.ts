import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PlanServiceModel } from '../../modules/plan_services/Interfaces/models';
import { planServicesTypes } from '../types/planServicesTypes';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

const initialServicesState: IPlanServicesState = {
    services: [],
    selectedPlanService: {
      "spId": 1,
      "spNumberOfEvents": null,
      "spCost": null,
      "spVehicle": null,
      "spDataVehicular": null,
      "spServApp": null,
      "spThreePoints": null,
      "spVideocall": null,
      "spGroupService": null,
      "spGroupEqualService": null,
      "spReAsignProvider": null,
      "spLogoUploadPath": "",
      "spLabelForUser": "DidiTest",
      "spFrecuency": null,
      "spConditionsDescription": null,
      "servId": 2,
      "plId": 1,
      "pId": null
    }
}

interface IPlanServicesState {
    services: PlanServiceModel[] | undefined
    selectedPlanService: PlanServiceModel | undefined
}

export const planServicesReducer = persistReducer(
  {storage, key: 'plan-services', whitelist: ['services', 'selectedPlanService']},
  (state: IPlanServicesState = initialServicesState, action: ActionWithPayload<IPlanServicesState>) => {
    switch (action.type) {
      case planServicesTypes.Load: { 
        return {...state, services: action.payload?.services};
      }
      case planServicesTypes.Clear: {
        return {...initialServicesState};
      }
      case planServicesTypes.SelectedPlanService: {
        return {...state, selectedPlanService: action.payload?.selectedPlanService};
      }
      case planServicesTypes.ClearSelectedPlanService: {
        return {...state, selectedPlanService: initialServicesState.selectedPlanService};
      }
      case planServicesTypes.DeleteFromReducer: {
        return {...state, services: state.services?.filter( s => s.servId !== action.payload?.selectedPlanService?.servId )};
      }
      case planServicesTypes.UpdateFromReducer: {
        return {...state, services: state.services?.map( s => s.servId === action.payload?.selectedPlanService?.servId ? action.payload?.selectedPlanService : s )};
      }
      default:
        return state  
    }
  }
);