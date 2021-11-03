import { FC, useEffect, useRef, useState } from 'react'
import { initialValues, wizzardSchemas } from './Helpers'
import { ICreatePlanService } from '../../Interfaces/models'
import { StepperComponent } from '../../../../../_metronic/assets/ts/components'
import { ViewEditForm } from './ViewEditForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../setup/redux/RootReducer';
import { StepQuestions } from './StepQuestions/StepQuestions'
import { StepStages } from './StepStages';

const FormWizzard: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(wizzardSchemas[0])
  const [initValues] = useState<ICreatePlanService>(initialValues)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const loading: any = useSelector<RootState>(({ui}:any) => ui.loading)

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
  const submitStep = () => {
    if (!stepper.current) {
      return
    }
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    setCurrentSchema(wizzardSchemas[stepper.current.currentStepIndex])
    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      // if(stepper.current?.currentStepIndex === 1) {
      //   stepper.current.goto(2)
      //   console.log('goNext',stepper.current?.currentStepIndex )
      // } else {
      stepper.current.goNext()
      // }
    } else {
      stepper.current.goto(1)
    }
  }
  useEffect(() => {
    if (!stepperRef.current) {
      return
    }
    loadStepper()
  }, [stepperRef])
  return (
    <div className="" style={{ minHeight: "62vh" }}>
      <div>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-0'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Registro de plan servicio</h3>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Asignacion de etapas</h3>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Configuracion preguntas por etapas</h3>
            </div>
          </div>

          <div data-kt-stepper-element='content'>
            <StepStages />
          </div>
          <div data-kt-stepper-element='content'>
            <StepQuestions />
          </div>
          <div className='current' data-kt-stepper-element='content'>
            <ViewEditForm />
          </div>
          <div className='d-flex flex-stack pt-0'>
            {/* <div className='ms-6'>
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
            </div> */}
            <div>
              <button id="continue" onClick={submitStep} className='btn btn-lg btn-primary me-0 mt-10'>
                <span className='indicator-label'>
                  {!isSubmitButton && 'Continuar'}
                  {isSubmitButton && 'Guardar'}
                  <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { FormWizzard }