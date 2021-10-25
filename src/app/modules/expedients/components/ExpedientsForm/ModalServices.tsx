import React from 'react'
import { ModalAsistencia } from './ModalAsistencia'

export const ModalServices = () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_services'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-body'>
                  <div className='text-center w-100 '>
                    <h2 className='fw-bolder text-center text-dark'>
                      Familias disponibles
                    </h2>
                  </div>
                  <div className='w-100 card mt-7'>
                    <div className='fv-row'>
                      <div className='row'>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='text-center btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-gas-pump fs-4x text-dark'></i>
                              </span>
                              <span className='d-block  text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-0'>
                                  Gasfinteria 
                                </span>
                                <span className='text-dark fw-bold d-block fs-help lh-1 mb-2'>
                                  Disponibles 4 
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-bolt fs-4x text-dark'></i>
                              </span>
                              <span className='d-block  text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-0'>
                                  Electricidad: 
                                </span>
                                <span className='text-dark fw-bold d-block fs-help lh-1 mb-2'>
                                  Disponibles 5 
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-paint-roller fs-4x text-dark'></i>
                              </span>
                              <span className='d-block  text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-0'>
                                  Pintura: 
                                </span>
                                <span className='text-dark fw-bold d-block fs-help lh-1 mb-2'>
                                  Disponibles 6 
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-user-shield fs-4x text-dark'></i>
                              </span>
                              <span className='d-block  text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-0'>
                                  Seguridad: 
                                </span>
                                <span className='text-dark fw-bold d-block fs-help lh-1 mb-2'>
                                  Disponibles 7
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-user-cog fs-4x text-dark'></i>
                              </span>
                              <span className='d-block  text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-0'>
                                  Tecnico: 
                                </span>
                                <span className='text-dark fw-bold d-block fs-help lh-1 mb-2'>
                                  Disponibles 8
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-user-md fs-4x text-dark'></i>
                              </span>
                              <span className='d-block  text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-0'>
                                  Medico: 
                                </span>
                                <span className='text-dark fw-bold d-block fs-help lh-1 mb-2'>
                                  Disponibles 9
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_asistencia"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer p-0 m-0 border-0 pe-8'>
                  <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAsistencia/>
    </>
  )
}
