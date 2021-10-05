import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputDueDate, InputSelect} from '../../global/components/inputs'
import {createPlansSchemas, initialValues} from './Helpers'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../setup'
import Select from 'react-select'
import { planTypes } from '../../../redux/types/planTypes'

export const PlansForm = () => {

  const {loading, editing: isEditing, viewing: isViewing}: any = useSelector<RootState>(({ui}) => ui)
  const selectedPlan: any = useSelector<RootState>(({plans}) => plans.selectedPlan)
  const {accounts, selectedAccount}: any = useSelector<RootState>(({accounts}) => accounts)

  const dispatch = useDispatch()

  return (
    <>
      <Formik
        initialValues={ (selectedPlan === {} || selectedPlan === undefined || (!isEditing && !isViewing)) ? initialValues : selectedPlan}

        validationSchema={createPlansSchemas}
        enableReinitialize={true}
        onSubmit={(values) => {
          if (values.acId === 0) {
            values.acId = selectedAccount.acId
          }
          console.log('en submit', values)
          dispatch({
            type: isEditing ? planTypes.update : planTypes.create,
            payload: values
          })
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card' style={{minHeight: '60vh'}}>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <InputCustom
                          type='text'
                          name='plName'
                          label='Nombre'
                          required
                          disabled={isViewing}
                        />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <InputCustom
                          type='number'
                          name='plDaysToDue'
                          label='Días de due'
                          // required
                          disabled={isViewing}
                        />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <div className='row'>
                          <div className='col-6 pe-1'>
                            <InputCustom
                              type="date"
                              name='plStartDate'
                              label="Fecha Inicio"
                              required
                              disabled={isViewing}
                            />
                          </div>
                          <div className='col-6 ps-1'>
                            <InputCustom
                              type="date"
                              name='plDueDate'
                              label="Fecha Final"
                              required
                              disabled={isViewing}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <label className='col-form-label required fw-bold fs-6  py-2'>Cuentas</label>
                        <Select
                          className='form-control p-0'
                          defaultValue={selectedAccount}
                          getOptionLabel={(option) => option.acName}
                          getOptionValue={(option) => option.acId.toString()}
                          isSearchable
                          name="acId"
                          options={accounts}
                          isDisabled={isViewing}
                          onChange={(account) => {
                            props.setFieldValue("acId", account.acId);
                          }}
                        />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <label htmlFor="planFilePicker" className='col-form-label fw-bold fs-6 py-2'>
                          Archivo (pdf)
                        </label>
                        <input
                          id="planFilePicker"
                          name="plFileUploadPath"
                          type="file"
                          accept="application/pdf"
                          className="form-control"
                          disabled={isViewing}
                          data-buttontext="Seleccione el archivo"
                          onChange={(event) => {
                            props.setFieldValue("plFileUploadPath", event.currentTarget.files![0]);
                          }}
                        />
                      </div>

                      {/* Este input se muestra cuando se checkea envio automatico de notificacion de vencimiento */}
                      {/* <div className='col-md-6 px-5 fv-row mt-7'>
                        <InputCustom type='number' name='daystoDue' label='Dias para envio de notificacion' />
                      </div> */}

                      {/* Estos inputs se muestra cuando se checkea poliza compartida */}
                      { props.values.plEventsShared &&
                        <div className='col-md-6 px-5 fv-row my-3'>
                        <InputCustom
                          type='number'
                          name='plnumEventsShared'
                          label='Número de eventos'
                          disabled={isViewing}
                        />
                      </div>}
                      {/* <div className='col-md-6 px-5 fv-row my-3'>
                        <label className='col-form-label required fw-bold fs-6  py-2'>Metodo de consumo</label>
                        <Field name='clients' component={InputSelect} options={optionsShared} />
                      </div> */}
                      <div className='row'>
                        <div className='col-md-4 px-5 fv-row my-4 text-start'>
                          <div className='my-auto h-100 text-center mt-4'>
                            <label></label>
                            <div className='form-check form-switch form-check-custom form-check-solid'>
                              <InputCustom
                                className='form-check-input h-30px w-50px'
                                type='checkbox'
                                name='plStatus'
                                id='flexSwitchChecked'
                                disabled={isViewing}
                              />
                              <label className='form-check-label ms-5'>¿Activo?</label>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 px-5 fv-row my-4 text-start'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='plEventsShared'
                              id='flexCheckChecked'
                              disabled={isViewing}
                            />
                            <label className='form-check-label ms-5'>Poliza Compartida</label>
                          </div>
                        </div>
                        <div className='col-md-4 px-5 fv-row my-4 text-start'>
                          <label></label>
                          <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                            <InputCustom
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='plIsVip'
                              id='flexCheckChecked'
                              disabled={isViewing}
                            />
                            <label className='form-check-label ms-5'>VIP</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-5 pt-5 fv-row text-end'>
                  {!isViewing 
                  ?
                    <button 
                      type='submit'
                      className='btn btn-primary'
                      // data-bs-dismiss='modal'
                      disabled={!props.dirty || !props.isValid}
                    >
                      {!loading && <span className='indicator-label'>{isEditing? 'Actualizar': 'Guardar'}</span>}
                        {loading && (
                          <span className='indicator-progress' style={{display: 'block'}}>
                            {isEditing? 'Actualizar': 'Guardar'}
                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                          </span>
                        )}
                      </button>
                    :
                    <a href='/accounts/detail'>
                      <button type='button' className='btn btn-info mx-8'>
                        Ver servicios
                      </button>
                    </a>
                    }
                  <button type='button' className='btn btn-primary mx-8' data-bs-dismiss='modal'>
                    Cerrar
                  </button>
                </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
