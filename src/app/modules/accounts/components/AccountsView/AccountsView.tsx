import {PlansTable} from '../../../plans/components/PlansTable/PlansTable'
import {AccountsDetail} from './AccountsDetail'

export const AccountsView = () => {

  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <AccountsDetail
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
