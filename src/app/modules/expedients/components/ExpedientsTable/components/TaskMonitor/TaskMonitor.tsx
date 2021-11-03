import React from 'react'
import { ITaskMonitor } from '../../../../Interfaces/models'
import { Calls } from './Calls'
import { Tasks } from './Tasks'

export const TaskMonitor = ({stats}: ITaskMonitor) => {
  return (
    <>
      <div className={`row pb-5 ${stats}`}>
        <div className='col-md-6'>
          <Tasks/>
        </div>
        <div className='col-md-6'>
          <Calls/>
        </div>
      </div>
    </>
  )
}
