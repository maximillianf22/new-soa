import * as Yup from 'yup'

export interface ICreateUser {
  name: string
  lastName: string
  email: string
  username: string
  password: string
  confirmPassword: string
  initialDate: Date
  finalDate: Date
  dueDate: string
  search?: string
}

const wizzardSchemas = [
  Yup.object().shape({
    name: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),
    lastName: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),
    email: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),
    username: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),
    password: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),
    // dueDate: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),

  }),
  Yup.object().shape({
    // accountType: Yup.string().label('name'),
  }),
]

const createUserSchemas = Yup.object().shape({
  platform: Yup.string().required('Este campo es requerido'),
  name: Yup.string().required('Este campo es requerido'),
  lastName: Yup.string().required('Este campo es requerido'),
  email: Yup.string().required('Este campo es requerido'),
  username: Yup.string().required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido'),
  confirmPassword: Yup.string().required('Este campo es requerido'),
  initialDate: Yup.string().required('Este campo es requerido'),
  finalDate: Yup.string().required('Este campo es requerido'),
  dueDate: Yup.string().required('Este campo es requerido'),
  search: Yup.string().min(3, 'Minimo 3 caracteres para realizar una busqueda'),
})

const initialValues: ICreateUser = {
  name: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  initialDate: new Date(),
  finalDate: new Date(),
  dueDate: '',
  search: '',
}

export {wizzardSchemas, createUserSchemas, initialValues}
