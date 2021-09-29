import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import { accountsActions } from '../../../../../redux/actions/accountsActions'
import { uiActions } from '../../../../../redux/actions/uiActions'
import { accountTypes } from '../../../../../redux/types/accountTypes'

export const TableBodyItem = ({item} : any) => {
  
  const {
    acId,
    acName,
    acCreationDateUtc,
    acPilotNumber,
    acStatus,
    acIsVip,
    acHasBeneficiaries,
    acPilotProviderNumber
  } = item

  const table: any = useSelector<RootState>(({table}) => table)
  const {
    tableBody: {tableHeads},
  } = table

  const dispatch = useDispatch()

  const handleView = () => {
    dispatch(uiActions.uiIsEditing(false))
    dispatch(uiActions.uiIsViewing(true))
    dispatch(accountsActions.selectedAccount(item))
  }
  const handleEdit = () => {
    dispatch(uiActions.uiIsViewing(false))
    dispatch(uiActions.uiIsEditing(true))
    dispatch(accountsActions.selectedAccount(item))
  }
  const handleDelete = (id: any) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar esta cuenta?',
      text: 'No es posible revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: accountTypes.delete, payload: item})
      }
    })
  }

  const handleVipClassName = () => {
    return acIsVip ?
    'text-warning fw-bolder text-hover-primary d-block fs-6'
    :
    'text-dark fw-bolder text-hover-primary d-block fs-6'
  }

  return (
    <>
      <tr>
        {tableHeads.includes('Id') && (
          <td>
            <p className={handleVipClassName()}>{acId}</p>
          </td>
        )}
        {tableHeads.includes('Nombre') && (
          <td>
            <div className='d-flex align-items-center'>
              <div className='d-flex justify-content-start flex-column'>
                <p className={handleVipClassName()}>{acName}</p>
              </div>
            </div>
          </td>
        )}
        {tableHeads.includes('Número de piloto') && (
          <td>
            <p className={handleVipClassName()}>{acPilotNumber}</p>
          </td>
        )}
        {tableHeads.includes('Número de proveedor piloto') && (
          <td>
            <p className={handleVipClassName()}>{acPilotProviderNumber}</p>
          </td>
        )}
        {tableHeads.includes('Vip') && (
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              disabled
              checked = {acIsVip}
            />
          </td>
        )}
        {tableHeads.includes('Fecha de creación') && (
          <td>
            <p className={handleVipClassName()}>{acCreationDateUtc}</p>
          </td>
        )}
        {tableHeads.includes('Beneficiarios') && (
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              disabled
              checked = {acHasBeneficiaries}
            />
          </td>
        )}
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <button
              type='button'
              className='btn btn-icon btn-info btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#accountCreateUpdateModal'
              onClick={() =>
                handleView()
              }
            >
              <i className='fa fa-eye'></i>
            </button>
            <button
              type='button'
              className='btn btn-icon btn-success btn-sm me-1'
              data-bs-toggle='modal'
              data-bs-target='#accountCreateUpdateModal'
              onClick={ () =>
                handleEdit()
              }
            >
              <i className='fa fa-edit'></i>
            </button>
            <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(acId)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}
