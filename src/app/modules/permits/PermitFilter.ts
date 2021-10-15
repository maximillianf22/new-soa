import { IPermitInfo } from "../global/models/permitModel";
import { PermitModules } from "./PermitModules";

const permitFilterByModules = (permits: IPermitInfo[]) => {

    let allPermits: IPermitInfo[] = []

    PermitModules.map((permitModule) => {

        permits.filter( permit => {
            if (permit.permAction.includes(permitModule)) {
                allPermits.push(permit)
                return permit
            }
        })
    })

    return allPermits
}

const permitByModuleAndAction = (permits: IPermitInfo[], module: string, action: string) => {
    const permitArray = permits.filter((permit) => {
        if (permit.permAction.includes(module) && (permit.permAction.includes(action))) {
            return permit
        }
    })
    console.log('permitArray', permitArray);
    
    if (permitArray.length > 0) {
        console.log('entro true');
        return true
    } else {
        console.log('entro false');
        return false
    }
}

export {permitFilterByModules, permitByModuleAndAction}
