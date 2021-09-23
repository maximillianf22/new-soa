import React from 'react'
import {IStats} from '../../../Interfaces/models'
import {StatsItem} from './StatsItem'

export const Stats = ({title}: IStats) => {
  return (
    <>
      <div className='row pb-5'>
        <StatsItem title={title} state='Registrados' count={89} />
        <StatsItem title={title} state='Activos' count={89} />
        <StatsItem title={title} state='Inactivos' count={89} />
        <StatsItem title={title} state='Inhabilitados' count={89} />
      </div>
    </>
  )
}
