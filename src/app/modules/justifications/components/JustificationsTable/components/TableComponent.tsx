import React from 'react'
import {TableBody} from './TableBody'
import {TableHeader} from './TableHeader'

export const TableComponent = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <TableHeader />
          <TableBody />
        </div>
      </div>
    </>
  )
}