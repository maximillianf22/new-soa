import React from 'react'
import {PlansTable} from '../../../plans/components/PlansTable/PlansTable'

export const PlatformsView = () => {
  return (
    <>
      <div className='background h-200px bg-primary mb-10'></div>
      <div className='row'>
        <div className='col-3'>
          <div className='card text-center pt-10 pb-7'>
            <h3 className='card-title align-items-start flex-column'>Addiuva</h3>
            <p className='text-muted'>Ayuda sin fronteras</p>
            <div className='row'>
              <div className='d-flex align-items-sm-center mb-7 px-10 py-3 my-3 text-start'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label'>
                    <i className='fa fa-users fs-1'></i>
                  </span>
                </div>
                <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                  <div className='flex-grow-1 me-2'>
                    <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
                      Usuarios
                    </a>
                    <span className='text-primary fw-bold d-block fs-7 '>Listado de Usuarios</span>
                  </div>
                  <span className='badge badge-primary fw-bolder py-3'>82</span>
                </div>
              </div>

              <div className='d-flex align-items-sm-center mb-7 px-10 py-3 my-3 text-start'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label'>
                    <i className='fa fa-box fs-1'></i>
                  </span>
                </div>
                <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                  <div className='flex-grow-1 me-2'>
                    <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
                      Cuentas
                    </a>
                    <span className='text-muted fw-bold d-block fs-7 '>Listado de Cuentas</span>
                  </div>
                  <span className='badge badge-primary fw-bolder py-3'>82</span>
                </div>
              </div>

              <div className='d-flex align-items-sm-center mb-7 px-10 py-3 my-3 text-start bg-light-primary'>
                <div className='symbol symbol-50px me-5 bg-white'>
                  <span className='symbol-label bg-white'>
                    <i className='fa fa-list fs-1 text-primary'></i>
                  </span>
                </div>
                <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                  <div className='flex-grow-1 me-2'>
                    <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
                      Planes
                    </a>
                    <span className='text-primary fw-bold d-block fs-7 '>Listado de Planes</span>
                  </div>
                  <span className='badge badge-primary fw-bolder py-3'>82</span>
                </div>
              </div>

              <div className='d-flex align-items-sm-center mb-7 px-10 py-3 my-3 text-start'>
                <div className='symbol symbol-50px me-5'>
                  <span className='symbol-label'>
                    <i className='fa fa-list-alt fs-1 '></i>
                  </span>
                </div>
                <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                  <div className='flex-grow-1 me-2'>
                    <a href='#' className='text-dark text-hover-primary fs-6 fw-bolder'>
                      Servicios
                    </a>
                    <span className=' fw-bold d-block fs-7 '>Listado de Servicios</span>
                  </div>
                  <span className='badge badge-primary fw-bolder py-3'>82</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-9'>
          <PlansTable stats='d-none' />
        </div>
      </div>
    </>
  )
}
