import { uiTypes } from "../types/types";


export const uiActions = {
    uiSetError: ( err: any ) => ({
        type: uiTypes.uiSetError,
        payload: err
    }),
    uiRemoveError: () => ({
        type: uiTypes.uiRemoveError
    }),
    uiStartLoading: () => ({
        type: uiTypes.uiStartLoading
    }),
    uiFinishLoading: () => ({
        type: uiTypes.uiFinishLoading
    }),
    uiIsEditing: (payload: boolean) => ({
        type: uiTypes.uiIsEditing, payload: payload
    }),
    uiIsViewing: (payload: boolean) => ({
        type: uiTypes.uiIsViewing, payload: payload
    })
}

