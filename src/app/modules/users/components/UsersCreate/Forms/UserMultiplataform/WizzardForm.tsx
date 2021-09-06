import React, {FC, useEffect, useRef, useState} from 'react'
import {UserForm} from './steps/UserForm'
import {KTSVG} from '../../../../../../../_metronic/helpers'
import {StepperComponent} from '../../../../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {createUserSchemas, ICreateUser, inits} from './FormHelpers'

const WizzardForm: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createUserSchemas[0])
  const [initValues] = useState<ICreateUser>(inits)
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

    setCurrentSchema(createUserSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateUser, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(createUserSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='card'>
      <div className='card-body'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-5'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Formulario de usuario</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Configuracion de Plataformas</h3>
            </div>

          </div>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto w-100' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <UserForm />
                </div>

                {/* <div data-kt-stepper-element='content'>
                  <UserNotifications />
                </div>

                <div data-kt-stepper-element='content'>
                  <UserPermits />
                </div> */}

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
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
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {!isSubmitButton && 'Continuar'}
                        {isSubmitButton && 'Guardar'}
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-3 ms-2 me-0'
                        />
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

export {WizzardForm}
