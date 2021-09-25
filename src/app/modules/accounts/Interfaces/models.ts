export interface ICreateAccounts {
    acName:                  string;
    acPilotNumber:           string;
    acStatus:                boolean;
    acIsVip:                 boolean;
    acHasBeneficiaries:      boolean;
    acPilotProviderNumber?:  string;
  }
  
export interface IStatsItem {
    title: string;
    state: string;
    count: number;
}

export interface IStats {
    title: string;
}

export interface ITableComponent {
    title: string;
}

export interface IAccountsReduxType {
    type:    String;
    payload: IAccountInfo | IAccountInfo[];
}

export interface IAccountInitialValues {
    accounts?: IAccountInfo[];
    active?:   IAccountInfo;
}

export interface IAccountResponse {
    count:    number;
    next:     string | null;
    previous: string | null;
    results:  IAccountInfo[];
}

export interface IAccountInfo {
    acId?:                   number;
    plans?:                  IPlanResponse[];
    acName?:                 string;
    acCreationDateUtc?:      string;
    acPilotNumber?:          string;
    acStatus?:               boolean;
    acIsVip?:                boolean;
    acHasBeneficiaries?:     boolean;
    acPilotProviderNumber?:  string;
}

export interface IPlanResponse {
    plId:              number;
    plName:            string;
    plIsVip:           boolean;
    plStatus:          boolean;
    plStartDate:       string;
    plDueDate:         string;
    plDaysToDue:       number;
    plCreationDate:    string;
    plUpdatedAt:       string;
    plEventsShared:    boolean;
    plnumEventsShared: number;
    plFileUploadPath:  string;
    acId:              number;
}


