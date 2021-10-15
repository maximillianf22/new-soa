import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import { servicesActions } from '../../../../../redux/actions/actions';
import {servicesTypes, usersTypes} from '../../../../../redux/types/types'
import { uiActions } from '../../../../../redux/actions/uiActions';
import { permitByModuleAndAction } from '../../../../permits/PermitFilter';

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
  const {permits}: any = useSelector<RootState>(({permits}) => permits)

  const {
    tableBody: {tableHeads},
  } = table

  const dispatch = useDispatch()

  const handleView = (service: any) => {
    dispatch(uiActions.uiIsEditing(false))
    dispatch(uiActions.uiIsViewing(true))
    dispatch(servicesActions.SelectedService(service))
  }
  const handleEdit = (service: any) => {
    dispatch(uiActions.uiIsViewing(false))
    dispatch(uiActions.uiIsEditing(true))
    dispatch(servicesActions.SelectedService(service))
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
        dispatch({type: servicesTypes.DeleteFromReducer, payload: {selectedService: {servId: id}}})
        Swal.fire('¡Eliminado!', 'El usuario fue eliminado correctamente.', 'success')
      }
    })
  }

  return (
    <>
      <tr>
        {tableHeads.includes('id') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{servId}</p>
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
            { permitByModuleAndAction(permits, '_Services_', 'show') && (
              <button
                type='button'
                className='btn btn-icon btn-info btn-sm me-1'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_services'
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
            )}
            { permitByModuleAndAction(permits, '_Services_', 'edit') && (
              <button
                type='button'
                className='btn btn-icon btn-success btn-sm me-1'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_services'
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
            )}
            { permitByModuleAndAction(permits, '_Services_', 'delete') && (
              <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(servId)}>
                <i className='fa fa-trash'></i>
              </button>
            )}
          </div>
        </td>
      </tr>
    </>
  )
}