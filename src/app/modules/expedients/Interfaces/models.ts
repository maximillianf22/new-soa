export interface ICreateAccounts {
  description: string
  code: string
  url: string
  initialDate: Date
  finalDate: Date
  dueDate: string
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

export interface IfamilyResponse {
  count: number
  next: null
  previous: null
  results: FamilyModel[]
}

export interface FamilyModel {
  fmId: number
  fmDescription?: string
  fmStatus?: boolean
  fmCreatedAt?: string
  fmUpdatedAt?: string
  fmUsermod: string
  fmIsActive?: boolean
  fmGrouped: null
}

export interface IfamilyResponseRR {
  data: Data
  status: number
  statusText: string
  headers: ResponseHeaders
  config: Config
  request: Request
}

export interface Config {
  url: string
  method: string
  headers: ConfigHeaders
  baseURL: string
  transformRequest: null[]
  transformResponse: null[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
}

export interface ConfigHeaders {
  Accept: string
}

export interface Data {
  count: number
  next: null
  previous: null
  results: Result[]
}

export interface Result {
  fmId: number
  fmDescription: string
  fmStatus: boolean
  fmCreatedAt: string
  fmUpdatedAt: string
  fmUsermod: string
  fmIsActive: boolean
  fmGrouped: null
}

export interface ResponseHeaders {
  allow: string
  connection: string
  'content-length': string
  'content-type': string
  date: string
  vary: string
  'x-content-type-options': string
  'x-frame-options': string
}

export interface IExpedientsDetails {
  active: boolean
  description: string
  created_at: string
  updated_at: string
  modified_by: string
  count_vip: number
  count_active: number
  count_inactive: number
}

export interface Request {}
