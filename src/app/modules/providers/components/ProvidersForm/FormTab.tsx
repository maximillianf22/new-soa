import React from 'react'
import {StepContacts} from './StepContacts/StepContacts'
import {StepExperience} from './StepExperience'
import {StepHeadquarters} from './StepHeadquarters/StepHeadquarters'
import {StepProviders} from './StepProviders'
import {StepServices} from './StepServices/StepServices'

export const FormTab = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body px-15 py-10'>
          <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6 mb-10'>
            <li className='nav-item'>
              <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_1'>
                Datos basicos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_2'>
                Experiencia
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_3'>
                Sedes
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_4'>
                Contactos / Tecnicos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_5'>
                Servicios
              </a>
            </li>
          </ul>
          <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade active show' id='kt_tab_pane_1' role='tabpanel'>
              <StepProviders />
            </div>
            <div className='tab-pane fade' id='kt_tab_pane_2' role='tabpanel'>
              <StepExperience />
            </div>
            <div className='tab-pane fade' id='kt_tab_pane_3' role='tabpanel'>
              <StepHeadquarters />
            </div>
            <div className='tab-pane fade' id='kt_tab_pane_4' role='tabpanel'>
              <StepContacts />
            </div>
            <div className='tab-pane fade' id='kt_tab_pane_5' role='tabpanel'>
              <StepServices />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
