import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import { familiesTypes } from '../../../../../redux/types/types';
import { uiActions } from '../../../../../redux/actions/uiActions';
import { familiesActions } from '../../../../../redux/actions/familiesActions';

export const TableBodyItem = ({item} : any) => {
  
  const {
    fmId,
    fmDescription,
    fmStatus,
    fmCreatedAt,
    fmUpdatedAt,
    fmUsermod,
    fmIsActive,
  } = item

  const table: any = useSelector<RootState>(({table}) => table)
  const {
    tableBody: {tableHeads},
  } = table

  const dispatch = useDispatch()

  const handleView = (family: any) => {
    family.toEdit = false
    dispatch(uiActions.uiIsEditing(false))
    dispatch(uiActions.uiIsViewing(true))
    dispatch(familiesActions.SelectedFamily(family))
  }
  const handleEdit = (family: any) => {
    family.toEdit = true;
    dispatch(uiActions.uiIsViewing(false))
    dispatch(uiActions.uiIsEditing(true))
    dispatch(familiesActions.SelectedFamily(family))
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
        // dispatch({type: familiesTypes.Delete, payload: id})
        dispatch({type: familiesTypes.DeleteFromReducer, payload: {SelectedFamily: {fmId: id}}})
        Swal.fire('¡Eliminado!', 'La familia fue eliminada correctamente.', 'success')
      }
    })
  }

  return (
    <>
      <tr>
        {tableHeads.includes('id') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{fmId}</p>
          </td>
        )}
        {tableHeads.includes('descripción') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{fmDescription}</p>
          </td>
        )}
        {tableHeads.includes('estado') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{ fmStatus ? 'Activo' : 'Inactivo'}</p>
          </td>
        )}
        {tableHeads.includes('fecha de creación') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{fmCreatedAt}</p>
          </td>
        )}
        {tableHeads.includes('fecha actualizado') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{fmUpdatedAt}</p>
          </td>
        )}

        {tableHeads.includes('modificado por') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{fmUsermod}</p>
          </td>
        )}
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <button
              type='button'
              className='btn btn-icon btn-info btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal'
              onClick={() =>
                handleView({
                  fmId,
                  fmDescription,
                  fmStatus,
                  fmCreatedAt,
                  fmUpdatedAt,
                  fmUsermod,
                  fmIsActive,
                })
              }
            >
              <i className='fa fa-eye'></i>
            </button>
            <button
              type='button'
              className='btn btn-icon btn-success btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal'
              onClick={() =>
                handleEdit({
                  fmId,
                  fmDescription,
                  fmStatus,
                  fmCreatedAt,
                  fmUpdatedAt,
                  fmUsermod,
                  fmIsActive,
                })
              }
            >
              <i className='fa fa-edit'></i>
            </button>
            <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(fmId)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}
