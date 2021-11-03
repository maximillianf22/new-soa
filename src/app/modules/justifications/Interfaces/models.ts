export interface ICreateServices {
    description: string
    code: string
    url: string
    initialDate: Date
    finalDate: Date
    dueDate: string
  }

export interface ServiceModel {
    servId:          number;
    servDescription: string;
    servStartDate:   null;
    servDueDate:     null;
    servStatus:      boolean;
    fmId:            any;
}

export interface IServicesResponse {
    count: number
    next: null
    previous: null
    results: ServiceModel[]
}

export interface IResponseServiceService {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    IResponseServiceServiceHeaders;
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

export interface IResponseServiceServiceHeaders {
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
