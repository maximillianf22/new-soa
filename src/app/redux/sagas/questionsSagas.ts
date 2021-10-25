import { IfamilyResponseRR } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { IResponseServiceService } from '../../modules/services/Interfaces/models';
import { IQuestionsResponse } from '../../modules/plan_services/Interfaces/models';
import { questionsActions } from '../actions/questionsActions';
import { questionsTypes } from '../types/questionsTypes';
import { uiTypes } from '../types/types';
import { getQuestions, deleteQuestion, getQuestion, createQuestion, updateQuestion } from '../../api/QuestionsService';

interface ActionTypePayload {
    type: string, 
    payload: number
}

export function* sagaQuestions() {
    // Worker Sagas
    function* asyncLoad({payload}:ActionTypePayload) {
      try {
        const {data}: IfamilyResponseRR = yield call(getQuestions, payload)
        console.log("en el saga questions", data)
        yield put(questionsActions.load(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaDeleteQuestion({payload}:ActionTypePayload) {
      try {
        const resp: IQuestionsResponse = yield call(deleteQuestion, payload)
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaUpdateQuestion({payload}:ActionTypePayload) {
console.log("en el saga questioonss")
      try {
        yield call(updateQuestion, payload);
        const {data}: IResponseServiceService = yield call(getQuestion, payload)
        yield put(questionsActions.updateFromReducer(data))
      } catch (error) {
        console.log(error)
      }
    }
  
    function* sagaCreateQuestion({payload}:ActionTypePayload) {
      try {
        const resp: IQuestionsResponse = yield call(createQuestion, payload)
        console.log(resp)
        yield put(questionsActions.SelectedQuestion(resp.data))
      } catch (error) {
        console.log(error)
        yield put({type: uiTypes.uiFinishLoading}) 
      } 
    }

    // Watcher Sagas
    yield takeLatest(questionsTypes.get, asyncLoad)
    yield takeLatest(questionsTypes.Delete, sagaDeleteQuestion)
    yield takeLatest(questionsTypes.Update, sagaUpdateQuestion)
    yield takeLatest(questionsTypes.Create, sagaCreateQuestion)
}