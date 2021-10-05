import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions'
import { plansActions } from '../../../../redux/actions/plansActions'
import { planTypes } from '../../../../redux/types/planTypes'
import { tableTypes, usersTypes } from '../../../../redux/types/types'
import { IPlansTable } from '../../Interfaces/models'
import { TableComponent } from './components/TableComponent'
import { PlanCreateEdit } from './PlanCreateEdit'

export const PlansTable = ({stats}: IPlansTable) => {
  const dispatch = useDispatch()

  const {plans}: any = useSelector<RootState>(({plans}) => plans)

  const tableHeads = [
    'Id',
    'Nombre',
    'Eventos compartidos',
    'Vip',
    'Due date',
  ]
  useEffect(() => {
      dispatch({type: planTypes.get})
  }, [dispatch])

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
