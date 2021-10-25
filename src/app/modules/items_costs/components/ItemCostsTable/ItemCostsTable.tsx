import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../setup'
import { tableActions } from '../../../../redux/actions/actions'
import { tableTypes, familiesTypes } from '../../../../redux/types/types'
import { ModalForm } from '../ItemCostsForm/ModalForm'
import { TableComponent } from './components/TableComponent'

export const ItemCostsTable = () => {
  const dispatch = useDispatch()

  const families: any = useSelector<RootState>(({families}) => families.families)

  const tableHeads = [
    'id',
    'descripción',
    'estado',
    'fecha de creación',
    'fecha actualizado',
    'modificado por',
  ]

  useEffect(() => {
    dispatch({type: familiesTypes.AsyncLoad})
  }, [dispatch])
  
  useEffect(() => {
    dispatch({
      type: tableTypes.Load,
      payload: {
        tableHeader: {
          title: 'Item Costos',
          count: 234,
          btnLink: '',
          btnModal: '#kt_modal',
          tableHeads: tableHeads,
        },
        tableBody: {
          tableHeads: ['id', 'descripción', 'estado', 'modificado por',],
          tableContent: families,
        },
      },
    })
    return () => {
      // dispatch(userActions.clear())
      dispatch(tableActions.clear())
    }
  }, [dispatch, families]) // eslint-disable-line

  return (
    <>
      <TableComponent title='Item Costos'/>
      <ModalForm />
    </>
  )
}
