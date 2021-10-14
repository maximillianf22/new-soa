import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputSelect} from '../../../../global/components/inputs'
import {initialValues} from '../Helpers'
import {FormCheck} from 'react-bootstrap-v5'

export const ModalCosts = () => {
  return (
    <>
      <div className='modal fade' tabIndex={-1} id='kt_modal_costs'>
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-body'>
                  <div className='card-title bg-white rounded d-flex bd-highlight'>
                    <div className='bd-highlight w-75'>
                      <h3 className='fw-bold m-0'>Configuracion de los costos negociados</h3>
                      <p className='text-muted'>
                        En este formulario se debe cargar tda la informacion de los costos
                        negociados con el proveedor
                      </p>
                    </div>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                      console.log('en submit', values)
                    }}
                  >
                    {(props: FormikProps<any>) => (
                      <Form>
                        <div className='d-flex justify-content-between text-start mb-4'>
                          <div className='col-md-3 fv-row p-1'>
                            <InputCustom type='text' name='item' label='Item costo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='number' name='unidad' label='unidad' />
                          </div>
                          <div className='col-md-2 fv-row p-1'>
                            <InputCustom type='text' name='medida' label='Medida' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalDiurno' label='Diurno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalNocturno' label='Nocturno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoDiurno' label='Festivo D' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoNocturno' label='Festivo N' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='Foraneo' label='Foraneo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom
                              className='form-check-input h-30px w-20px mt-7'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                          </div>
                        </div>
                        <div className='d-flex justify-content-between text-start mb-4'>
                          <div className='col-md-3 fv-row p-1'>
                            <InputCustom type='text' name='item' label='Item costo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='number' name='unidad' label='unidad' />
                          </div>
                          <div className='col-md-2 fv-row p-1'>
                            <InputCustom type='text' name='medida' label='Medida' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalDiurno' label='Diurno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalNocturno' label='Nocturno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoDiurno' label='Festivo D' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoNocturno' label='Festivo N' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='Foraneo' label='Foraneo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom
                              className='form-check-input h-30px w-20px mt-7'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                          </div>
                        </div>
                        <div className='d-flex justify-content-between text-start mb-4'>
                          <div className='col-md-3 fv-row p-1'>
                            <InputCustom type='text' name='item' label='Item costo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='number' name='unidad' label='unidad' />
                          </div>
                          <div className='col-md-2 fv-row p-1'>
                            <InputCustom type='text' name='medida' label='Medida' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalDiurno' label='Diurno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalNocturno' label='Nocturno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoDiurno' label='Festivo D' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoNocturno' label='Festivo N' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='Foraneo' label='Foraneo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom
                              className='form-check-input h-30px w-20px mt-7'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                          </div>
                        </div>
                        <div className='d-flex justify-content-between text-start mb-4'>
                          <div className='col-md-3 fv-row p-1'>
                            <InputCustom type='text' name='item' label='Item costo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='number' name='unidad' label='unidad' />
                          </div>
                          <div className='col-md-2 fv-row p-1'>
                            <InputCustom type='text' name='medida' label='Medida' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalDiurno' label='Diurno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalNocturno' label='Nocturno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoDiurno' label='Festivo D' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoNocturno' label='Festivo N' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='Foraneo' label='Foraneo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom
                              className='form-check-input h-30px w-20px mt-7'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                          </div>
                        </div>
                        <div className='d-flex justify-content-between text-start mb-4'>
                          <div className='col-md-3 fv-row p-1'>
                            <InputCustom type='text' name='item' label='Item costo' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='number' name='unidad' label='unidad' />
                          </div>
                          <div className='col-md-2 fv-row p-1'>
                            <InputCustom type='text' name='medida' label='Medida' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalDiurno' label='Diurno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='LocalNocturno' label='Nocturno' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoDiurno' label='Festivo D' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='FestivoNocturno' label='Festivo N' />
                          </div>
                          <div className='col-md-1 fv-row p-1'>
                            <InputCustom type='text' name='Foraneo' label='Foraneo' />
                          </div>
                          <div className='col-md-1 fv-row p-1 text-center'>
                            <InputCustom
                              className='form-check-input h-30px w-20px mt-7'
                              type='checkbox'
                              name='is_active'
                              checked
                              id='flexSwitchChecked'
                            />
                          </div>
                        </div>
                        <div className='d-flex justify-content-between text-start mb-4'>
                          <div className='col-6'>
                            <b className='text-muted'>Observaciones</b>
                            <textarea
                              className='form-control mt-4'
                              id='exampleFormControlTextarea1'
                              rows={4}
                            ></textarea>
                          </div>
                          <div className='col-6 ps-10'>
                            <b className='text-muted'>Distancia Kilometraje recorrido</b>
                            <FormCheck className='my-4'
                              type='radio'
                              label='Desde el inicio de aceptación de la asistencia hasta el contacto con el afiliado.'
                              name='formHorizontalRadios'
                              id='formHorizontalRadios1'
                            />
                            <FormCheck className='my-4'
                              type='radio'
                              label='Desde el contacto con el afiliado hasta el destino final.'
                              name='formHorizontalRadios'
                              id='formHorizontalRadios2'
                            />
                            <FormCheck className='my-4'
                              type='radio'
                              label='Desde la aceptación del servicio hasta el destino final.'
                              name='formHorizontalRadios'
                              id='formHorizontalRadios3'
                            />
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className='modal-footer p-0 m-0 border-0 pe-8'>
                  <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>
                    Cerrar
                  </button>
                  <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
