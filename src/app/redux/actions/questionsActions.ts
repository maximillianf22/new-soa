import { questionsTypes } from '../types/questionsTypes';


export const questionsActions = {
    load: (payload: any) => ({type: questionsTypes.Load, payload: {questions:payload}}),
    clear: () => ({type: questionsTypes.Clear,}),
    SelectedQuestion: (payload:any) => ({type: questionsTypes.SelectedQuestion, payload: {selectedQuestions:payload}}),
    ClearSelectedService: () => ({type: questionsTypes.ClearSelectedQuestion}),
    updateQuestions: (payload:any) => ({type: questionsTypes.Update, payload: {SelectedQuestion:payload}}),
    updateFromReducer: (payload:any) => ({type: questionsTypes.UpdateFromReducer, payload: {SelectedQuestion:payload}}),
    createQuestions: (payload:any) => ({type: questionsTypes.Create, payload: {SelectedQuestion:payload}}),
}