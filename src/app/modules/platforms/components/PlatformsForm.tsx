import React from 'react'
import {Formik, FormikProps, Field} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../../setup/redux/RootReducer'
import {InputCustom} from '../../global/components/inputs/InputCustom'
import {Form} from 'react-bootstrap-v5'

const optionsGroups = [
  {value: 'vehicular', label: 'Vehicular'},
  {value: 'medica', label: 'Medica'},
  {value: 'servicio', label: 'Servicio'},
]

export const PlatformsForm = () => {
  const SelectedService: any = useSelector<RootState>(({services}) => services.selectedService)
  const families: any = useSelector<RootState>(({families}) => families)
  const {loading, editing: isEditing, viewing: isViewing}: any = useSelector<RootState>(
    ({ui}) => ui
  )
  const dispatch = useDispatch()
  const [color, setColor] = React.useState({})
  return (
    <>
      <Formik
        initialValues={{...SelectedService}}
        enableReinitialize={true}
        onSubmit={(values) => {
          //
        }}
      >
        {(props: FormikProps<any>) => (
          <form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-6 px-5 fv-row my-3'>
                    <InputCustom type='text' name='name' label='Nombre' required />
                    <InputCustom type='text' name='brand' label='Eslogan' required />
                    <InputCustom type='text' name='nit' label='NIT' required />
                    <InputCustom type='email' name='email' label='Correo' required />
                    <label className='col-form-label fw-bold fs-6 py-2'>Color</label>
                    <Form.Control
                      className='w-100'
                      type='color'
                      id='exampleColorInput'
                      defaultValue='#1d123e'
                      title='Choose your color'
                    />
                    <div className='my-auto h-100 text-center mt-'>
                      <label></label>
                      <div className='form-check form-switch form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-50px'
                          type='checkbox'
                          name='acStatus'
                          id='flexCheckChecked'
                          disabled={isViewing}
                        />
                        <label className='form-check-label ms-5'>¿Activo?</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 px-5 fv-row my-3'>
                    <InputCustom type='file' name='logo' label='Logo' required />
                    <svg className='w-100 mt-4' width='328' height='63' viewBox='0 0 328 63' fill='none' xmlns='http://www.w3.org/2000/svg' >
                      <rect x='0.5' y='0.5' width='327' height='65' rx='4.5' fill='#1d123e' stroke='#F2F3F7' />
                    </svg>
                    <InputCustom type='file' name='logo' label='Imagen de fondo' required />
                    <svg className='w-100 mt-4' width='328' height='120' viewBox='0 0 328 120' fill='none' xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x='0.5' y='0.5' width='327' height='120' rx='4.5' fill='#1d123e' stroke='#F2F3F7' />
                    </svg>
                    <InputCustom type='file' name='logo' label='Favicon' required />
                  </div>
                </div>
                <div className='px-5 pt-5 fv-row text-end'>
                  {!isViewing ? (
                    <button
                      type='submit'
                      className='btn btn-primary'
                      data-bs-dismiss='modal'
                      disabled={!props.dirty || !props.isValid}
                    >
                      {!loading && (
                        <span className='indicator-label'>
                          {isEditing ? 'Actualizar' : 'Guardar'}
                        </span>
                      )}
                      {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
                          {isEditing ? 'Actualizar' : 'Guardar'}
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      )}
                    </button>
                  ) : (
                    <button type='button' className='btn btn-info mx-8'>
                      Ver servicios
                    </button>
                  )}
                  <button type='button' className='btn btn-primary mx-8' data-bs-dismiss='modal'>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}
