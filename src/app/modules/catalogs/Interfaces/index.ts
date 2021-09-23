export interface IContent {
  idRef: string
  active?: boolean
  title: string
  linkCreate: string
  TabContent: any
}

export interface IContentHeader {
  title: string
  linkCreate: string
}

export interface IContentItem {
  vip?: boolean
  name: string
  pilot?: string
  count: number
  tableRef: string
}

export interface ITabItem {
  tabRef: string
  name: string
  active?: boolean
}

export interface ITableHeader {
  name: string
  pilot: string
  vip?: boolean
  linkCreate: string
}

export interface ITable{
  title: string
  linkCreate: string
  TableContent: any
}

export interface ITableItem{
  linkCreate: string
  TableComponent: any
  tableRef: string
  name: string
  pilot: string
  active ?: boolean
}