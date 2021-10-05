export interface ICreatePlanService {
  etiqueta: string
  servicio: string
  img: string
  events: string
  frecuencia: string
  number: string
  coin: string
  document: string
  description: string
}

export interface IStatsItem {
  title: string
  state: string
  count: number
}

export interface IStats {
  title: string
  stats?: string
}

export interface ITableComponent {
  title: string
  stats?: string
}

export interface IPlanServiceTable {
  stats?: string
}
