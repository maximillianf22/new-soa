export interface ICreateProviders {
  razon_social: string
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

export interface IProvidersTable {
  stats?: string
}
