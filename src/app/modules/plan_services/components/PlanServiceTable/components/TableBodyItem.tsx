import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import {RootState} from '../../../../../../setup'
import { uiActions } from '../../../../../redux/actions/uiActions';
import { planServicesActions } from '../../../../../redux/actions/planServicesActions';
import { planServicesTypes } from '../../../../../redux/types/planServicesTypes';
import { Link } from 'react-router-dom';

export const TableBodyItem = ({item} : any) => {
  
  const {spId,spNumberOfEvents,spCost,spVehicle,spDataVehicular,spServApp,spThreePoints,spVideocall,spGroupService,spGroupEqualService,spReAsignProvider,spLogoUploadPath,spLabelForUser,spFrecuency,spConditionsDescription,servId,plId,pId,
  } = item

  const table: any = useSelector<RootState>(({table}) => table)
  const {
    tableBody: {tableHeads},
  } = table

  const dispatch = useDispatch()

  const handleView = (planService: any) => {
    dispatch(uiActions.uiIsEditing(false))
    dispatch(uiActions.uiIsViewing(true))
    dispatch(planServicesActions.SelectedPlanService(planService))
  }
  const handleEdit = (planService: any) => {
    dispatch(uiActions.uiIsViewing(false))
    dispatch(uiActions.uiIsEditing(true))
    dispatch(planServicesActions.SelectedPlanService(planService))
  }

  const handleDelete = (id: any) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este plan servicio?',
      text: 'No es posible revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({type: planServicesTypes.Delete, payload: id})
        dispatch({type: planServicesTypes.DeleteFromReducer, payload: {selectedPlanService: {spId: id}}})
        Swal.fire('¡Eliminado!', 'El plan servicio fue eliminado correctamente.', 'success')
      }
    })
  }

  
  return (
    <>
      <tr>
        {tableHeads.includes('id') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spId}</p>
          </td>
        )}
        {tableHeads.includes('Número de eventos') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spNumberOfEvents}</p>
          </td>
        )}
        {tableHeads.includes('Costo') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spCost}</p>
          </td>
        )}
        {tableHeads.includes('Vehículo') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spVehicle}</p>
          </td>
        )}
        {tableHeads.includes('Data vehicular') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spDataVehicular}</p>
          </td>
        )}
        {tableHeads.includes('Venta por app') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spServApp}</p>
          </td>
        )}
        {tableHeads.includes('Ruta de tres puntos') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spThreePoints}</p>
          </td>
        )}
        {tableHeads.includes('Video llamada') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spVideocall}</p>
          </td>
        )}
        {tableHeads.includes('Permite encoladas') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spGroupService}</p>
          </td>
        )}
        {tableHeads.includes('Asistencia simultanea') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spGroupEqualService}</p>
          </td>
        )}
        {tableHeads.includes('Reasignacion de proveedor') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spReAsignProvider}</p>
          </td>
        )}
        {tableHeads.includes('Logo') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spLogoUploadPath}</p>
          </td>
        )}
        {tableHeads.includes('Etiqueta') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spLabelForUser}</p>
          </td>
        )}
        {tableHeads.includes('Frecuencia') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spFrecuency}</p>
          </td>
        )}
        {tableHeads.includes('Descripcion del servicio') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{spConditionsDescription}</p>
          </td>
        )}
        {tableHeads.includes('Servicio') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{servId}</p>
          </td>
        )}
        {tableHeads.includes('Plan') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{plId}</p>
          </td>
        )}
        {tableHeads.includes('Moneda') && (
          <td>
            <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>{pId}</p>
          </td>
        )}
        <td>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <Link
              to='/plan-service/view'
              type='button'
              className='btn btn-icon btn-info btn-sm me-1'
              onClick={() =>
                handleView({spId,spNumberOfEvents,spCost,spVehicle,spDataVehicular,spServApp,spThreePoints,spVideocall,spGroupService,spGroupEqualService,spReAsignProvider,spLogoUploadPath,spLabelForUser,spFrecuency,spConditionsDescription,servId,plId,pId,
                })
              }
            >
              <i className='fa fa-eye'></i>
            </Link>
            <Link
              to='/plan-service/edit'
              type='button'
              className='btn btn-icon btn-success btn-sm me-1'
              onClick={() =>
                handleEdit({spId,spNumberOfEvents,spCost,spVehicle,spDataVehicular,spServApp,spThreePoints,spVideocall,spGroupService,spGroupEqualService,spReAsignProvider,spLogoUploadPath,spLabelForUser,spFrecuency,spConditionsDescription,servId,plId,pId,
                })
              }
            >
              <i className='fa fa-edit'></i>
            </Link>
            <button className='btn btn-icon btn-danger btn-sm' onClick={() => handleDelete(servId)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </td>
      </tr>
    </> 
  )
}