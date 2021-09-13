import React from 'react'
import {TableStats} from './components/TableStats'
import {TableHeader} from './components/TableHeader'
import {TableBody} from './components/TableBody'

export const TableComponent: React.FC = () => {
  return (
    <>
      <TableStats />
      <div className='card p-5' style={{minHeight: '45vh'}}>
        <TableHeader />
        <TableBody />
      </div>
    </>
  )
}
