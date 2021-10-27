import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import { servicesActions } from '../../../../../redux/actions/actions';
import {servicesTypes, usersTypes} from '../../../../../redux/types/types'
import { uiActions } from '../../../../../redux/actions/uiActions';
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers';

export const TableBodyItem = ({item} : any) => {
  
  const {
    servId,
    servDescription,
    servStartDate,
    servDueDate,
    servStatus,
    fmId,
  } = item

  const table: any = useSelector<RootState>(({table}) => table)
  const {
    tableBody: {tableHeads},
  } = table

  const dispatch = useDispatch()

  const handleView = (Platform: any) => {
    dispatch(uiActions.uiIsEditing(false))
    dispatch(uiActions.uiIsViewing(true))
    dispatch(servicesActions.SelectedService(Platform))
  }
  const handleEdit = (Platform: any) => {
    dispatch(uiActions.uiIsViewing(false))
    dispatch(uiActions.uiIsEditing(true))
    dispatch(servicesActions.SelectedService(Platform))
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
        dispatch({type: servicesTypes.Delete, payload: id})
        dispatch({type: servicesTypes.DeleteFromReducer, payload: {SelectedService: {servId: id}}})
        Swal.fire('¡Eliminado!', 'El usuario fue eliminado correctamente.', 'success')
      }
    })
  }

  return (
    <>
      <tr>
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
            {/* <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{servId}</p> */}
          </td>
        )}
        {tableHeads.includes('descripción') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{servDescription}</p>
          </td>
        )}

        {tableHeads.includes('fecha de creación') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{servStartDate}</p>
          </td>
        )}

        {tableHeads.includes('fecha vencimiento') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{servDueDate}</p>
          </td>
        )}

        {tableHeads.includes('estado') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{servStatus}</p>
          </td>
        )}
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <button
              type='button'
              className='btn btn-icon btn-info btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_Platforms'
              onClick={() =>
                handleView({
                  servId,
                  servDescription,
                  servStartDate,
                  servDueDate,
                  servStatus,
                  fmId,
                })
              }
            >
              <i className='fa fa-eye'></i>
            </button>
            <button
              type='button'
              className='btn btn-icon btn-success btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_Platforms'
              onClick={() =>
                handleEdit({
                  servId,
                  servDescription,
                  servStartDate,
                  servDueDate,
                  servStatus,
                  fmId,
                })
              }
            >
              <i className='fa fa-edit'></i>
            </button>
            <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(servId)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}