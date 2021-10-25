import {Action} from '@reduxjs/toolkit'
import { ResponseGenerator } from "../../auth";

export interface IPermitReduxType {
    type: string,
    payload: IPermitInfo[],
}

export interface IPermitsResponse {
    rolId:        number;
    permissions:  IPermitInfo[];
    rolName:      string;
    rolIsActive:  boolean;
    rolUserMod:   string;
    rolCreatedAt: string;
    rolUpdatedAt: string;
}

export interface IPermitsInitialValues {
    permits: IPermitInfo[]
}

export interface IPermitInfo {
    permId:     number;
    permAction: string;
    permName:   string;
}

export interface response {
    data?: ResponseGenerator | undefined
}

export interface ActionWithPayload<T> extends Action {
    payload?: T
}