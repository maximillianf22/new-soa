import React from 'react'
import {TableStats} from './components/TableStats'
import {TableHeader} from './components/TableHeader'
import {TableBody} from './components/TableBody'
import { ITableComponent } from '../../../users/interfaces/models'

export const TableComponent = ({title,stats}: ITableComponent) => {
  return (
    <>
      <TableStats title={title} stats={stats} />
      <div className='card p-5' style={{minHeight: '45vh'}}>
        <TableHeader />
        <TableBody />
      </div>
    </>
  )
}
