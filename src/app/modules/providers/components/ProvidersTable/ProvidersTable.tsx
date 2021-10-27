import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions, userActions } from '../../../../redux/actions/actions'
import { providerActions } from '../../../../redux/actions/providersActions'
import { providerTypes } from '../../../../redux/types/providerTypes'
import { tableTypes, usersTypes } from '../../../../redux/types/types'
import { IProvidersTable } from '../../Interfaces/models'
import { TableComponent } from './components/TableComponent'

export const ProvidersTable = ({stats}: IProvidersTable) => {
  const dispatch = useDispatch()

  const providers: any = useSelector<RootState>(({providers}) => providers.providers)

  const tableHeads = [
    'id',
    'Razón social',
    'Nombre jurídico',
    'Correo',
    'Contacto',
    'Usuario app'
  ]
  
  useEffect(() => {
  dispatch({type: providerTypes.get})

    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Proveedores',
          count: 234,
          btnLink: 'create',
          btnModal: '',
          tableHeads: tableHeads,
        },
        tableBody: {
          tableHeads: ['Razón social', 'Nombre jurídico',
            'Correo', 'Usuario app',
          ],
          tableContent: providers,
        },
      },
    })
    return () => {
      dispatch(providerActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch]) // eslint-disable-line

  return (
    <>
      <TableComponent title='Proveedores' stats={stats}/>
    </>
  )
}
