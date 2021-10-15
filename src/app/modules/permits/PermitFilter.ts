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

    return permitArray.length > 0 ? true : false
}

const permitByModule = (permits: IPermitInfo[], module: string) => {
    const permitArray = permits.filter((permit) => {
        if (permit.permAction.includes(module)) {
            return permit
        }
    })
    
    return permitArray.length > 0 ? true : false
}

export {permitFilterByModules, permitByModuleAndAction, permitByModule}
