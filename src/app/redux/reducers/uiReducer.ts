import { IUiInitialValues, IUiReduxType } from '../../modules/global/models/uiModel';
import { uiTypes } from '../types/types';

const initialState: IUiInitialValues = {
    loading: false,
    msgError: ''
}


export const uiReducer = ( state = initialState, action: IUiReduxType ) => {

    switch ( action.type ) {
        case uiTypes.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case uiTypes.uiRemoveError:
                return {
                    ...state,
                    msgError: null
                }

        case uiTypes.uiStartLoading:
            return {
                ...state,
                loading: true
            }
 
        case uiTypes.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }

}
