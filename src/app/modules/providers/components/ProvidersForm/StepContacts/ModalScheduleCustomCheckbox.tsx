import React from 'react'
import { IModalScheduleCustomCheckbox } from '../../../Interfaces/models'
import './styles.css'

export const ModalScheduleCustomCheckbox = ({day} :IModalScheduleCustomCheckbox) => {
  return (
    <>
      <div className='col p-0 text-center'>
        <div id='ck-button'>
          <label>
            <input type='checkbox' value={day}/>
            <span>{day}</span>
          </label>
        </div>
      </div>
    </>
  )
}
