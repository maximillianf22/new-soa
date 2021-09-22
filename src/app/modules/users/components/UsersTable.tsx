import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {tableActionTypes, tableActions} from '../../../redux/reducers/TableRedux'
import {TableComponent} from '../../global/components/tables/TableComponent'
import {actions, actionTypes} from '../../../redux/reducers/UsersRedux'
import {RootState} from '../../../../setup/redux/RootReducer'
import {ModalSelectType} from './UsersForms/ModalSelectType'
import { UserViewEdit } from './UserViewEdit';

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
    dispatch({type: actionTypes.AsyncLoad})
    if (users) {
      dispatch({
        type: tableActionTypes.Load,
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
    }

    return () => {
      dispatch(actions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch]) // eslint-disable-line

  return (
    <>
      <TableComponent />
      <ModalSelectType />
      <UserViewEdit />
    </>
  )
}
