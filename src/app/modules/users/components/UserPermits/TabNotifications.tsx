import React, {useState} from 'react'
import DualListBox from 'react-dual-listbox'
import 'react-dual-listbox/lib/react-dual-listbox.css'

const options = [
  {value: 'one', label: 'Option One'},
  {value: 'two', label: 'Option Two'},
]

export const TabNotifications = () => {
  const [state, setState] = useState({selected: ['one']})

  const onChange = (selected: any) => {
    setState({selected})
  }

  const {selected} = state

  return (
    <>
    <div className='d-flex bd-highlight w-100'>
        <div className='text-end w-100'>
          <button className='btn btn-primary btn-sm'>
            <i className='fa fa-save'></i>Guardar plantilla
          </button>
        </div>
      </div>
      <div className='card mt-7'>
      <div className='card-body p-10'>
        <div className='row'>
          <div className='col fs-5 text-center fw-bolder'>Seleccionados:</div>
          <div className='col fs-5 text-center fw-bolder'>Disponibles:</div>
        </div>
        <DualListBox
          canFilter
          options={options}
          selected={selected}
          onChange={onChange}
          filterPlaceholder='Buscar'
          name='notifications'
        />
      </div>
      </div>
    </>
  )
}
