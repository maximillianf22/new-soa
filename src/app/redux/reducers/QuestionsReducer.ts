import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { QuestionModel } from '../../modules/plan_services/Interfaces/models';
import { questionsTypes } from '../types/questionsTypes';

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

const initialQuestionsState: IQuestionsState = {
    questions: [],
    selectedQuestion: {
      "smId": 1,
      "smName": "",
      "smFieldType": "",
      "smIsRequired": true,
      "metadata_service_options": [
          {
              "smoId": 1,
              "smoOptionName": "",
              "smoIsActive": true
          }
      ]
    }
}

interface IQuestionsState {
    questions: QuestionModel[] | undefined
    selectedQuestion: QuestionModel | undefined
}

export const questionsReducer = persistReducer(
  {storage, key: 'questions', whitelist: ['questions', 'selectedQuestion']},
  (state: IQuestionsState = initialQuestionsState, action: ActionWithPayload<IQuestionsState>) => {
    switch (action.type) {
      case questionsTypes.Load: { 
        return {...state, questions: action.payload?.questions};
      }
      case questionsTypes.Clear: {
        return {...initialQuestionsState};
      }
      case questionsTypes.SelectedQuestion: {
        return {...state, selectedQuestion: action.payload?.selectedQuestion};
      }
      case questionsTypes.ClearSelectedQuestion: {
        return {...state, selectedQuestion: initialQuestionsState.selectedQuestion};
      }
      default:
        return state  
    }
  }
);