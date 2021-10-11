import * as Yup from 'yup'
import { ICreatePlanService } from '../../Interfaces/models'

const wizzardSchemas = [
  Yup.object().shape({
    etiqueta: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),

  }),
  Yup.object().shape({
    // accountType: Yup.string().label('name'),
  }),
]

const createPlanServiceSchemas = Yup.object().shape({
  description: Yup.string().required('Este campo es requerido'),
  code: Yup.string().required('Este campo es requerido'),
  url: Yup.string().required('Este campo es requerido'),
  initialDate: Yup.string().required('Este campo es requerido'),
  finalDate: Yup.string().required('Este campo es requerido'),
  dueDate: Yup.string().required('Este campo es requerido'),
})

const initialValues: ICreatePlanService = {
  etiqueta: '',
  servicio: '',
  img: '',
  events: '',
  frecuencia: '',
  number: '',
  coin: '',
  document: '',
  description: '',
}

export {wizzardSchemas, createPlanServiceSchemas, initialValues}



