import { uiTypes } from "../types/types";

export const uiSetError = ( err: any ) => ({
    type: uiTypes.uiSetError,
    payload: err
});

export const uiRemoveError = () => ({
    type: uiTypes.uiRemoveError
});

export const uiStartLoading = () => ({
    type: uiTypes.uiStartLoading
})
export const uiFinishLoading = () => ({
    type: uiTypes.uiFinishLoading
})
