import {Action} from '@reduxjs/toolkit'
import { ResponseGenerator } from "../../auth";

export interface IUiReduxType {
    type: string,
    payload: string,
}

export interface IUiInitialValues {
    loading: boolean,
    msgError: string | null,
    editing: boolean,
    viewing: boolean,
}

export interface response {
    data?: ResponseGenerator | undefined
}

export interface ActionWithPayload<T> extends Action {
    payload?: T
}