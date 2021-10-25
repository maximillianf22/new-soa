import React from 'react'

export const ModalOptions = () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_options'>
        <div className='modal-dialog modal-dialog-centered modal-sm'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card'>
                <div className='card-body p-0'>
                  <div className='text-center w-100 '>
                    <h2 className='fw-bolder text-center text-dark'>Listados de opciones</h2>
                    <p className='text-muted'>
                      Opciones de las preguntas de tipo Selección
                    </p>
                  </div>

                  <table className='table table-borderless table-sm mb-0'>
                    <thead>
                      <tr className='fw-bolder text-muted bg-light text-uppercase'>
                        <th scope='col' className='ps-4'>
                          Opción
                        </th>
                        <th scope='col'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='px-4'>
                        <td scope='row' className='pt-4 fw-bolder fs-5 w-75'>
                          Masculino
                        </td>
                        <td>
                          <div className='row'>
                            <div className='col-6 px-0'>
                              <button className='btn btn-sm btn-sm-mod btn-success h-30px w-30px px-3 py-2'>
                                <i className='fa fa-edit m-0'></i>
                              </button>
                            </div>
                            <div className='col-6 px-0'>
                              <button className='btn btn-sm btn-sm-mod btn-danger h-30px w-30px px-3 py-2'>
                                <i className='fa fa-times m-0'></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className='px-4'>
                        <td scope='row' className='pt-4 fw-bolder fs-5 w-75'>
                          Femenino
                        </td>
                        <td>
                          <div className='row'>
                            <div className='col-6 px-0'>
                              <button className='btn btn-sm btn-sm-mod btn-success h-30px w-30px px-3 py-2'>
                                <i className='fa fa-edit m-0'></i>
                              </button>
                            </div>
                            <div className='col-6 px-0'>
                              <button className='btn btn-sm btn-sm-mod btn-danger h-30px w-30px px-3 py-2'>
                                <i className='fa fa-times m-0'></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className='px-4'>
                        <td scope='row' className='pt-4 fw-bolder fs-5 w-75'>
                          Etapa 7
                        </td>
                        <td>
                          <div className='row'>
                            <div className='col-6 px-0'>
                              <button className='btn btn-sm btn-sm-mod btn-success h-30px w-30px px-3 py-2'>
                                <i className='fa fa-edit m-0'></i>
                              </button>
                            </div>
                            <div className='col-6 px-0'>
                              <button className='btn btn-sm btn-sm-mod btn-danger h-30px w-30px px-3 py-2'>
                                <i className='fa fa-times m-0'></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className='px-4 py-0'>
                        <td scope='row' className='py-0 fw-bolder fs-5 w-75 d-grid gap-2'>
                          <button className='btn btn-sm btn-sm-mod btn-secondary btn-active-info h-30px w-30px px-3 py-2 ms-auto'>
                            <i className='fa fa-plus m-0'></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='modal-footer p-0 m-0 border-0 pe-0'>
                <button type='button' className='btn btn-primary btn-sm m-0' data-bs-dismiss='modal'>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
