import React from 'react'
import { ITableComponent } from '../../../Interfaces/models'
import {Stats} from './Stats'
import {TableBody} from './TableBody'
import {TableHeader} from './TableHeader'

export const TableComponent = ({title}: ITableComponent) => {
  return (
    <>
      <Stats title={title} />
      <div className='card'>
        <div className='card-body'>
          <TableHeader />
          <TableBody />
        </div>
      </div>
    </>
  )
}
