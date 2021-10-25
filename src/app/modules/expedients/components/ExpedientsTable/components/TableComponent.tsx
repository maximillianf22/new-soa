import React from 'react'
import { ITableComponent } from '../../../Interfaces/models'
import {TaskMonitor} from './TaskMonitor'
import {TableBody} from './TableBody'
import {TableHeader} from './TableHeader'

export const TableComponent = ({title}: ITableComponent) => {
  return (
    <>
      <TaskMonitor/>
      <div className='card'>
        <div className='card-body'>
          <TableHeader />
          <TableBody />
        </div>
      </div>
    </>
  )
}
