import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { stagesTypes } from '../types/stagesTypes';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}
export interface StagesModel {
  sid:          number;
  sstagenumber: number;
  sdescription: string;
  sstatus:      boolean;
}

const initialStagesState: IStagesState = {
    stages: [],
    selectedStage: {
      "sid": 0,
      "sstagenumber": 0,
      "sdescription": "",
      "sstatus": true
  }
}


interface IStagesState {
  stages: StagesModel[] | undefined
  selectedStage: StagesModel | undefined
}

export const planServicesReducer = persistReducer(
  {storage, key: 'stages', whitelist: ['stages', 'selectedStage']},
  (state: IStagesState = initialStagesState, action: ActionWithPayload<IStagesState>) => {
    switch (action.type) {
      case stagesTypes.Load: { 
        return {...state, stages: action.payload?.stages};
      }
      case stagesTypes.Clear: {
        return {...initialStagesState};
      }
      case stagesTypes.SelectedPlanService: {
        return {...state, selectedStage: action.payload?.selectedStage};
      }
      case stagesTypes.ClearSelectedPlanService: {
        return {...state, selectedStage: initialStagesState.selectedStage};
      }
      case stagesTypes.DeleteFromReducer: {
        return {...state, stages: state.stages?.filter( s => s.sid !== action.payload?.selectedStage?.sid )};
      }
      case stagesTypes.UpdateFromReducer: {
        return {...state, stages: state.stages?.map( s => s.sid === action.payload?.selectedStage?.sid ? action.payload?.selectedStage : s )};
      }
      default:
        return state  
    }
  }
);