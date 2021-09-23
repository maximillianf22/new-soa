import React from 'react'
import {AccountTabContent} from '../../../accounts/AccountTabContent'
import {PlansTabContent} from '../../../plans/PlansTabContent'
import {ServicesTabContent} from '../../../services/ServicesTabContent'
import { Content } from './components/Content'
import { TabItem } from './components/TabItem'

export const Tab = () => {
  return (
    <>
      <div className='card'>
        <div className=' border-0 pt-5 px-5 pb-0'>
          <ul className='nav w-100 h-35px'>
            <TabItem name='Cuentas' tabRef='.kt_tab_accounts' active />
            <TabItem name='Planes' tabRef='.kt_tab_plans' />
            <TabItem name='Servicios' tabRef='.kt_tab_services' />
          </ul>
        </div>
        <div className='card-body p-5 pt-0'>
          <div className='tab-content'>
            <Content
              idRef='kt_tab_accounts'
              active
              title='Cuentas'
              linkCreate='/soa/accounts/create'
              TabContent={AccountTabContent}
            />
            <Content
              idRef='kt_tab_plans'
              title='Planes'
              linkCreate='/soa/plans/create'
              TabContent={PlansTabContent}
            />
            <Content
              idRef='kt_tab_services'
              title='Servicios'
              linkCreate='/soa/services/create'
              TabContent={ServicesTabContent}
            />
          </div>
        </div>
      </div>
    </>
  )
}
