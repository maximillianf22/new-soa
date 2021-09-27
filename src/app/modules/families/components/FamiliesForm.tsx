import {Formik, Form, FormikProps, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {InputCustom, InputSelect} from '../../global/components/inputs'
import { RootState } from '../../../../setup/redux/RootReducer';
import { familiesActions } from '../../../redux/actions/actions';

const optionsGroups = [
  {value: 'vehicular', label: 'Vehicular'},
  {value: 'medica', label: 'Medica'},
  {value: 'servicio', label: 'Servicio'},
]

export const FamiliesForm = () => {
  const SelectedFamily: any = useSelector<RootState>(({families}) => families.SelectedFamily)
  const dispatch = useDispatch()

  return (
    <>
      <Formik
        initialValues={{...SelectedFamily}}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
          if (values.fmId > 0) {
            dispatch(familiesActions.updateFamily(values))
          } else {
           dispatch(familiesActions.createFamily(values))
          }
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <InputCustom type='text' name='fmDescription' label='Descripcion' required />
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
                        />
                        <label className='form-check-label'>¿Habilitado?</label>
                      </div>
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
