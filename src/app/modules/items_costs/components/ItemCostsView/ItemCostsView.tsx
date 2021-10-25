import React from 'react'
import {PlanServiceTable} from '../../../plan_services/components/PlanServiceTable/PlanServiceTable'
import {ItemCostsDetails} from './ItemCostsDetails'

export const ItemCostsView = () => {
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <ItemCostsDetails
            active
            count_vip={78}
            count_active={78}
            count_inactive={78}
            description='Detalle de la familia'
            modified_by='userr'
            created_at='12-02-1999'
            updated_at='12-02-1999'
          />
        </div>
        <div className='col-9'>
          <PlanServiceTable stats='d-none' />
        </div>
      </div>
    </>
  )
}
