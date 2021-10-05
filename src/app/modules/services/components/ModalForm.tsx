import React from 'react'
import { ServicesViewEditForm } from './ServicesViewEditForm';

export const ModalForm = () => {
  return (
    <>
      <div
        className='modal fade'
        id='kt_modal_services'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content bg-secondary'>
            <div className='modal-body p-13 card bg-secondary'>
              <div className='card-header border-0 p-0 ps-2 pe-4 mb-5'>
                <h2 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-2 mb-1'>Modal de Servicios</span>
                  <span className='text-muted mt-1 fw-bold fs-6'>
                    Informacion detallada de los Servicios
                  </span>
                </h2>
                <div className='card-toolbar'>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
              </div>
              <div className='card'>
                <ServicesViewEditForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}