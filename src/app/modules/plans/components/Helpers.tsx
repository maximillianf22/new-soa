import * as Yup from 'yup'
import { ICreatePlans } from '../Interfaces/models'


const createPlansSchemas = Yup.object().shape({
  description: Yup.string().required('Este campo es requerido'),
  code: Yup.string().required('Este campo es requerido'),
  url: Yup.string().required('Este campo es requerido'),
  initialDate: Yup.string().required('Este campo es requerido'),
  finalDate: Yup.string().required('Este campo es requerido'),
  dueDate: Yup.string().required('Este campo es requerido'),
})

const initialValues: ICreatePlans = {
  description: '',
  code: '',
  url: '',
  initialDate: new Date(),
  finalDate: new Date(),
  dueDate: '',
}

export {createPlansSchemas, initialValues}
