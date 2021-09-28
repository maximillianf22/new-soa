import React from 'react'
import { IAccountsDetailsHeader } from '../../Interfaces/models'

export const AccountDetailsHeader = ({description, pilot, pilot_provider, active, vip}: IAccountsDetailsHeader) => {
  return (
    <>
      <div className={`card-header ribbon ribbon-top border-0 min-h-50px ${vip ? ('bg-warning') : ('bg-primary')}`}>
        <div className={`ribbon-label fw-bolder ${active ? ('bg-success') : ('bg-danger')}`}>{active ? ('Activo') : ('Inactivo')}</div>
        <div className='card-title text-white fw-bolder fs-4'>Detalle de la cuenta</div>
      </div>
      <div className={`px-9 pt-1 h-200px w-100  ${vip ? ('bg-warning') : ('bg-primary')}`}>
        <div className='d-flex text-center flex-column text-white pt-0'>
          <span className='fw-bolder fs-1 pt-1 text-nowrap'>{description}</span>
          <div className='row mt-4'>
            <div className='col-md-6 text-start'>
              <span className='fs-9 fw-bold text-uppercase'>Piloto</span>
              <br />
              <span className='fw-bold fs-4'>{pilot}</span>
            </div>
            <div className='col-md-6 text-end'>
              <span className='fs-8 fw-bold text-uppercase'>Proveedor</span>
              <br />
              <span className='fw-bold fs-4'>{pilot_provider}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
