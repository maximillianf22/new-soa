export interface ICreateServices {
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

export interface IServicesTable {
    stats?: string;
}


export interface ServiceModel {
    servId:          number;
    servDescription: string;
    servStartDate:   null;
    servDueDate:     null;
    servStatus:      boolean;
    fmId:            number;
}

export interface IServicesResponse {
    count: number
    next: null
    previous: null
    results: ServiceModel[]
}