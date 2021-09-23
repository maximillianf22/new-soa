import React from 'react'
import { PlansTabContent } from '../../../plans/PlansTabContent'
import {TableItem} from './components/TableItem'

export const Table = () => {
  return (
    <>
      <div className='card'>
        <div className='tab-content'>
          <TableItem
            linkCreate=''
            TableComponent={PlansTabContent}
            tableRef='kt_table_1'
            name=''
            pilot=''
            active
          />
        </div>
      </div>
    </>
  )
}
