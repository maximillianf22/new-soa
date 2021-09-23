import React from 'react'
import {AccountTabContent} from '../../../accounts/AccountTabContent'
import {TableItem} from './components/TableItem'

export const Table = () => {
  return (
    <>
      <div className='card'>
        <div className='tab-content'>
          <TableItem
            linkCreate=''
            TableComponent={AccountTabContent}
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
