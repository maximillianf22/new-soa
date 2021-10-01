import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions';
import { tableTypes, servicesTypes } from '../../../../redux/types/types'
import { IServicesTable } from '../../Interfaces/models'
import { TableComponent } from './components/TableComponent'
import { ModalForm } from '../ModalForm';

export const ServicesTable = ({stats}: IServicesTable) => {
  const dispatch = useDispatch()

  const services: any = useSelector<RootState>(({services}) => services.services)

  const tableHeads = [
    'id',
    'descripción',
    'fecha de creación',
    'fecha vencimiento',
    'estado',
  ]

  useEffect(() => {
    dispatch({type: servicesTypes.AsyncLoad})
  }, [dispatch])
  
  useEffect(() => {
    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Servicios',
          count: 234,
          btnLink: 'create',
          btnModal: '',
          tableHeads: tableHeads,
        },
        tableBody: {
          tableHeads: ['id', 'descripción', 'fecha de creación'],
          tableContent: services,
        },
      },
    });
    return () => {
      // dispatch(servicesActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch, services]) // eslint-disable-line

  return (
    <>
      <TableComponent title='Servicios' stats={stats}/>
      <ModalForm />
    </>
  )
}