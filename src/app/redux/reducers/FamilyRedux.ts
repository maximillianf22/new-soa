import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { familiesTypes } from '../types/types';
import { FamilyModel } from '../../modules/families/Interfaces/models';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

const initialFamilyState: IfamilyState = {
    families: [],
    SelectedFamily: {
        fmId: 0,
        fmDescription: "",
        fmStatus: true,
        fmUsermod: "",
        fmIsActive: true,
        fmGrouped: null
    }
}

interface IfamilyState {
    families: FamilyModel[] | undefined
    SelectedFamily: FamilyModel | undefined
}

export const familiesReducer = persistReducer(
  {storage, key: 'v100-demo1-families', whitelist: ['families', 'SelectedFamily']},
  (state: IfamilyState = initialFamilyState, action: ActionWithPayload<IfamilyState>) => {
    switch (action.type) {
      case familiesTypes.Load: { 
        return {...state, families: action.payload?.families}
      }
      case familiesTypes.Clear: {
        return {...initialFamilyState}
      }
      case familiesTypes.SelectedFamily: {
        return {...state, SelectedFamily: action.payload?.SelectedFamily}
      }
      case familiesTypes.ClearSelectedFamily: {
        return {...state, SelectedFamily: initialFamilyState.SelectedFamily}
      }
      case familiesTypes.DeleteFromReducer: {
        console.log("EN EL REDUUUCER", state.families?.filter( f => f.fmId !== action.payload?.SelectedFamily?.fmId ))
        return {...state, families: state.families?.filter( f => f.fmId !== action.payload?.SelectedFamily?.fmId )}
      }
      default:
        return state
    }
  }
)