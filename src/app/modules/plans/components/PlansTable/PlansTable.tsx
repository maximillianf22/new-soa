import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { planTypes } from '../../../../redux/types/planTypes'
import { tableTypes } from '../../../../redux/types/types'
import { IPlansTable } from '../../Interfaces/models'
import { TableComponent } from './components/TableComponent'
import { PlanCreateEdit } from './PlanCreateEdit'

export const PlansTable = ({stats}: IPlansTable) => {
  const dispatch = useDispatch()

  const {plans}: any = useSelector<RootState>(({plans}) => plans)
  const {selectedAccount}: any = useSelector<RootState>(({accounts}) => accounts)

  const tableHeads = [
    'Id',
    'Nombre',
    'Eventos compartidos',
    'Vip',
    'Due date',
  ]

  useEffect(() => {
    if (selectedAccount?.acId === 0 || selectedAccount === {}) {
      dispatch({type: planTypes.get})
      // dispatch({type: accountTypes.get})
    }
  }, [dispatch, selectedAccount])

  useEffect(() => {
    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Planes',
          count: plans?.length,
          btnLink: '',
          btnModal: '#planCreateUpdateModal',
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
      <TableComponent title='Planes' stats={stats}/>
      <PlanCreateEdit />
    </>
  )
}