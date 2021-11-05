import { questionsTypes } from '../types/questionsTypes';


export const questionsActions = {
    get: (payload: number) => ({type: questionsTypes.get, payload}),
    load: (payload: any) => ({type: questionsTypes.Load, payload: {questions:payload}}),
    clear: () => ({type: questionsTypes.Clear,}),
    selectedQuestion: (payload:any) => ({type: questionsTypes.SelectedQuestion, payload: {selectedQuestion:payload}}),
    clearSelectedService: () => ({type: questionsTypes.ClearSelectedQuestion}),
    updateQuestions: (payload:any) => ({type: questionsTypes.Update, payload: {SelectedQuestion:payload}}),
    updateFromReducer: (payload:any) => ({type: questionsTypes.UpdateFromReducer, payload: {SelectedQuestion:payload}}),
    createQuestions: (payload:any) => ({type: questionsTypes.Create, payload}),
    createOptionQuestion: (payload:any) => ({type: questionsTypes.CreateOption, payload}),
    deleteOption: (payload:any) => ({type: questionsTypes.DeleteOption, payload: {list_service_metadata_options_ids: [payload]}}),
}