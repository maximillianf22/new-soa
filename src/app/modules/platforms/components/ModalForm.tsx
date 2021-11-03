import React from 'react'
import { PlatformsForm } from './PlatformsForm'

export const ModalForm = () => {
  return (
    <>
      <div
        className='modal fade'
        id='kt_modal_platforms'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-lg'>
          <div className='modal-content bg-secondary'>
            <div className='modal-body p-13 card bg-secondary'>
              <div className='card-header border-0 p-0 ps-2 pe-4 mb-5'>
                <h2 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-2 mb-1'>
                    Creacion de Clientes o Plataformas
                  </span>
                  <span className='text-muted mt-1 fw-bold fs-6'>
                    Clientes o plataformas con acceso al software
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
                <PlatformsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
