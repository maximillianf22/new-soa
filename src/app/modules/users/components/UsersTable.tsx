import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { tableActionTypes, tableActions } from '../../global/components/tables/Redux/TableRedux';
import {TableComponent} from '../../global/components/tables/TableComponent'
import {actions, actionTypes } from '../redux/UsersRedux'
import { RootState } from '../../../../setup/redux/RootReducer';

export const UsersTable = () => {
  const dispatch = useDispatch();

  const users: any = useSelector<RootState>(({users}) => users.users)

  useEffect(() => {
    
    dispatch({type: actionTypes.AsyncLoad})
    if(users){
      dispatch({type: tableActionTypes.Load, payload: {
        tableHeader: {
          title: 'Usuario',
          count: 234,
          btnLink: '/usuarios/crear',
          btnModal: ''
        },
        tableBody: {
            tableHeads: ['Nombre','Correo','Usuario','Rol'],
            tableContent: users
        }
      }})
    }

    return () => {
      dispatch(actions.clear())
      dispatch(tableActions.clear())
    }

}, [dispatch])// eslint-disable-line 

  return (
    <>
      <TableComponent />
      <div className='modal fade' tabIndex={-1} id='kt_modal_2'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-body'>
                  <div className='pb-10 pb-lg-15 '>
                    <h2 className='fw-bolder d-flex align-items-center text-dark'>
                      Ahora puedes seleccionar el tipo de usuario que quieres crear.
                      <i
                        className='fas fa-exclamation-circle ms-2 fs-7'
                        data-bs-toggle='tooltip'
                        title='Seleccione el tipo de usuario, Regular o Multicliente'
                      ></i>
                    </h2>
                  </div>
                  <div className='w-100 card mt-7'>
                    <div className='fv-row'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <a href='/usuarios/crear-regular'>
                            <label className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10 active'>
                              <span className='svg-icon svg-icon-3x me-5'>
                                <i className='fa fa-user fs-1'></i>
                              </span>
                              <span className='d-block fw-bold text-start'>
                                <span className='text-dark fw-bolder d-block fs-4 mb-2'>
                                  Usuario Regular
                                </span>
                                <span className='text-gray-400 fw-bold fs-6'>
                                  Usuario normal con acceso a un solo cliente o plataforma
                                </span>
                              </span>
                            </label>
                          </a>
                        </div>
                        <div className='col-lg-6'>
                          <a href='/usuarios/crear-multiplataforma'>
                            <label className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'>
                              <span className='svg-icon svg-icon-3x me-5'>
                                <i className='fa fa-globe-americas fs-1'></i>
                              </span>
                              <span className='d-block fw-bold text-start'>
                                <span className='text-dark fw-bolder d-block fs-4 mb-2'>
                                  Usuario Multiplataforma
                                </span>
                                <span className='text-gray-400 fw-bold fs-6'>
                                  Usuario especial que tiene acceso a varios clientes o plataformas
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
    </>
  )
}
