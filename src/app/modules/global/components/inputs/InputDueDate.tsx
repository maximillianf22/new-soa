import {useState} from 'react'
import Select from 'react-select'
import {Button, Collapse} from 'react-bootstrap-v5'
import {useFormik} from 'formik'


interface IputDueDate {
    dueDate: Date,
    initialDate: Date,
    finalDate: Date,
}

const initialValues = {
    dueDate: new Date(),
    initialDate: new Date(),
    finalDate: new Date(),
}

const options = [
  {value: 'Anual', label: 'Anual'},
  {value: 'Semestral', label: 'Semestral'},
  {value: 'Trimestral', label: 'Trimestral'},
  {value: 'Bimestral', label: 'Bimestral'},
  {value: '30 Dias', label: '30 Dias'},
  {value: '15 Dias', label: '15 Dias'},
  {value: '7 Dias', label: '7 Dias'},
]

export const InputDueDate = ({isRequired = ''}) => {

  const [open, setOpen] = useState(false)

  const formik = useFormik<IputDueDate>({
    initialValues,
    onSubmit: (values) => {},
  })

  return (
    <>
        <label className={`col-form-label ${isRequired} fw-bold fs-6`}>Vigencia</label>
        <div className='d-flex bd-highlight'>
          <div className='pe-3 flex-fill bd-highlight w-100'>
            <Select
              className='form-control form-control-sm form-control-solid p-0'
              placeholder='Vigencia del usuario'
              name='locationType'
              options={options}
              id='vigencia'
            />
          </div>
          <div className='px-0 flex-fill bd-highlight'>
            <Button
              className='btn btn-icon btn-primary btn-form'
              onClick={() => setOpen(!open)}
              aria-controls='example-collapse-text'
              aria-expanded={open}
            >
              <i className='fa fa-cog'></i>
            </Button>
          </div>
        </div>
        <p className='m-0 p-1 text-sm'>Si deseas personalizar la vigencia haz click en el boton</p>
        {formik.touched.dueDate && formik.errors.dueDate && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>{formik.errors.dueDate}</div>
          </div>
        )}
        <Collapse in={open}>
          <div className='row'>
            <div className='col-6 pe-1'>
              <input
                type='date'
                className='form-control form-control-sm form-control-solid'
                placeholder='Correo'
                {...formik.getFieldProps('initialDate')}
              />
              {formik.touched.initialDate && formik.errors.initialDate && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.initialDate}</div>
                </div>
              )}
              <label className='col-form-label m-0 p-0 lh-1 text-sm text-center w-100'>
                Fecha Inicio
              </label>
            </div>
            <div className='col-6 ps-1'>
              <input
                type='date'
                className='form-control form-control-sm form-control-solid'
                placeholder='Correo'
                {...formik.getFieldProps('finalDate')}
              />
              {formik.touched.finalDate && formik.errors.finalDate && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.finalDate}</div>
                </div>
              )}
              <label className='col-form-label m-0 p-0 lh-1 text-sm text-center w-100'>
                Fecha Final
              </label>
            </div>
          </div>
        </Collapse>
    </>
  )
}
