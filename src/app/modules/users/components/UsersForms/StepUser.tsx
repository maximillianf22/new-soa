import React, {useState} from 'react'
import {useFormik} from 'formik'
import {Button, Collapse} from 'react-bootstrap-v5'
import Select from 'react-select'
import {ICreateUser, createUserSchemas, initialValues} from './Helpers'

const options = [
  {value: 'Anual', label: 'Anual'},
  {value: 'Semestral', label: 'Semestral'},
  {value: 'Trimestral', label: 'Trimestral'},
  {value: 'Bimestral', label: 'Bimestral'},
  {value: '30 Dias', label: '30 Dias'},
  {value: '15 Dias', label: '15 Dias'},
  {value: '7 Dias', label: '7 Dias'},
]

export const StepUserForm = () => {
  const formik = useFormik<ICreateUser>({
    initialValues,
    validationSchema: createUserSchemas,
    onSubmit: (values) => {},
  })

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div id='kt_account_profile_details' className='collapse show w-100'>
        <div className='card-body py-0 px-4'>
          <div className='row mb-6'>
            <div className='col-md-4 px-5 py-3 fv-row'>
              <label className='col-form-label required fw-bold fs-6'>Nombre</label>
              <input
                type='text'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Nombre'
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.name}</div>
                </div>
              )}
            </div>
            <div className='col-md-4 px-5 py-3 fv-row'>
              <label className='col-form-label required fw-bold fs-6'>Apellido</label>
              <input
                type='text'
                className='form-control form-control-solid'
                placeholder='Apellido'
                {...formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.lastName}</div>
                </div>
              )}
            </div>
            <div className='col-md-4 px-5 py-3 fv-row'>
              <label className='col-form-label required fw-bold fs-6'>Correo</label>
              <input
                type='email'
                className='form-control form-control-solid'
                placeholder='Correo'
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.email}</div>
                </div>
              )}
            </div>
            <div className='col-md-4 px-5 py-3 fv-row'>
              <label className='col-form-label required fw-bold fs-6'>Usuario</label>
              <input
                type='text'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Nombre'
                {...formik.getFieldProps('username')}
              />
              {formik.touched.username && formik.errors.username && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.username}</div>
                </div>
              )}
            </div>
            <div className='col-md-4 px-5 py-3 fv-row'>
              <label className='col-form-label required fw-bold fs-6'>Contraseña</label>
              <input
                type='password'
                className='form-control form-control-solid'
                placeholder='Apellido'
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.password}</div>
                </div>
              )}
            </div>
            <div className='col-md-4 px-5 py-3 fv-row'>
              <label className='col-form-label required fw-bold fs-6'>Confirmar contraeña</label>
              <input
                type='password'
                className='form-control form-control-solid'
                placeholder='Correo'
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.confirmPassword}</div>
                </div>
              )}
            </div>
            <div className='col-md-4 px-5 py-3 fv-row'>
              <label className='col-form-label required fw-bold fs-6'>Vigencia</label>
              <div className='d-flex bd-highlight'>
                <div className='pe-3 flex-fill bd-highlight w-100'>
                  <Select
                    className='form-control form-control-sm form-control-solid p-0'
                    placeholder='Vigencia del usuario'
                    name='locationType'
                    options={options}
                    id='vigencia'
                  />
                </div>
                <div className='px-0 flex-fill bd-highlight'>
                  <Button
                    className='btn btn-icon btn-primary btn-form'
                    onClick={() => setOpen(!open)}
                    aria-controls='example-collapse-text'
                    aria-expanded={open}
                  >
                    <i className='fa fa-cog'></i>
                  </Button>
                </div>
              </div>
              <p className='m-0 p-1 text-sm'>
                Si deseas personalizar la vigencia haz click en el boton
              </p>
              {formik.touched.dueDate && formik.errors.dueDate && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.dueDate}</div>
                </div>
              )}
              <Collapse in={open}>
                <div className='row'>
                  <div className='col-6 pe-1'>
                    <input
                      type='date'
                      className='form-control form-control-sm form-control-solid'
                      placeholder='Correo'
                      {...formik.getFieldProps('initialDate')}
                    />
                    {formik.touched.initialDate && formik.errors.initialDate && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.initialDate}</div>
                      </div>
                    )}
                    <label className='col-form-label m-0 p-0 lh-1 text-sm text-center w-100'>
                      Fecha Inicio
                    </label>
                  </div>
                  <div className='col-6 ps-1'>
                    <input
                      type='date'
                      className='form-control form-control-sm form-control-solid'
                      placeholder='Correo'
                      {...formik.getFieldProps('finalDate')}
                    />
                    {formik.touched.finalDate && formik.errors.finalDate && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.finalDate}</div>
                      </div>
                    )}
                    <label className='col-form-label m-0 p-0 lh-1 text-sm text-center w-100'>
                      Fecha Final
                    </label>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className='col px-5 py-3 fv-row text-center'>
              <div className='form-check form-check-custom form-check-solid mt-13 ms-4'>
                <input
                  className='form-check-input h-25px w-25px'
                  type='checkbox'
                  value=''
                  id='flexCheckChecked'
                />
                <label className='form-check-label'>¿Permite cambio de contraseña?</label>
              </div>
            </div>
            <div className='col px-5 py-3 fv-row'>
              <div className='mt-13 text-center ms-4'>
                <div className='form-check form-switch form-check-custom form-check-solid'>
                  <input
                    className='form-check-input h-25px'
                    type='checkbox'
                    value=''
                    id='flexSwitchChecked'
                    checked
                  />
                  <label className='form-check-label'>¿Activo?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
