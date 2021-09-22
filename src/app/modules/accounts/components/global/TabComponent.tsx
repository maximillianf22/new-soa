import React from 'react'
import {Tab} from './Tab'
import { TabContent } from '../catalogs/TabContent'
import {TabHead} from './TabHead'

export const TabComponent = () => {
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <div className=' border-0 pt-5 px-5 pb-0'>
              <ul className='nav w-100 h-35px'>
                <TabHead name='Cuentas' tabRef='#kt_tab_accounts' active='active' />
              </ul>
            </div>
            <div className='card-body p-5 pt-0'>
              <div className='tab-content'>
                <Tab idRef='kt_tab_accounts' active  title='Cuentas' TabContent={TabContent} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='card'>
            <div className='card-body pt-4'>
              <div className='container-custom'>
                <div className='card-header border-0 p-0'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Listado de Usuario</span>
                    <span className='text-muted mt-1 fw-bold fs-7'>234 Usuario registrados</span>
                  </h3>
                </div>
                <div className='tab-content'>
                  <div className='tab-pane fade' id='kt_table_1'>
                    Referencia 1
                  </div>
                  <div className='tab-pane fade' id='kt_table_2'>
                    Referencia 2
                  </div>
                  <div className='tab-pane fade' id='kt_table_3'>
                    Referencia 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
