import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../../../../../setup';
import { UserModel } from '../../../models/UserModel';


export const TableBody: React.FC = () => {
  const table: any = useSelector<RootState>(({table}) => table, shallowEqual)
  
  const {tableBody: {tableHeads, tableContent}} = table;

    return (
        <>
             {/* begin::Body */}
             <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                  {/* begin::Table */}
                  <table className='table table-row-dashed table-hover table-row-gray-300 align-middle gs-0 gy-3 mb-0'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fw-bolder text-muted'>
                        {tableHeads && tableHeads.map( (th: string, i: number) => (
                          <th key={i} className='' >{th}</th>
                        ))}
                        <th className='min-w-80px text-end'>Opciones</th>
                      </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                      {tableContent && tableContent.map(({ id, username, first_name, last_name, email, is_active, date_joined, rolId} : UserModel, i: number) => (
                        <tr key={i}>
                          {tableHeads.includes('id') && (
                            <td>
                              <a href='!#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                {id}
                              </a>
                            </td>
                          )}
                          {tableHeads.includes('usuario') && (
                            <td>
                              <a href='!#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                {username}
                              </a>
                            </td>
                          )}
                          {tableHeads.includes('nombre') && (
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='d-flex justify-content-start flex-column'>
                                <a href='!#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                  {first_name}
                                </a>
                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                  CC: 1007345398
                                </span>
                              </div>
                            </div>
                          </td>
                          )}
                          {tableHeads.includes('apellido') && (
                            <td>
                              <a href='!#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                {last_name}
                              </a>
                            </td>
                          )}
                          {tableHeads.includes('correo') && (
                            <td>
                              <a href='!#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                {email}
                              </a>
                            </td>
                          )}
                          
                          
                          {tableHeads.includes('activo') && (
                            <td>
                              <a href='!#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                {is_active}
                              </a>
                            </td>
                          )}
                          {tableHeads.includes('fecha creación') && (
                            <td>
                              <a href='!#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                {date_joined}
                              </a>
                            </td>
                          )}
                          {tableHeads.includes('rol') && (
                            <td>
                              <a href='!#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                {rolId}
                              </a>
                            </td>
                          )}
                          <td>
                            <div className='d-flex justify-content-end flex-shrink-0'>
                              <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                                <i className='fa fa-eye'></i>
                              </a>
                              <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                                <i className='fa fa-edit'></i>
                              </a>
                              <a href='!#' className='btn btn-icon btn-danger btn-sm'>
                                <i className='fa fa-trash'></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
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
