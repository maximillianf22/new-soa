import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions, userActions } from '../../../../redux/actions/actions'
import { tableTypes, usersTypes } from '../../../../redux/types/types'
import { TableComponent } from './TableComponent'

export const AccountsTable = () => {
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
      dispatch(userActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch]) // eslint-disable-line

  return (
    <>
      <TableComponent />
    </>
  )
}
