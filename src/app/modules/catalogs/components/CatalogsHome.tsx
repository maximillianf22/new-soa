import React from 'react'
import { Tab } from './CatalogsTab/Tab'
import { Table } from './CatalogsTable/Table'

export const CatalogsHome = () => {
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <Tab />
        </div>
        <div className='col-9'>
          <Table />
        </div>
      </div>
    </>
  )
}
