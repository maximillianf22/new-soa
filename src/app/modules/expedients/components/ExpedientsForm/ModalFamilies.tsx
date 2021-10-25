import React from 'react'
import { ModalServices } from './ModalServices'

export const ModalFamilies= () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal'>
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
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-car fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Vehicular
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-ambulance fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Medica
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-home fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Hogar
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-balance-scale fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Legal
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-paw fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Mascotas
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-laptop fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  PC
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-plane fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Viajes
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-school fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Escolar
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-shield-alt fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Seguridad
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-hand-holding-usd fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Finanzas
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-road fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Asistencia Vial
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-3 my-3'>
                          <a data-bs-toggle="modal" data-bs-target="#kt_modal_services"  data-bs-dismiss='modal'>
                            <label className='btn btn-outline bg-secondary pt-15 text-cemnter active w-100 h-150px align-items-center '>
                              <span className='text-center'>
                                <i className='fa fa-boxes fs-4x text-dark'></i>
                              </span>
                              <span className='d-block fw-bold text-center mt-10'>
                                <span className='text-dark d-block fs-help mb-2'>
                                  Varios
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
    <ModalServices/>

    </>
  )
}
