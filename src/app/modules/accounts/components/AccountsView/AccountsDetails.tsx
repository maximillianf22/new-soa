import React from 'react'
import {IAccountsDetails} from '../../Interfaces/models'
import {AccountDetailsHeader} from './AccountDetailsHeader'

export const AccountsDetails = ({
  vip,
  active,
  description,
  pilot,
  pilot_provider,
  count_vip,
  count_active,
  count_inactive,
}: IAccountsDetails) => {
  return (
    <>
      <div className='card'>
        <div className='card-body p-0'>
          <AccountDetailsHeader
            {...(vip ? {vip} : '')}
            {...(active ? {active} : '')}
            description={description}
            pilot_provider={pilot_provider}
            pilot={pilot}
          />
          <div
            className='shadow-xs card-rounded mx-9 mb-9 p-3 position-relative z-index-1 bg-white'
            style={{marginTop: '-80px'}}
          >
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-warning'>
                  <i className='fa fa-check-circle fa-lg text-black'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <a href='#' className='fs-5 text-hover-primary text-warning fw-bolder'>
                      Planes VIP
                    </a>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-warning pe-1'>{count_vip}</div>
                  </div>
                </div>
              </a>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-plus-circle fa-lg'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                      Planes Activos
                    </a>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-gray-800 pe-1'>{count_active}</div>
                  </div>
                </div>
              </a>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-0'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-minus-circle fa-lg'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                      Planes Inactivos
                    </a>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-gray-800 pe-1'>{count_inactive}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
