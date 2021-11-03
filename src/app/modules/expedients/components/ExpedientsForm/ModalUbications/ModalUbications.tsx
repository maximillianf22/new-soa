import React from 'react'
import {KTSVG} from '../../../../../../_metronic/helpers'
import { AssistancesUbications } from './AssistancesUbications'
import { ExpedientsUbications } from './ExpedientsUbications'
import { SACUbications } from './SACUbications'

export const ModalUbications = () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_ubications'>
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card' style={{minHeight: '70vh'}}>
                <div className='card-header border-0 py-0 my-0 mh-10px'>
                  <h2 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>
                      Listado de todas las Ubicaciones del afiliado
                      <p className='text-muted mt-1 fw-bold fs-7'>
                        En esta ventana tienes la lista de las Ubicaciones del afiliado selecciona
                        una
                      </p>
                    </span>
                  </h2>
                  <div className='card-toolbar'>
                    <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6 mb-0 px-0 mx-0 d-flex bd-highlight bg-light-dark border border-white border-5'>
                      <li className='nav-item flex-fill bd-highlight'>
                        <a
                          className='nav-link btn btn-flex btn-icon-gray-900 btn-text-gray-900 btn-active-primary px-4 m-0'
                          data-bs-toggle='tab'
                          href='#kt_tab_pane_1'
                        >
                          <span className='fs-5 fw-bolder'>SAC</span>
                        </a>
                      </li>
                      <li className='nav-item flex-fill bd-highlight'>
                        <a
                          className='nav-link btn btn-flex btn-icon-gray-900 btn-text-gray-900 btn-active-primary px-4 m-0'
                          data-bs-toggle='tab'
                          href='#kt_tab_pane_2'
                        >
                          <span className='fs-5 fw-bolder'>Asistencias</span>
                        </a>
                      </li>
                      <li className='nav-item flex-fill bd-highlight'>
                        <a
                          className='nav-link btn btn-flex btn-icon-gray-900 btn-text-gray-900 btn-active-primary px-4 m-0'
                          data-bs-toggle='tab'
                          href='#kt_tab_pane_3'
                        >
                          <span className='fs-5 fw-bolder'>Expedientes</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='w-100 card mt-0'>
                    <div className='tab-content' id='myTabContent'>
                      <div className='tab-pane fade active show' id='kt_tab_pane_1' role='tabpanel'>
                        <SACUbications />
                      </div>
                      <div className='tab-pane fade' id='kt_tab_pane_2' role='tabpanel'>
                        <AssistancesUbications />
                      </div>
                      <div className='tab-pane fade' id='kt_tab_pane_3' role='tabpanel'>
                        <ExpedientsUbications />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer p-0 m-0 border-0 pe-8'>
                  <button type='button' className='btn btn-primary px-20' data-bs-dismiss='modal'>
                    Guardar
                    <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
