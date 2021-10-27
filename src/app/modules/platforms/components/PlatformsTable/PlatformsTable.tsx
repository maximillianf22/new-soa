import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions';
import { tableTypes, servicesTypes, familiesTypes } from '../../../../redux/types/types';
import { IPlatformsTable } from '../../Interfaces/models'
import { TableComponent } from './components/TableComponent'
import { ModalForm } from '../ModalForm';

export const PlatformsTable = ({stats}: IPlatformsTable) => {
  const dispatch = useDispatch()

  const Platforms: any = useSelector<RootState>(({services}) => services.services)

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
          title: 'Plataformas',
          count: 234,
          btnLink: '',
          btnModal: '#kt_modal_platforms',
          tableHeads: tableHeads,
        },
        tableBody: {
          tableHeads: ['id', 'descripción', 'fecha de creación'],
          tableContent: Platforms,
        },
      },
    });
    return () => {
      // dispatch(servicesActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch, Platforms]) // eslint-disable-line

  return (
    <>
      <TableComponent title='Plataformas' stats={stats}/>
      <ModalForm />
    </>
  )
}