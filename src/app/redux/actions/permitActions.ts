import { IPermitInfo } from "../../modules/global/models/permitModel";
import { permitTypes } from "../types/permitTypes";


export const permitActions = {
    loadRedux: ( permits: IPermitInfo[] ) => ({
        type: permitTypes.loadRedux,
        payload: permits
    }),

    loadReduxFromLogin: ( loginResponse: any ) => ({
        type: permitTypes.loadReduxFromLogin,
        payload: loginResponse.user.roles[0].permissions
    }),
}

