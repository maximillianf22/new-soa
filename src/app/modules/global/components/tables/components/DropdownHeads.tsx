/* eslint-disable jsx-a11y/anchor-is-valid */
import {useFormik} from 'formik'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../../../../../../setup'
import {tableActions} from '../Redux/TableRedux'

const DropdownHeads: React.FC = () => {
  const {tableHeader: {tableHeads}}:any = useSelector<RootState>(({table}) => table)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values: any, {setStatus, setSubmitting}) => {
      const tableHeads = []
      for (var name in values) {
        var value = values[name]
        if (value) {
          tableHeads.push(name)
        }
      }
      dispatch(tableActions.updateTableHeads({tableBody: {tableHeads}}))
    },
  })

  return (
    <>
      <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
        <div className='px-7 py-5'>
          <div className='fs-5 text-dark fw-bolder'>Campos disponibles:</div>
        </div>
        <div className='separator border-gray-200'></div>
        <div className='px-7 py-5'>
          <form onSubmit={formik.handleSubmit} style={{marginTop: '-20px'}}>
            <div className='mb-3'>
              <div className='py-3 fv-row table table-hover'>
                <table className='table table-sm table-hover align-middle gs-0 gy-1 mb-0'>
                  <tbody className='table-striped'>
                    {tableHeads?.map((th:string, i:number) => (
                      <tr key={i}>
                        <th className='d-flex align-items-center my-auto mt-1 w-150px ms-3'>
                          {th}
                        </th>
                        <td className=' text-end'>
                          <div className='form-check form-switch form-check-custom form-check-solid p-0  ms-10'>
                            <input
                              className='form-check-input h-25px'
                              type='checkbox'
                              id='flexSwitchChecked3'
                              {...formik.getFieldProps(th)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='d-flex justify-content-end'>
              <button
                type='reset'
                className='btn btn-sm btn-white btn-active-light-primary me-2'
                data-kt-menu-dismiss='true'
              >
                Resetear
              </button>
              <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
                Aplicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DropdownHeads
