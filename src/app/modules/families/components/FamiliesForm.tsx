import {Formik, Form, FormikProps, Field} from 'formik'
import {InputCustom, InputSelect} from '../../global/components/inputs'
import {initialValues} from './Helpers'

const optionsGroups = [
  {value: 'vehicular', label: 'Vehicular'},
  {value: 'medica', label: 'Medica'},
  {value: 'servicio', label: 'Servicio'},
]

export const FamiliesForm = () => {
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
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <InputCustom type='text' name='description' label='Descripcion' required />
                  </div>
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <InputCustom type='text' name='code' label='Codigo' required />
                  </div>
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6 py-2'>Grupo</label>
                    <Field name='clients' component={InputSelect} options={optionsGroups} />
                  </div>
                  <div className='col-md-3 px-5 fv-row my-3'>
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
                        <label className='form-check-label'>¿Activo?</label>
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
