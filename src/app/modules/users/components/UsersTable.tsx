import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TableComponent} from '../../global/components/tables/TableComponent'
import {RootState} from '../../../../setup/redux/RootReducer'
import {ModalSelectType} from './UsersForms/ModalSelectType'
import { UserViewEdit } from './UserViewEdit';
import { tableTypes, usersTypes } from '../../../redux/types/types';
import { userActions, tableActions } from '../../../redux/actions/actions';

export const UsersTable = () => {
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
  }, [dispatch])

  useEffect(() => {
    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Usuario',
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
    return () => {
      // dispatch(userActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch, users]) // eslint-disable-line

  return (
    <>
      <TableComponent />
      <ModalSelectType />
      <UserViewEdit />
    </>
  )
}
