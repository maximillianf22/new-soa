import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TableComponent} from '../../global/components/tables/TableComponent'
import {RootState} from '../../../../setup/redux/RootReducer'
import { ModalForm } from './ModalForm'
import { usersTypes, tableTypes } from '../../../redux/types/types';
import { userActions, tableActions } from '../../../redux/actions/actions';


export const FamiliesTable = () => {
  const dispatch = useDispatch()

  const users: any = useSelector<RootState>(({users}) => users.users)

  const tableHeads = [
    'id',
    'usuario',
    'nombre',
    'apellido',
    'correo',
    'activo',
    'fecha creación',
    'rol',
  ]

  useEffect(() => {
    dispatch({type: usersTypes.AsyncLoad})
    if (users) {
      dispatch({
        type: tableTypes.Load,
        payload: {
          tableHeader: {
            title: 'Familias',
            count: 234,
            btnLink: '',
            btnModal: '#kt_modal',
            tableHeads: tableHeads,
          },
          tableBody: {
            tableHeads: ['usuario', 'nombre', 'correo', 'rol'],
            tableContent: users,
          },
        },
      })
    }

    return () => {
      dispatch(userActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch]) // eslint-disable-line

  return (
    <>
      <TableComponent />
      <ModalForm />
    </>
  )
}
