import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import { providerActions } from '../../../../../redux/actions/providersActions'
import { providerTypes } from '../../../../../redux/types/providerTypes'
import { permitByModuleAndAction } from '../../../../permits/PermitFilter'

export const TableBodyItem = ({item}: any) => {
  const {
    provId,
    provFiscalName,
    provTradeName,
    dtId,
    provDocumentNumber,
    provInfrastructureAssessment,
    provLoyaltyAssessment,
    provSatisfactionAssessment,
    provActivityStartDate,
    provIsActive,
    provEmail1,
    provEmail2,
    provInternal,
    provAvatarUrl,
    provContractUrl,
    curId,
    provUserApp,
    provPasswordApp,
    provBaseType
  } = item

  const table: any = useSelector<RootState>(({table}) => table)
  const {permits}: any = useSelector<RootState>(({permits}) => permits)

  const {
    tableBody: {tableHeads},
  } = table

  const dispatch = useDispatch()

  const handleView = (provider: any) => {
    provider.toEdit = false
    dispatch(providerActions.selectedProvider(provider))
  }
  const handleEdit = (provider: any) => {
    provider.toEdit = true
    dispatch(providerActions.selectedProvider(provider))
  }
  const handleDelete = (id: any) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este proveedor?',
      text: 'No es posible revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: providerTypes.delete, payload: id})
        Swal.fire('¡Eliminado!', 'El proveedor fue eliminado correctamente.', 'success')
      }
    })
  }

  return (
    <>
      <tr>
        {tableHeads.includes('id') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{provId}</p>
          </td>
        )}
        {tableHeads.includes('Razón social') && (
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
        {tableHeads.includes('Nombre jurídico') && (
          <td>
            <div className='d-flex align-items-center'>
              <div className='d-flex justify-content-start flex-column'>
                <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{provTradeName}</p>
                <span className='text-muted fw-bold text-muted d-block fs-7'>CC: {provDocumentNumber}</span>
              </div>
            </div>
          </td>
        )}
        {tableHeads.includes('Correo') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{provEmail1}</p>
          </td>
        )}
        {tableHeads.includes('Contacto') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{provContractUrl}</p>
          </td>
        )}

        {tableHeads.includes('Usuario app') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{provUserApp}</p>
          </td>
        )}
        {/* {tableHeads.includes('fecha creación') && (
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
          { permitByModuleAndAction(permits, '_Providers_', 'show') && (
            <a
            href='edit'
              className='btn btn-icon btn-info btn-sm me-1'
              onClick={() =>
                handleView(item)
              }
              >
                <i className='fa fa-eye'></i>
            </a>
          )}
          { permitByModuleAndAction(permits, '_Providers_', 'edit') && (
            <button
              type='button'
              className='btn btn-icon btn-success btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={() =>
                handleEdit(item)
              }
              >
                <i className='fa fa-edit'></i>
            </button>
          )}
          { permitByModuleAndAction(permits, '_Providers_', 'delete') && (
            <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(provId)}>
              <i className='fa fa-trash'></i>
            </button>
          )}
          </div>
        </td>
      </tr>
    </>
  )
}
