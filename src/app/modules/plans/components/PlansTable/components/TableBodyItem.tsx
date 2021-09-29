import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import {userActions} from '../../../../../redux/actions/actions'
import {usersTypes} from '../../../../../redux/types/types'

export const TableBodyItem = ({item} : any) => {
  
  const {
    plId,
    plName,
    plEventsShared,
    plIsVip,
    plDueDate,
  } = item

  const table: any = useSelector<RootState>(({table}) => table)
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
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{plId}</p>
          </td>
        )}
        {tableHeads.includes('Nombre') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{plName}</p>
          </td>
        )}
        {tableHeads.includes('Eventos compartidos') && (
          <td>
            <div className='d-flex align-items-center'>
              <div className='d-flex justify-content-start flex-column'>
                <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{plEventsShared}</p>
              </div>
            </div>
          </td>
        )}
        {tableHeads.includes('Vip') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{plIsVip}</p>
          </td>
        )}
        {tableHeads.includes('Due date') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{plDueDate}</p>
          </td>
        )}

        {/* {tableHeads.includes('activo') && (
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
        )} */}
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <button
              type='button'
              className='btn btn-icon btn-info btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={() =>
                handleView({
                  plId,
                  plName,
                  plEventsShared,
                  plIsVip,
                  plDueDate,
                })
              }
            >
              <i className='fa fa-eye'></i>
            </button>
            <button
              type='button'
              className='btn btn-icon btn-success btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={() =>
                handleEdit({
                  plId,
                  plName,
                  plEventsShared,
                  plIsVip,
                  plDueDate,
                })
              }
            >
              <i className='fa fa-edit'></i>
            </button>
            <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(plId)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}
