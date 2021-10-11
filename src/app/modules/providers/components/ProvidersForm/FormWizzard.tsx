import React, {FC, useEffect, useRef, useState} from 'react'
import {Formik, Form, FormikValues} from 'formik'
import {initialValues, wizzardSchemas} from './Helpers'
import { ICreateProviders } from '../../Interfaces/models'
import { StepperComponent } from '../../../../../_metronic/assets/ts/components'
import { KTSVG } from '../../../../../_metronic/helpers'
import { StepProviders } from './StepProviders'
import { StepExperience } from './StepExperience'
import { StepHeadquarters } from './StepHeadquarters'
import { StepContacts } from './StepContacts'
import { StepServices } from './StepServices'

const FormWizzard: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(wizzardSchemas[0])
  const [initValues] = useState<ICreateProviders>(initialValues)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }
  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    stepper.current.goPrev()
    setCurrentSchema(wizzardSchemas[stepper.current.currentStepIndex - 1])
  }
  const submitStep = (values: ICreateProviders, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    setCurrentSchema(wizzardSchemas[stepper.current.currentStepIndex])
    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
      console.log('Haciendo submit', values)
    }
  }
  useEffect(() => {
    if (!stepperRef.current) {
      return
    }
    loadStepper()
  }, [stepperRef])
  return (
      <div className="" style={{minHeight: "62vh"}}>
      <div>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-0'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h4 className='stepper-title'>Formulario de registro</h4>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h4 className='stepper-title'>Experiencia</h4>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h4 className='stepper-title'>Sedes</h4>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h4 className='stepper-title'>Contactos</h4>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h4 className='stepper-title'>Servicios</h4>
            </div>
          </div>
          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto w-100' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <StepProviders/>
                </div>
                <div data-kt-stepper-element='content'>
                  <StepExperience />
                </div>
                <div data-kt-stepper-element='content'>
                  <StepHeadquarters />
                </div>
                <div data-kt-stepper-element='content'>
                  <StepContacts />
                </div>
                <div data-kt-stepper-element='content'>
                  <StepServices />
                </div>
                <div className='d-flex flex-stack pt-0'>
                  <div className='ms-6'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr063.svg'
                        className='svg-icon-4 me-1'
                      />
                      Regresar
                    </button>
                  </div>
                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-0 mt-10'>
                      <span className='indicator-label'>
                        {!isSubmitButton && 'Guardar y Continuar'}
                        {isSubmitButton && 'Guardar'}
                        <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
export {FormWizzard}
