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
    // accountType: Yup.string().label('name'),
  }),
  Yup.object().shape({
    // accountType: Yup.string().label('name'),
  }),
]

const createUserSchemas = Yup.object().shape({
  // fName: Yup.string().required('First name is required'),
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