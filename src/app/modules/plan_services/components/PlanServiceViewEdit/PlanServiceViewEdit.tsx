import React from 'react'
import {StageTabItem} from '../../../expedients/components/Stages/components.tsx/StageTabItem'
import {JFStepQuestions} from '../PlanServiceForm/StepQuestions/JFStepQuestions'
import {ViewEditForm} from '../PlanServiceForm/ViewEditForm'
import './styles.css'
import { JFStepStages } from '../PlanServiceForm/StepStages/JFStepStages';

export const PlanServiceViewEdit = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body px-0 pt-0 pb-5'>
          <ul className='nav nav-tabs nav-line-tabs mb-0 fs-6 bg-secondary mb-5'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-flex btn-icon-gray-900 btn-text-gray-900 px-5 m-0 active'
                data-bs-toggle='tab'
                href='#kt_tab_pane_1'
              >
                <div className='stepper-item px-2 current active stepper-tab' data-kt-stepper-element='nav' >
                  <h3 className='stepper-title'>Registro de plan servicio</h3>
                </div>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-flex btn-icon-gray-900 btn-text-gray-900 px-5 m-0'
                data-bs-toggle='tab'
                href='#kt_tab_pane_2'
              >
                <div className='stepper-item px-2 stepper-tab' data-kt-stepper-element='nav' >
                  <h3 className='stepper-title'>Asignacion de etapas</h3>
                </div>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-flex btn-icon-gray-900 btn-text-gray-900 px-5 m-0'
                data-bs-toggle='tab'
                href='#kt_tab_pane_3'
              >
                <div className='stepper-item px-2 active stepper-tab' data-kt-stepper-element='nav' >
                  <h3 className='stepper-title'>Configuracion preguntas por etapas</h3>
                </div>
              </a>
            </li>
          </ul>
          <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade ' id='kt_tab_pane_1' role='tabpanel'>
              <ViewEditForm />
            </div>
            <div className='tab-pane fade' id='kt_tab_pane_2' role='tabpanel'>
              <JFStepStages />
            </div>
            <div className='tab-pane fade active show' id='kt_tab_pane_3' role='tabpanel'>
              <JFStepQuestions />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}