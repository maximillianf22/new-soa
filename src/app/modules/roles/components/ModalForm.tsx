import React from 'react'
import { RolesForm } from './RolesForm'

export const ModalForm = () => {
  return (
    <>
      <div
        className='modal fade show'
        id='kt_modal_role'
        aria-modal='true'
        role='dialog'
      >
        <div className='modal-dialog modal-dialog-centered mw-750px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2 className='fw-bolder'>Configurar Roles</h2>
              <div
                className='btn btn-icon btn-sm btn-active-icon-primary'
                data-kt-roles-modal-action='close'
              >
                <span className='svg-icon svg-icon-1'>
                  <i className='fa fa-times'></i>
                </span>
              </div>
            </div>
            <div className='modal-body scroll-y mx-lg-5 my-4'>
                <RolesForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
