import {Form, Formik, FormikProps} from 'formik'
import React from 'react'
import {Button} from 'react-bootstrap-v5'
import {InputCustom} from '../../../global/components/inputs'
import {initialValues} from '../Helpers'
import { ModalSACTableRegular } from './ModalSACTableRegular'
import { ModalSACTableVIP } from './ModalSACTableVIP'

export const ModalSAC = () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_SAC'>
        <div className='modal-dialog modal-dialog-centered modal-xl'>
          <div className='modal-content bg-secondary'>
            <div className='modal-body p-13 card bg-secondary'>
              <div className='card-header border-0 p-0 ps-2 pe-4 mb-5'>
                <h2 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-2 mb-1'>
                    SAC Listado y busqueda de afiliados
                  </span>
                  <span className='text-muted mt-1 fw-bold fs-6'>
                    Informacion detallada y selección de los Afiliados
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
                <div className='card-body rounded'>
                  <div className='row'>
                    <div className='col-6'>
                      <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        onSubmit={(values) => {}}
                      >
                        {(props: FormikProps<any>) => (
                          <Form>
                            <div className='d-flex bd-highlight w-100 mb-10'>
                              <div className='pe-3 flex-fill bd-highlight w-100'>
                                <InputCustom type='text' name='SAC' label='Buscar afiliado' />
                              </div>
                              <div className='px-0 flex-fill bd-highlight mt-10'>
                                <Button className='btn btn-icon btn-info btn-form'>
                                  <i className='fa fa-filter'></i>
                                </Button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <ul
                      className='nav nav-pills mb-0 col-2 offset-4 text-end mt-11 h-35px bg-secondary rounded'
                      id='pills-tab'
                      role='tablist'
                    >
                      <li className='nav-item d-grid gap-2' role='presentation'>
                        <button className='nav-link active btn btn-active-primary m-0 py-2 fw-bold px-3' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#pills-regular' type='button' role='tab' aria-controls='pills-home' aria-selected='true' >
                          Normales
                        </button>
                      </li>
                      <li className='nav-item d-grid gap-2' role='presentation'>
                        <button className='nav-link btn btn-active-primary m-0 py-2 fw-bold' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='#pills-vip' type='button' role='tab' aria-controls='pills-profile' aria-selected='false'>
                          VIP
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className='tab-content' id='pills-tabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='pills-regular'
                      role='tabpanel'
                      aria-labelledby='pills-regular-tab'
                    >
                      <ModalSACTableRegular />
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-vip'
                      role='tabpanel'
                      aria-labelledby='pills-vip-tab'
                    >
                      <ModalSACTableVIP />
                    </div>
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
