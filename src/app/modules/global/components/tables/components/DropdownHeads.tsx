/* eslint-disable jsx-a11y/anchor-is-valid */
import {useFormik} from 'formik';
import { FC } from 'react';
import React from 'react';

const initialValues = {
  username: '',
}

interface Iprops {
  tableHeads: string[]
}

const DropdownHeads: React.FC<Iprops> = ( tableHeads: Iprops ) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      //
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
        <div className='mb-3'>
          <div className='py-3 fv-row table table-hover'>
            <table className='table table-sm table-hover align-middle gs-0 gy-1 mb-0'>
              <tbody className='table-striped'>
                <tr>
                  <th className='d-flex align-items-center my-auto mt-1 w-150px ms-3'>Notification</th>
                  <td className=' text-end'>
                    <div className='form-check form-switch form-check-custom form-check-solid p-0  ms-10'>
                    </div>
                  </td>
                </tr>
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
      </div>
    </div>
    </>
  )
}

export default DropdownHeads
