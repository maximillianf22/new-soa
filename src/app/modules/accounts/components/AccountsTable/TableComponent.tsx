import React from 'react'
import {Stats} from './components/Stats'
import {TableBody} from './components/TableBody'
import {TableHeader} from './components/TableHeader'

export const TableComponent: React.FC = () => {
  return (
    <>
      <Stats title='Cuentas' />
      <div className='card'>
        <div className='card-body'>
          <TableHeader />
          <TableBody />
        </div>
      </div>
    </>
  )
}
