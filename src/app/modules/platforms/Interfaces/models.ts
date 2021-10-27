export interface ICreatePlatforms {
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

export interface IPlatformsTable {
    stats?: string;
}


export interface PlatformModel {
    servId:          number;
    servDescription: string;
    servStartDate:   null;
    servDueDate:     null;
    servStatus:      boolean;
    fmId:            any;
}

export interface IPlatformsResponse {
    count: number
    next: null
    previous: null
    results: PlatformModel[]
}

export interface IResponsePlatformPlatform {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    IResponsePlatformPlatformHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    url:               string;
    method:            string;
    headers:           ConfigHeaders;
    baseURL:           string;
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Data {
    servId:          number;
    servDescription: string;
    servStartDate:   string;
    servDueDate:     string;
    servStatus:      boolean;
    fmId:            number;
}

export interface IResponsePlatformPlatformHeaders {
    allow:                    string;
    connection:               string;
    "content-length":         string;
    "content-type":           string;
    date:                     string;
    vary:                     string;
    "x-content-type-options": string;
    "x-frame-options":        string;
}

export interface Request {
}
