import React from 'react'
import { ITableComponent } from '../../../Interfaces/models'
import {TaskMonitor} from './TaskMonitor/TaskMonitor'
import {TableBody} from './TableBody'
import {TableHeader} from './TableHeader'

export const TableComponent = ({title,stats}: ITableComponent) => {
  return (
    <>
      <TaskMonitor title={title} stats={stats} />
      <div className='card'>
        <div className='card-body'>
          <TableHeader />
          <TableBody />
        </div>
      </div>
    </>
  )
}
