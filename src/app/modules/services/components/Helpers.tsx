import * as Yup from 'yup'
import { ICreateServices } from '../Interfaces/models'


const createServicesSchemas = Yup.object().shape({
  description: Yup.string().required('Este campo es requerido'),
  code: Yup.string().required('Este campo es requerido'),
  url: Yup.string().required('Este campo es requerido'),
  initialDate: Yup.string().required('Este campo es requerido'),
  finalDate: Yup.string().required('Este campo es requerido'),
  dueDate: Yup.string().required('Este campo es requerido'),
})

const initialValues: ICreateServices = {
  description: '',
  code: '',
  url: '',
  initialDate: new Date(),
  finalDate: new Date(),
  dueDate: '',
}

export {createServicesSchemas, initialValues}
