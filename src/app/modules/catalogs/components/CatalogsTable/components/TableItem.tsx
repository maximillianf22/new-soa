import React from 'react'
import {ITableItem} from '../../../Interfaces'
import { TableHeader } from './TableHeader'

export const TableItem = ({
  linkCreate,
  TableComponent,
  tableRef,
  name,
  pilot,
}: ITableItem) => {
  return (
    <>
      <div className='tab-pane fade' id={tableRef}>
        <div className='card-body pt-4'>
          <div className='container-custom'>
            <div className='card-header border-0 p-0'>
              <TableHeader
                name={name}
                pilot={pilot}
                vip
                linkCreate={linkCreate}
              />
            </div>
            <TableComponent />
          </div>
        </div>
      </div>
    </>
  )
}
