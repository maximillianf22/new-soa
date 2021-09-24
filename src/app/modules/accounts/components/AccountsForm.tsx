import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { InputCustom, InputSelect } from '../../global/components/inputs'
import { initialValues } from './Helpers'

const optionsClients = [
    {
      cltId: 1,
      cltName: 'addiuva',
    },
    {
      cltId: 2,
      cltName: 'ikatech',
    },
    {
      cltId: 3,
      cltName: 'El Roble',
    },
  ]

export const AccountsForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-6 px-5 fv-row my-3'>
                    <InputCustom type='text' name='description' label='Descripcion' required />
                  </div>
                  <div className='col-md-6 px-5 fv-row my-3'>
                    <InputCustom type='text' name='code' label='Codigo' required />
                  </div>
                  {/* <div className='col-md-6 px-5 fv-row my-3'>
                    <InputCustom type='text' name='url' label='Url Externa' />
                  </div> */}
                  <div className='col-md-6 px-5 fv-row my-3'>
                    <InputCustom type='number' name='url' label='Numero de piloto' />
                  </div>
                  <div className='col-md-6 px-5 fv-row my-3'>
                    <InputCustom type='number' name='url' label='Numero de piloto proveedor' />
                  </div>
                  {/* <div className='col-md-6 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6'>Clientes</label>
                    <Field name='clients' component={InputSelect} options={optionsClients} />
                  </div> */}
                  <div className='col-md-4 px-5 fv-row my-3 text-center'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-switch form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-50px'
                          type='checkbox'
                          name='is_active'
                          checked
                          id='flexSwitchChecked'
                        />
                        <label className='form-check-label ms-5'>¿Activo?</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 px-5 fv-row text-end'>
                    <label></label>
                    <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-30px w-30px'
                        type='checkbox'
                        name='password_change'
                        id='flexCheckChecked'
                      />
                      <label className='form-check-label ms-5'>Beneficiacios</label>
                    </div>
                  </div>
                  <div className='col-md-4 px-5 fv-row text-end'>
                    <label></label>
                    <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-30px w-30px'
                        type='checkbox'
                        name='password_change'
                        id='flexCheckChecked'
                      />
                      <label className='form-check-label ms-5'>VIP</label>
                    </div>
                  </div>
                </div>
                <div className='px-5 pt-5 fv-row text-end'>
                  <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
