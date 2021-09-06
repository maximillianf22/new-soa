import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Button, Collapse} from 'react-bootstrap-v5'
import Select from 'react-select'

const profileDetailsSchema = Yup.object().shape({
  // fName: Yup.string().required('First name is required'),
})

export interface IProfileDetails {
  name: string
  lastName: string
  email: string
  username: string
  password: string
  confirmPassword: string
  initialDate: Date
  finalDate: Date
  dueDate: string
  year: string
}


const initialValues = {
  name: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  initialDate: new Date(),
  finalDate: new Date(),
  dueDate: '',
  year: '',
}


const yearOptions = [
  { value: "1960", label: "1960" },
  { value: "1961", label: "1961" },
  { value: "1962", label: "1962" },
  { value: "1963", label: "1963" },
  { value: "1964", label: "1964" },
  { value: "1965", label: "1965" }
];

export const UserForm = () => {
  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      console.log(values)
      console.log('hola')
    },
  })

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div id='kt_account_profile_details' className='collapse show w-100'>
          <div className='card-body p-9 pt-5'>
            <div className='row mb-6'>
              <div className='col-lg-12'>
                <div className='row'>
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
                </div>
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
                <div className='row'>
                  <div className='col-10'>


                  <Select
                  placeholder="Year"
                  isSearchable={true}
                  options={yearOptions}
                  name="year"
                  isLoading={false}
                  loadingMessage={() => "Fetching year"}
                  noOptionsMessage={() => "Year appears here"}
                />

                  </div>
                  <div className='col p-0'>
                    <Button
                      className='btn btn-icon btn-primary'
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
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* <div className='row mb-6'>
              <label className='ol-form-label required fw-bold fs-6'>Currency</label>

              <div className='col-lg-12 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('currency')}
                >
                  <option value=''>Select a currency..</option>
                  <option value='USD'>USD - USA dollar</option>
                  <option value='GBP'>GBP - British pound</option>
                  <option value='AUD'>AUD - Australian dollar</option>
                  <option value='JPY'>JPY - Japanese yen</option>
                  <option value='SEK'>SEK - Swedish krona</option>
                  <option value='CAD'>CAD - Canadian dollar</option>
                  <option value='CHF'>CHF - Swiss franc</option>
                </select>
                {formik.touched.currency && formik.errors.currency && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.currency}</div>
                  </div>
                )}
              </div>
            </div> */}
          </div>
      </div>
    </div>
  )
}
