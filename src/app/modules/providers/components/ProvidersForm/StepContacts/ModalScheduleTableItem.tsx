import React from 'react'
import {IModalScheduleTableItem} from '../../../Interfaces/models'
import './styles.css'

export const ModalScheduleTableItem = ({day, item_plus}: IModalScheduleTableItem) => {
  return (
    <>
      <tr>
        <th scope='row' className='pt-2 fw-bolder fs-5'>
          {day}
        </th>
        <td>
          <input
            type='time'
            name={`start-${day}`}
            className='form-control form-control-sm form-control-sm-mod form-control-solid'
          />
          {/* {{item_plus} && 
            <input
              type='time'
              value={`start-${day}`}
              name='razon_social'
              className='form-control form-control-sm form-control-solid mt-2'
            />
          } */}
        </td>
        <td>
          <input
            type='time'
            name={`final-${day}`}
            className='form-control form-control-sm form-control-sm-mod form-control-solid'
          />
          {/* {{item_plus} && 
            <input
              type='time'
              value={`start-${day}`}
              name='razon_social'
              className='form-control form-control-sm form-control-solid mt-2'
            />
          } */}
        </td>
        <td>
          <div className='row'>
            <div className='col-6 px-1'>
              <button className='btn btn-sm btn-sm-mod btn-success py-1 px-1'>
                <i className='fa fa-plus ms-1'></i>
              </button>
            </div>
            <div className='col-6 px-1'>
              <button className='btn btn-sm btn-sm-mod btn-info py-1 px-1'>
                <i className='fa fa-copy ms-1'></i>
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}
