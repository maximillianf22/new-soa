import {Formik, Form, FormikProps, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../setup/redux/RootReducer';
import { servicesActions } from '../../../redux/actions/actions';
import { InputCustom } from '../../global/components/inputs/InputCustom';
import { InputSelect } from '../../global/components/inputs/InputSelect';
import { InputDueDate } from '../../global/components/inputs/InputDueDate';

const optionsGroups = [
  {value: 'vehicular', label: 'Vehicular'},
  {value: 'medica', label: 'Medica'},
  {value: 'servicio', label: 'Servicio'},
]

export const ServicesViewEditForm = () => {
  const selectedService: any = useSelector<RootState>(({services}) => services.selectedService)
  const {loading, editing: isEditing, viewing: isViewing}: any = useSelector<RootState>(({ui}) => ui)

  const dispatch = useDispatch()

  return (
    <>
      <Formik
        initialValues={{...selectedService}}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
          if (values.fmId > 0) {
            dispatch(servicesActions.updateService(values))
          }
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <InputCustom type='text' name='servDescription' label='Descripcion' required disabled={isViewing} />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    {selectedService ? (
                      <InputDueDate
                        init_date_validity={selectedService.servStartDate}
                        end_date_validity={selectedService.servDueDate}
                      />
                    ) : (
                      <InputDueDate />
                    )}
                  </div>
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6 py-2'>Grupo</label>
                    <Field name='fmGrouped' component={InputSelect} options={optionsGroups} />
                  </div>
                  <div className='col-md-3 px-5 fv-row my-3'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-switch form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-50px'
                          type='checkbox'
                          name='servStatus'
                          id='flexSwitchChecked'
                          disabled={isViewing}
                        />
                        <label className='form-check-label'>¿Habilitado?</label>
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
                      data-bs-dismiss='modal'
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
                    <button type='button' className='btn btn-info mx-8'>
                      Ver servicios
                    </button>
                    }
                  <button type='button' className='btn btn-primary mx-8' data-bs-dismiss='modal'>
                    Cerrar
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
