import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions'
import { planTypes } from '../../../../redux/types/planTypes'
import { tableTypes, usersTypes } from '../../../../redux/types/types'
import { IPlansTable } from '../../Interfaces/models'
import { TableComponent } from './components/TableComponent'

export const PlansTable = ({stats}: IPlansTable) => {
  const dispatch = useDispatch()

  const plans: any = useSelector<RootState>(({accounts}) => accounts.selectedAccount)

  const tableHeads = [
    'Id',
    'Nombre',
    'Eventos compartidos',
    'Vip',
    'Due date',
  ]
  useEffect(() => {
    // dispatch({type: planTypes.get})
  }, [dispatch])

  useEffect(() => {
    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Planes',
          count: plans.length,
          btnLink: 'create',
          btnModal: '',
          tableHeads: tableHeads,
        },
        tableBody: {
          tableHeads: ['Nombre', 'Eventos compartidos', 'Vip', 'Due date'],
          tableContent: plans,
        },
      },
    })
    return () => {
      // dispatch(tableActions.clear())
    }
  }, [dispatch, plans]) // eslint-disable-line

  return (
    <>
      {/* <TableComponent title='Planes' stats={stats}/> */}
    </>
  )
}
