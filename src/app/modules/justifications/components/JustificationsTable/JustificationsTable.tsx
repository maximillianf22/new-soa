import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions';
import { tableTypes, servicesTypes, familiesTypes } from '../../../../redux/types/types';
import { TableComponent } from './components/TableComponent'
import { ModalForm } from '../ModalForm';

export const JustificationsTable = () => {
  const dispatch = useDispatch()

  const services: any = useSelector<RootState>(({services}) => services.services)

  const tableHeads = [
    'id',
    'descripción',
    'fecha de creación',
    'fecha vencimiento',
  ]

  useEffect(() => {
    dispatch({type: servicesTypes.AsyncLoad})
    dispatch({type: familiesTypes.AsyncLoad})
  }, [dispatch])
  
  useEffect(() => {
    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Justificaciones',
          count: 234,
          btnLink: '',
          btnModal: '#kt_modal_justifications',
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
      <TableComponent/>
      <ModalForm />
    </>
  )
}