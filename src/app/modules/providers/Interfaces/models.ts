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

export interface IProviderInitialValues {
  providers?: IProviderInfo[] | IProviderInfo
  selectedProvider?: IProviderInfo
  provId: number | null
}

export interface IProviderResponse {
  count: number
  next: string | null
  previous: string | null
  results: IProviderInfo[]
}

export interface IProviderInfo {
  provId:                       number;
  provFiscalName:               string;
  provTradeName:                string;
  dtId:                         number;
  provDocumentNumber:           string;
  provInfrastructureAssessment: number;
  provLoyaltyAssessment:        number;
  provSatisfactionAssessment:   number;
  provActivityStartDate:        string;
  provIsActive:                 boolean;
  provEmail1:                   string;
  provEmail2?:                  string;
  provInternal?:                string;
  provAvatarUrl:                string;
  provContractUrl:              string;
  curId:                        number;
  provUserApp:                  string;
  provPasswordApp:              string;
  provBaseType:                 string;
}
