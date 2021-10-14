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

export interface IPlanServicesResponse {
  count: number
  next: null
  previous: null
  results: PlanServiceModel[]
}

export interface PlanServiceModel {
  spId:                    number;
  spNumberOfEvents:        number;
  spCost:                  number;
  spVehicle:               boolean;
  spDataVehicular:         boolean;
  spServApp:               boolean;
  spThreePoints:           boolean;
  spVideocall:             boolean;
  spGroupService:          boolean;
  spGroupEqualService:     boolean;
  spReAsignProvider:       boolean;
  spLogoUploadPath:        string;
  spLabelForUser:          string;
  spFrecuency:             boolean;
  spConditionsDescription: string;
  servId:                  number;
  plId:                    number;
  pId:                     number;
}