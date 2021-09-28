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