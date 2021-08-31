import React from 'react';

type Props = {
  tableHeads: string[]
}

export const TableBody = ({tableHeads}: Props) => {
    return (
        <>
             {/* begin::Body */}
             <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                  {/* begin::Table */}
                  <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 mb-0'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fw-bolder text-muted'>
                        {tableHeads.map((th) => {
                          <h1>HOoLa</h1>
                          
                        })}
                        {/* <th className='min-w-150px'>Nombre</th>
                        <th className='min-w-130px'>Correo</th>
                        <th className='min-w-130px'>Usuario</th>
                        <th className='min-w-130px'>Rol</th>
                        <th className='min-w-100px text-end'>Opciones</th> */}
                      </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                Ana Simmons
                              </a>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>
                                CC: 1007345398
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Ana@demo.com
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            ASOANG
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Coordinador
                          </a>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                              <i className='fa fa-eye'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                Ana Simmons
                              </a>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>
                                CC: 1007345398
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Ana@demo.com
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            ASOANG
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Coordinador
                          </a>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                              <i className='fa fa-eye'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                Ana Simmons
                              </a>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>
                                CC: 1007345398
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Ana@demo.com
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            ASOANG
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Coordinador
                          </a>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                              <i className='fa fa-eye'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                Ana Simmons
                              </a>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>
                                CC: 1007345398
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Ana@demo.com
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            ASOANG
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Coordinador
                          </a>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                              <i className='fa fa-eye'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                Ana Simmons
                              </a>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>
                                CC: 1007345398
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Ana@demo.com
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            ASOANG
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Coordinador
                          </a>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                              <i className='fa fa-eye'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                Ana Simmons
                              </a>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>
                                CC: 1007345398
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Ana@demo.com
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            ASOANG
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Coordinador
                          </a>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                              <i className='fa fa-eye'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                Ana Simmons
                              </a>
                              <span className='text-muted fw-bold text-muted d-block fs-7'>
                                CC: 1007345398
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Ana@demo.com
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            ASOANG
                          </a>
                        </td>
                        <td>
                          <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                            Coordinador
                          </a>
                        </td>
                        <td>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                              <i className='fa fa-eye'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    {/* end::Table body */}
                  </table>
                  {/* end::Table */}
                </div>
                {/* end::Table container */}
              </div>
              {/* begin::Body */}
        </>
    )
}
