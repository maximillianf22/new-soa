import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions'
import { tableTypes, servicesTypes } from '../../../../redux/types/types';
import { IPlanServiceTable } from '../../Interfaces/models'
import { TableComponent } from './components/TableComponent'
import { planServicesTypes } from '../../../../redux/types/planServicesTypes';
import { planTypes } from '../../../../redux/types/planTypes';

export const PlanServiceTable = ({stats}: IPlanServiceTable) => {
  const dispatch = useDispatch()

  const planServices: any = useSelector<RootState>(({planServices}) => planServices.planServices)

  const tableHeads = [
    'id',
    'Número de eventos',
    'Costo',
    'Vehículo',
    'Data vehicular',
    'Venta por app',
    'Ruta de tres puntos',
    'Video llamada',
    'Permite encoladas',
    'Asistencia simultanea',
    'Reasignacion de proveedor',
    'Logo',
    'Etiqueta',
    'Frecuencia',
    'Descripcion del servicio',
    'Servicio',
    'Plan',
    'Moneda',
  ];

  useEffect(() => {
    dispatch({type: planServicesTypes.AsyncLoad})
    dispatch({type: planTypes.get})
    dispatch({type: servicesTypes.AsyncLoad})
  }, [dispatch])
  
  useEffect(() => {
    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Plan servicios',
          count: 234,
          btnLink: '',
          btnModal: '#kt_modal_services',
          tableHeads: tableHeads,
        },
        tableBody: {
          tableHeads: ['id', 'Costo', 'Descripcion del servicio', 'Servicio', 'Plan'],
          tableContent: planServices,
        },
      },
    });
    return () => {
      // dispatch(servicesActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch, planServices]) // eslint-disable-line

  return (
    <>
      <TableComponent title='Servicios' stats={stats}/>
    </>
  )
}