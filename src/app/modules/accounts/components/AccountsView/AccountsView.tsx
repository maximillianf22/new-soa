import React from 'react'
import { PlansTable } from '../../../plans/components/PlansTable/PlansTable'
import { AccountsDetails } from './AccountsDetails'

export const AccountsView = () => {
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <AccountsDetails />
        </div>
        <div className='col-9'>
          <PlansTable stats='d-none'/>
        </div>
      </div>
    </>
  )
}
