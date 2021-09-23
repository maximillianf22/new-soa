import React from 'react'
import { IStatsItem } from '../../../Interfaces/models'

export const StatsItem = ({title, state, count}: IStatsItem) => {
  return (
    <>
      <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
        <div className='card h-100px p-5'>
          <div className='d-flex bd-highlight'>
            <div className='p-0 w-100 bd-highlight'>
              <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>{title}</p>
              <h1>{state}</h1>
            </div>
            <div className='p-0 flex-shrink-1 bd-highlight '>
              <h1 className='m-0 text-white rounded-circle bg-primary p-4'>{count}</h1>
            </div>
          </div>
          <p className='text-muted fs-7 fw-light text-nowrap my-2'>
            {title} {state} en la platforma
          </p>
        </div>
      </div>
    </>
  )
}
