export interface ICreatePlans {
    description: string
    code: string
    url: string
    initialDate: Date
    finalDate: Date
    dueDate: string
  }
  
export interface IStatsItem {
    title: string;
    state: string;
    count: number;
}

export interface IStats {
    title: string;
    stats?: string;
}

export interface ITableComponent {
    title: string;
    stats?: string;
}

export interface IPlansTable {
    stats?: string;
}

export interface IPlanInitialValues {
  plans?: IPlanResponse[] | IPlanResponse
  selectedPlan?: IPlanResponse
  plId: number | null
}

export interface IPlansReduxType {
    type: String
    payload: IPlanResponse | IPlanResponse[]
  }
  
  export interface IPlanResponse {
    plId?: number
    plName?: string
    plIsVip?: boolean
    plStatus?: boolean
    plStartDate?: string
    plDueDate?: string
    plDaysToDue?: number
    plCreationDate?: string
    plUpdatedAt?: string
    plEventsShared?: boolean
    plnumEventsShared?: number
    plFileUploadPath?: string
    acId?: number
  }