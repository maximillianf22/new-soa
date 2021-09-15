import React, {useState} from 'react'
import DualListBox from 'react-dual-listbox'
import 'react-dual-listbox/lib/react-dual-listbox.css'

const options = [
  {value: 'one', label: 'Option One'},
  {value: 'two', label: 'Option Two'},
]

const ModalPermits = () => {
  const [state, setState] = useState({selected: ['one']})

  const onChange = (selected: any) => {
    setState({selected})
  }

  const {selected} = state

  return (
    <>
      <DualListBox 
        options={options} 
        selected={selected} 
        onChange={onChange}
       />
    </>
  )
}

export default ModalPermits
