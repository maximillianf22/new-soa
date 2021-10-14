import {Formik, Form, FormikProps, Field} from 'formik'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import {initialValues} from '../Helpers'

const optionsUnits = [{value: 'id', label: 'Kilometros'}]

export const ItemCostsForm = () => {
  return (
    <>
      <Formik initialValues={initialValues} enableReinitialize={true} onSubmit={(values) => {}}>
        {(props: FormikProps<any>) => (
          <Form>
            <div className='p-3'>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='card'>
                    <div className='card-body p-10'>
                      <div className='col-md-12 px-5 fv-row my-4'>
                        <InputCustom
                          type='text'
                          name='fmDescription'
                          label='Descripcion'
                          required
                        />
                      </div>
                      <div className='col-md-12 px-5 fv-row my-4'>
                        <label className='col-form-label required fw-bold fs-6 py-2'>
                          Unidad de Medida
                        </label>
                        <Field name='fmGrouped' component={InputSelect} options={optionsUnits} />
                      </div>
                      <div className='col-md-12 px-5 fv-row my-4'>
                        <div className='my-auto h-100 text-center mt-2'>
                          <label></label>
                          <div className='form-check form-switch form-check-custom form-check-solid'>
                            <InputCustom
                              className='form-check-input h-30px w-50px'
                              type='checkbox'
                              name='fmStatus'
                              id='flexSwitchChecked'
                            />
                            <label className='form-check-label'>Activo</label>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 px-5 fv-row my-4'>
                        <div className='my-auto h-100 text-center mt-0'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='fmStatus'
                              id='flexSwitchChecked'
                            />
                            <label className='form-check-label fw-bolder'>
                              Item excedente de costos
                            </label>
                          </div>
                          <p className='fs-help lh-1 text-start mt-1 ms-2 mb-5'>
                            Al habilitar esta opcion deshabilita la configuracion adicional y se
                            utilizara para manejar excedentes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='card'>
                    <div className='card-body'>
                      <p className='fw-bold fs-4 text-center mb-0'>Configuracion Adicional</p>
                      <div className='col-md-12 px-5 fv-row my-0 text-start'>
                        <div className='my-auto h-100 text-center mt-2'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='password_change'
                              id='flexCheckChecked'
                            />
                            <label className='form-check-label ms-5'>Costo Negociado</label>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 px-5 fv-row my-0 text-start'>
                        <div className='my-auto h-100 text-center mt-2'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='password_change'
                              id='flexCheckChecked'
                            />
                            <label className='form-check-label ms-5'>Permite Cancelado</label>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 px-5 fv-row my-0 text-start'>
                        <div className='my-auto h-100 text-center mt-2'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                            <label className='form-check-label ms-5'>Foraneo</label>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 px-5 fv-row my-0 text-start'>
                        <div className='my-auto h-100 text-center mt-2'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                            <label className='form-check-label ms-5'>Nocturno</label>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 px-5 fv-row my-0 text-start'>
                        <div className='my-auto h-100 text-center mt-2'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                            <label className='form-check-label ms-5'>Fetsivo</label>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 px-5 fv-row my-0 text-start'>
                        <div className='my-auto h-100 text-center mt-2'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                            <label className='form-check-label ms-5'>Kilometraje</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-5 pt-5 fv-row row'>
                <div className='text-start col  p-0'>
                  <button
                    type='button'
                    className='btn btn-danger mx-0 text-start'
                    data-bs-dismiss='modal'
                  >
                    Cerrar
                  </button>
                </div>
                <div className='text-end col p-0'>
                  <button type='button' className='btn btn-info mx-8' data-bs-dismiss='modal'>
                    Guardar y continuar
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    data-bs-dismiss='modal'
                    disabled={!props.dirty || !props.isValid}
                  >
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
