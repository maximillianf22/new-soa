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
    validatedStages: {items: []},
    planServiceStages: [],
    selectedStage: {
      "sid": 0,
      "sstagenumber": 0,
      "sdescription": "",
      "sstatus": true
  }
};


interface IStagesState {
  stages: StagesModel[] | undefined
  validatedStages: {items: []} | undefined
  planServiceStages: StagesModel[] | undefined
  selectedStage: StagesModel | undefined
};

export const stagesReducer = persistReducer(
  {storage, key: 'stages', whitelist: ['stages', 'planServiceStages', 'selectedStage']},
  (state: IStagesState = initialStagesState, action: ActionWithPayload<IStagesState>) => {
    switch (action.type) {
      case stagesTypes.Load: { 
        return {...state, stages: action.payload?.stages};
      }
      case stagesTypes.LoadPlanServiceStages: { 
        return {...state, planServiceStages: action.payload?.planServiceStages};
      }
      case stagesTypes.LoadValidatedStages: { 
        return {...state, validatedStages: action.payload?.validatedStages};
      }
      case stagesTypes.Clear: {
        return {...initialStagesState};
      }
      case stagesTypes.SelectedStage: {
        return {...state, selectedStage: action.payload?.selectedStage};
      }
      case stagesTypes.ClearSelectedStage: {
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