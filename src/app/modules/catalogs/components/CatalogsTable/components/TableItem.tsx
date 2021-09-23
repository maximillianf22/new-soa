import React from 'react'
import {ITableItem} from '../../../Interfaces'
import { TableHeader } from './TableHeader'

export const TableItem = ({
  linkCreate,
  TableComponent,
  tableRef,
  name,
  pilot,
  active
}: ITableItem) => {
  return (
    <>
      <div className={`tab-pane fade ${active ? ('show active') : ('')}`} id={tableRef}>
        <div className='card-body pt-4'>
          <div className='container-custom'>
            <div className='card-header border-0 p-0'>
             
            </div>
            <TableComponent />
          </div>
        </div>
      </div>
    </>
  )
}
