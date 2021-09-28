import React from 'react'
import {PlansTable} from '../../../plans/components/PlansTable/PlansTable'
import {AccountsDetails} from './AccountsDetails'

export const AccountsView = () => {
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <AccountsDetails
            count_vip={78}
            count_active={78}
            count_inactive={78}
            description='Detalle de la cuenta'
            pilot='39763876'
            pilot_provider='39763876'
            active
          />
        </div>
        <div className='col-9'>
          <PlansTable stats='d-none' />
        </div>
      </div>
    </>
  )
}
