import {Formik, Form, FormikProps, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import { RootState } from '../../../../../setup/redux/RootReducer';
import { familiesTypes } from '../../../../redux/types/types';

const optionsGroups = [
  {value: 'vehicular', label: 'Vehicular'},
  {value: 'medica', label: 'Medica'},
  {value: 'servicio', label: 'Servicio'},
]

export const FamiliesForm = () => {
  const SelectedFamily: any = useSelector<RootState>(({families}) => families.SelectedFamily)
  const {loading, editing: isEditing, viewing: isViewing}: any = useSelector<RootState>(({ui}) => ui)
  const user:any = useSelector<RootState>(({auth}) => auth.user)
  const dispatch = useDispatch()

  return (
    <>
      <Formik
        initialValues={{...SelectedFamily}}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
          if (!isEditing && !isViewing) {
            values.fmUsermod = user.username;
          }
          dispatch({
            type: isEditing ? familiesTypes.Update : familiesTypes.Create,
            payload: values
          });
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <InputCustom type='text' name='fmDescription' label='Descripcion' required disabled={isViewing} />
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
                          name='fmStatus'
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
