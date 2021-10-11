import React from 'react'
import {StepContacts} from './StepContacts'
import {StepExperience} from './StepExperience'
import {StepHeadquarters} from './StepHeadquarters'
import {StepProviders} from './StepProviders'
import {StepServices} from './StepServices'
import './styles.css'

export const FormTab = () => {
  return (
    <>
      <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
        <li className='nav-item'>
          <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_1'>
            Link 1
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_2'>
            Link 2
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_3'>
            Link 3
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_3'>
            Link 3
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_3'>
            Link 3
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
        <div className='tab-pane fade' id='kt_tab_pane_3' role='tabpanel'>
          <StepContacts />
        </div>
        <div className='tab-pane fade' id='kt_tab_pane_3' role='tabpanel'>
          <StepServices />
        </div>
      </div>
    </>
  )
}
