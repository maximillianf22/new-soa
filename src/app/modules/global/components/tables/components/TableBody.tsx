import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../setup';
import { UserModel } from '../../../models/UserModel';
import Swal from 'sweetalert2'
import { usersTypes } from '../../../../../redux/types/types';
import { userActions } from '../../../../../redux/actions/actions';


export const TableBody: React.FC = () => {
  const table: any = useSelector<RootState>(({table}) => table, shallowEqual)
  const {tableBody: {tableHeads, tableContent}} = table;
  const dispatch = useDispatch();
  const handleView = (user: any) => {
    user.toEdit = false;
    dispatch(userActions.SelectedUser(user))
  };
  const handleEdit = (user: any) => {
    user.toEdit = true;
    dispatch(userActions.SelectedUser(user))
  };
  const handleDelete = (id: any) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este usuario?',
      text: "No es posible revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: usersTypes.Delete, payload: id});
        Swal.fire(
          '¡Eliminado!',
          'El usuario fue eliminado correctamente.',
          'success'
        )
      }
    })
  };
  
    return (
        <>
             <div className='card-body py-3'>
                <div className='table-responsive'>
                  <table className='table table-row-dashed table-hover table-row-gray-300 align-middle gs-0 gy-3 mb-0'>
                    <thead>
                      <tr className='fw-bolder text-muted'>
                        {tableHeads && tableHeads.map( (th: string, i: number) => (
                          <th key={i} className='' >{th}</th>
                        ))}
                        <th className='min-w-80px text-end'>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableContent && tableContent.map(({ id, username, first_name, last_name, email, is_active, date_joined, init_date_validity, end_date_validity, rolId, password_change} : UserModel, i: number) => (
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

                            <button 
                              type="button" 
                              className="btn btn-icon btn-info btn-sm me-1" 
                              data-bs-toggle="modal" 
                              data-bs-target="#exampleModal"
                              onClick={() => handleView({id, username, first_name, last_name, email, is_active, date_joined, password_change, init_date_validity, end_date_validity, rolId})}
                            >
                              <i className='fa fa-eye'></i>
                            </button>
                              
                              
                              {/* <button
                               className='btn btn-icon btn-info btn-sm me-1'
                               onClick={() => handleView(id)}
                              >
                                <i className='fa fa-eye'></i>
                              </button> */}
                              <button 
                                type="button" 
                                className="btn btn-icon btn-success btn-sm me-1" 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                onClick={() => handleEdit({id, username, first_name, last_name, email, is_active, date_joined, password_change, init_date_validity, end_date_validity, rolId})}
                              >
                                <i className='fa fa-edit'></i>
                              </button>
                              {/* <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                                <i className='fa fa-edit'></i>
                              </a> */}
                              <button
                                className='btn btn-icon btn-danger btn-sm'
                                onClick={() => handleDelete(id)}
                              >
                                <i className='fa fa-trash'></i>
                              </button>
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
