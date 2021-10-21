import { IfamilyResponseRR } from '../../modules/families/Interfaces/models';
import { call, takeLatest, put } from 'redux-saga/effects';
import { IResponseServiceService } from '../../modules/services/Interfaces/models';
import { IQuestionsResponse } from '../../modules/plan_services/Interfaces/models';
import { questionsActions } from '../actions/questionsActions';
import { planServicesTypes } from '../types/planServicesTypes';
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
        const {data: {results}}: IfamilyResponseRR = yield call(getQuestions, payload)
        yield put(questionsActions.load(results))
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
        console.log('en tryy', resp)
        
        yield put({type: uiTypes.uiFinishLoading})
        yield put({type: planServicesTypes.AsyncLoad})
        yield put(questionsActions.SelectedQuestion(resp.data))

      } catch (error) {
        console.log(error)
        yield put({type: uiTypes.uiFinishLoading}) 
      } 
    }

    // Watcher Sagas
    yield takeLatest(planServicesTypes.AsyncLoad, asyncLoad)
    yield takeLatest(planServicesTypes.Delete, sagaDeleteQuestion)
    yield takeLatest(planServicesTypes.Update, sagaUpdateQuestion)
    yield takeLatest(planServicesTypes.Create, sagaCreateQuestion)
}