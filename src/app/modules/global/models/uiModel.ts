import { ResponseGenerator } from "../../auth";

export interface IUiReduxType {
    type: string,
    payload: string,
}

export interface IUiInitialValues {
    loading: boolean,
    msgError: string | null
}

export interface response {
    data?: ResponseGenerator | undefined
}