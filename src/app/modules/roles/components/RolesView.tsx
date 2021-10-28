import React from 'react'
import { UsersTable } from '../../users/components/UsersTable'
import { ModalForm } from './ModalForm'

export const RolesView = () => {
  return (
    <>
      <div className='d-flex flex-column flex-xl-row'>
        <div className='flex-column flex-lg-row-auto w-100 w-lg-300px mb-10'>
          <div className='card card-flush'>
            <div className='card-header'>
              <div className='card-title'>
                <h2 className='mb-0'>Administrador</h2>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex flex-column text-gray-600'>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>Some Admin Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Financial Summaries only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit API Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Payouts only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit Disputes
                </div>
                <div className='d-flex align-items-center py-2 d-none'>
                  <span className='bullet bg-primary me-3'></span>
                  <em>and 3 more...</em>
                </div>
              </div>
            </div>
            <div className='card-footer pt-0'>
              <button
                type='button'
                className='btn btn-light btn-active-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_role'
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className='flex-lg-row-fluid ms-lg-10'>
          <div className='card card-flush mb-6 mb-xl-9'>
            <UsersTable stats='d-none'/>
          </div>
        </div>
      </div>
      <ModalForm/>
    </>
  )
}
