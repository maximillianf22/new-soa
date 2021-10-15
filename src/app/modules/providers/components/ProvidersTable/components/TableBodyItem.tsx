import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {userActions} from '../../../../../redux/actions/actions'
import {usersTypes} from '../../../../../redux/types/types'
import { permitByModuleAndAction } from '../../../../permits/PermitFilter'

export const TableBodyItem = ({item}: any) => {
  const {
    id,
    username,
    first_name,
    last_name,
    email,
    is_active,
    date_joined,
    init_date_validity,
    end_date_validity,
    rolId,
    password_change,
  } = item

  const table: any = useSelector<RootState>(({table}) => table)
  const {permits}: any = useSelector<RootState>(({permits}) => permits)

  const {
    tableBody: {tableHeads},
  } = table

  const dispatch = useDispatch()

  const handleView = (user: any) => {
    user.toEdit = false
    dispatch(userActions.SelectedUser(user))
  }
  const handleEdit = (user: any) => {
    user.toEdit = true
    dispatch(userActions.SelectedUser(user))
  }
  const handleDelete = (id: any) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este usuario?',
      text: 'No es posible revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: usersTypes.Delete, payload: id})
        Swal.fire('¡Eliminado!', 'El usuario fue eliminado correctamente.', 'success')
      }
    })
  }

  return (
    <>
      <tr>
        {tableHeads.includes('id') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{id}</p>
          </td>
        )}
        {tableHeads.includes('usuario') && (
          <td>
              <div className='symbol symbol-45px me-2'>
                <span className='symbol-label'>
                  <img
                    src={toAbsoluteUrl('/media/svg/brand-logos/kickstarter.svg')}
                    className='h-50 align-self-center'
                    alt=''
                  />
                </span>
              </div>
              {/* Esto esta comentado para efectos de presentacion */}
            {/* <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{username}</p> */}
          </td>
        )}
        {tableHeads.includes('nombre') && (
          <td>
            <div className='d-flex align-items-center'>
              <div className='d-flex justify-content-start flex-column'>
                <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{first_name}</p>
                <span className='text-muted fw-bold text-muted d-block fs-7'>CC: 1007345398</span>
              </div>
            </div>
          </td>
        )}
        {tableHeads.includes('apellido') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{last_name}</p>
          </td>
        )}
        {tableHeads.includes('correo') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{email}</p>
          </td>
        )}

        {tableHeads.includes('activo') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{is_active}</p>
          </td>
        )}
        {tableHeads.includes('fecha creación') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{date_joined}</p>
          </td>
        )}
        {tableHeads.includes('rol') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{rolId}</p>
          </td>
        )}
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
          { permitByModuleAndAction(permits, '_Providers_', 'show') && (
            <button
              type='button'
              className='btn btn-icon btn-info btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={() =>
                handleView({
                  id,
                  username,
                  first_name,
                  last_name,
                  email,
                  is_active,
                  date_joined,
                  password_change,
                  init_date_validity,
                  end_date_validity,
                  rolId,
                })
              }
              >
                <i className='fa fa-eye'></i>
            </button>
          )}
          { permitByModuleAndAction(permits, '_Providers_', 'edit') && (
            <button
              type='button'
              className='btn btn-icon btn-success btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={() =>
                handleEdit({
                  id,
                  username,
                  first_name,
                  last_name,
                  email,
                  is_active,
                  date_joined,
                  password_change,
                  init_date_validity,
                  end_date_validity,
                  rolId,
                })
              }
              >
                <i className='fa fa-edit'></i>
            </button>
          )}
          { permitByModuleAndAction(permits, '_Providers_', 'delete') && (
            <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(id)}>
              <i className='fa fa-trash'></i>
            </button>
          )}
          </div>
        </td>
      </tr>
    </>
  )
}
