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
    dueDate: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),

  }),
  Yup.object().shape({
    // accountType: Yup.string().label('name'),
  }),
]

const createUserSchemas = Yup.object().shape({
  platform: Yup.string().required(),
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
  initialDate: Yup.string().required(),
  finalDate: Yup.string().required(),
  dueDate: Yup.string().required(),
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
