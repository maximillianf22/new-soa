import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../../setup'
import { plansActions } from '../../../../redux/actions/plansActions'
import {PlansTable} from '../../../plans/components/PlansTable/PlansTable'
import {AccountsDetail} from './AccountsDetail'

export const AccountsView = () => {

  const {accounts, selectedAccount}: any = useSelector<RootState>(({accounts}) => accounts)

  const {plans} = selectedAccount

  const dispatch = useDispatch()

  dispatch(plansActions.setAllReduxPlans(plans))

  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <AccountsDetail
            selectedAccount={selectedAccount}
            accounts={accounts}
            count_vip={78}
            count_active={78}
            count_inactive={78}
          />
        </div>
        <div className='col-9'>
          <PlansTable stats='d-none' />
        </div>
      </div>
    </>
  )
}
