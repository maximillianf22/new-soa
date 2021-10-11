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
  spNumberOfEvents:        null;
  spCost:                  null;
  spVehicle:               null;
  spDataVehicular:         null;
  spServApp:               null;
  spThreePoints:           null;
  spVideocall:             null;
  spGroupService:          null;
  spGroupEqualService:     null;
  spReAsignProvider:       null;
  spLogoUploadPath:        string;
  spLabelForUser:          string;
  spFrecuency:             null;
  spConditionsDescription: null;
  servId:                  number;
  plId:                    number;
  pId:                     null;
}