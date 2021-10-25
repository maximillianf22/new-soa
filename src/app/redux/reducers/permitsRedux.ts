import persistReducer from 'redux-persist/es/persistReducer';
import { IPermitsInitialValues, IPermitReduxType } from '../../modules/global/models/permitModel';
import { permitFilterByModules } from '../../modules/permits/PermitFilter';
import { permitTypes } from '../types/permitTypes';
import storage from 'redux-persist/lib/storage'


const initialState: IPermitsInitialValues = {
    permits: []
}


export const permitsReducer = persistReducer(
    {storage, key: 'permits', whitelist: ['permits']},
    (state = initialState, action: IPermitReduxType) => {
        switch ( action.type ) {
            // case permitTypes.loadRedux:
            //     return {
            //         permits: action.payload
            //     }
            
            case permitTypes.loadReduxFromLogin:
                return {
                    permits: permitFilterByModules(action.payload)
                }
    
            // case uiTypes.uiRemoveError:
            //         return {
            //             ...state,
            //             msgError: null
            //         }
    
            // case uiTypes.uiStartLoading:
            //     return {
            //         ...state,
            //         loading: true
            //     }
     
            // case uiTypes.uiFinishLoading:
            //     return {
            //         ...state,
            //         loading: false
            //     }
    
            // case uiTypes.uiIsEditing:
            //     return {
            //         ...state,
            //         editing: action.payload,
            //     }
    
            // case uiTypes.uiIsViewing:
            //     return {
            //         ...state,
            //         viewing: action.payload,
            //         }
    
            default:
                return state;
        }
    }
  )
