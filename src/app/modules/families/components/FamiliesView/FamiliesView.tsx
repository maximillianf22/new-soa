import React from 'react'
import {ServicesTable} from '../../../services/components/ServicesTable/ServicesTable'
import {FamiliesDetails} from './FamiliesDetails'

export const FamiliesView = () => {
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <FamiliesDetails
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
          <ServicesTable stats='d-none' />
        </div>
      </div>
    </>
  )
}
