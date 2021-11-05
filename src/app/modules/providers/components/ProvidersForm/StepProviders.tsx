import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import {useSelector} from 'react-redux'
import {RootState} from '../../../../../setup'
import Select from 'react-select'

const optionsFrecuencies = [
  {value: 'id1', label: 'Semanal'},
  {value: 'id2', label: 'Mensual'},
  {value: 'id3', label: 'Anual'},
]

const optionsDocumentType = [
  {dtId: '109', label: 'Cedula de Ciudadania'},
  {dtId: '110', label: 'Cedula Extrangeria'},
  {dtId: '111', label: 'NIT'},
  {dtId: '112', label: 'Pasaporte'},
  {dtId: '113', label: 'Otro'},
]

const optionsConditions = [
  {value: 'id1', label: 'Interno'},
  {value: 'id2', label: 'Externo'},
]

export const StepProviders = () => {
  const selectedProvider: any = useSelector<RootState>(({providers}) => providers.selectedProvider)
  console.log(selectedProvider)

  return (
    <>
      <Formik
        initialValues={selectedProvider}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <p className='fw-bold fs-2 mt-3 m-0 ms-3'>Nuevo Proveedor</p>
            <p className='fw-bold fs-help text-muted ms-3'>Registro de proveedor</p>
            <div className='row'>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='provTradeName' label='Razon Social' required />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='provFiscalName' label='Nombre Juridico' required />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <label className='col-form-label required fw-bold fs-6 py-2'>Tipo</label>
                <Select
                  className='form-control p-0'
                  defaultValue={optionsDocumentType?.find(
                    (c) => c.dtId === selectedProvider?.dtId?.toString()
                  )}
                  getOptionLabel={(option: any) => option.label}
                  getOptionValue={(option: any) => option.dtId?.toString()}
                  onChange={(document) => {
                    props.setFieldValue('dtId', document?.dtId)
                  }}
                  name='dtId'
                  options={optionsDocumentType}
                />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='number' name='provDocumentNumber' label='Documento' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom
                  type='date'
                  name='provActivityStartDate'
                  label='Fecha de Inicio de Actividades'
                />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom
                  type='number'
                  name='provSatisfactionAssessment'
                  label='% Satisfacción'
                  required
                />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom
                  type='number'
                  name='provInfrastructureAssessment'
                  label='% Infraestuctura'
                  required
                />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='file' name='contrats' label='Logo o icono' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <label className='col-form-label required fw-bold fs-6 py-2'>Condición</label>
                <Field name='condicion' component={InputSelect} options={optionsConditions} />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='provUserApp' type='text' label='Usuario' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='123456' type='password' label='Contraseña' />
              </div>
              {/* <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='confirmPassword' type='password' label='Confirmar contraseña' />
              </div> */}
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='telefono1' type='text' label='Telefono 1' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='telefono2' type='text' label='Telefono 2' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='provEmail1' type='email' label='Correo 1' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='provEmail2' type='email' label='Correo 2' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='file' name='img' label='Contrato' />
              </div>
              <div className='col-md-4 px-5 fv-row my-4 text-start'>
                <div className='my-auto h-100 text-center mt-4'>
                  <label></label>
                  <div className='form-check form-switch form-check-custom form-check-solid'>
                    <InputCustom
                      className='form-check-input h-30px w-50px'
                      type='checkbox'
                      name='provIsActive'
                      id='flexSwitchChecked'
                    />
                    <label className='form-check-label ms-5'>¿Activo?</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-end mb-5'>
              <button type='submit' className='btn btn-lg btn-primary me-0 mt-10 px-20'>
                <span className='indicator-label'>
                  Guardar
                  <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
