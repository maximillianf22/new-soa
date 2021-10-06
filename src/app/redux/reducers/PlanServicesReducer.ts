import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { servicesTypes } from '../types/types';
import { ServiceModel } from '../../modules/services/Interfaces/models';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

const initialServicesState: IServicesState = {
    services: [],
    selectedService: {
        "servId": 0,
        "servDescription": "",
        "servStartDate": null,
        "servDueDate": null,
        "servStatus": true,
        "fmId": 0
    }
}

interface IServicesState {
    services: ServiceModel[] | undefined
    selectedService: ServiceModel | undefined
}

export const planServicesReducer = persistReducer(
  {storage, key: 'v100-demo1-services', whitelist: ['servicesTypes', 'selectedService']},
  (state: IServicesState = initialServicesState, action: ActionWithPayload<IServicesState>) => {
    switch (action.type) {
      case servicesTypes.Load: { 
        return {...state, services: action.payload?.services};
      }
      case servicesTypes.Clear: {
        return {...initialServicesState};
      }
      case servicesTypes.selectedService: {
        return {...state, selectedService: action.payload?.selectedService};
      }
      case servicesTypes.ClearSelectedService: {
        return {...state, selectedService: initialServicesState.selectedService};
      }
      case servicesTypes.DeleteFromReducer: {
        return {...state, services: state.services?.filter( s => s.servId !== action.payload?.selectedService?.servId )};
      }
      case servicesTypes.UpdateFromReducer: {
        return {...state, services: state.services?.map( s => s.servId === action.payload?.selectedService?.servId ? action.payload?.selectedService : s )};
      }
      default:
        return state  
    }
  }
);