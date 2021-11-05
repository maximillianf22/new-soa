import React from 'react'
import { ModalBitacoraStage } from './components.tsx/ModalBitacoraStage'
import { ModalBitacoraGeneral } from './components.tsx/ModalBitacoraGeneral'
import {StageTabItem} from './components.tsx/StageTabItem'
import {Stage2} from './Stage2'
import { Stage3 } from './Stage3'
import { ModalAssistances } from '../../../assistances/components/AssistancesForm/ModalAssistances'

export const StagesTab = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body px-0 pt-0 pb-5'>
          <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6 mb-0 px-0 mx-0 d-flex bd-highlight bg-light-dark border border-white border-5'>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_2'
                number='2'
                title='Asignacion'
                description='del Proveedor'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='3'
                title='Confirmación'
                description='del Proveedor'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='4'
                title='Arribo'
                description='del Proveedor'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='5'
                title='Contactacion'
                description='del Afiliado'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='6'
                title='Diagnostico'
                description='del Servicio'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='7'
                title='Costeo'
                description='del Proveedor'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='8'
                title='Termino'
                description='del Proveedor'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight'>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='9'
                title='Confirmación'
                description='del Servicio'
              />
            </li>
            <li className='nav-item flex-fill bd-highlight d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block '>
              <StageTabItem
                href='#kt_tab_pane_3'
                number='10'
                title='Encuesta'
                description='de Satisfacción'
              />
            </li>
          </ul>
          <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade active show' id='kt_tab_pane_2' role='tabpanel'>
              <Stage2 />
            </div>
            <div className='tab-pane fade' id='kt_tab_pane_3' role='tabpanel'>
              <Stage3 />
            </div>
          </div>
        </div>
      </div>
      <ModalBitacoraStage />
      <ModalBitacoraGeneral />
      <ModalAssistances />
    </>
  )
}
