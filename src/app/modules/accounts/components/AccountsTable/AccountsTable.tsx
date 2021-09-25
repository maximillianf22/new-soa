import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions'
import { tableTypes } from '../../../../redux/types/types'
import { accountTypes } from '../../../../redux/types/accountTypes'
import { TableComponent } from './components/TableComponent'

export const AccountsTable = () => {
  const dispatch = useDispatch()

  const accounts: any = useSelector<RootState>(({accounts}) => accounts.accounts)

  const tableHeads = [
    'Id',
    'Nombre',
    'Número de piloto',
    'Número de proveedor piloto',
    'Vip',
    'Fecha de creación',
    'Beneficiarios',
  ]

useEffect(() => {
  dispatch({type: accountTypes.accountsGet})
}, [dispatch])

useEffect(() => {
  dispatch({
    type: tableTypes.Load,
    payload: {
      tableHeader: {  
        title: 'Cuentas',
        count: 234,
        btnLink: 'create',
        btnModal: '',
        tableHeads: tableHeads,
      },
      tableBody: {
        tableHeads: [
          'Id',
          'Nombre',
          'Número de piloto',
          'Número de proveedor piloto',
          'Vip',
          'Fecha de creación',
          'Beneficiarios'
        ],
        tableContent: accounts,
      },
    },
  })
  return () => {
    dispatch(tableActions.clear())
    // dispatch(accountsActions.clear())
  }
}, [dispatch, accounts])

  return (
    <>
      <TableComponent title='Cuentas' />
    </>
  )
}
