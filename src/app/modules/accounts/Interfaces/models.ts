export interface ICreateAccounts {
  acName: string
  acPilotNumber: string
  acStatus: boolean
  acIsVip: boolean
  acHasBeneficiaries: boolean
  acPilotProviderNumber?: string
}

export interface IStatsItem {
  title: string
  state: string
  count: number
}

export interface IStats {
  title: string
}

export interface ITableComponent {
  title: string
}

export interface IAccountsReduxType {
  type: String
  payload: IAccountInfo | IAccountInfo[]
}

export interface IAccountInitialValues {
  accounts?: IAccountInfo[] | IAccountInfo
  active?: IAccountInfo
  acId: number | null
}

export interface IAccountResponse {
  count: number
  next: string | null
  previous: string | null
  results: IAccountInfo[]
}

export interface IAccountInfo {
  acId?: number
  plans?: IPlanResponse[]
  acName?: string
  acCreationDateUtc?: string
  acPilotNumber?: string
  acStatus?: boolean
  acIsVip?: boolean
  acHasBeneficiaries?: boolean
  acPilotProviderNumber?: string
}

export interface IPlanResponse {
  plId: number
  plName: string
  plIsVip: boolean
  plStatus: boolean
  plStartDate: string
  plDueDate: string
  plDaysToDue: number
  plCreationDate: string
  plUpdatedAt: string
  plEventsShared: boolean
  plnumEventsShared: number
  plFileUploadPath: string
  acId: number
}

export interface IAccountsDetailsHeader {
  description: string
  pilot?: string
  pilot_provider?: string
  active?: boolean
  vip?: boolean
}

export interface IAccountsDetails {
  description: string
  pilot?: string
  pilot_provider?: string
  active?: boolean
  vip?: boolean
  count_vip: number
  count_active: number
  count_inactive: number
}
