import * as Yup from 'yup'

export interface ICreateAccounts {
  description: string
  code: string
  url: string
  initialDate: Date
  finalDate: Date
  dueDate: string
}

const createAccountsSchemas = Yup.object().shape({
  description: Yup.string().required('Este campo es requerido'),
  code: Yup.string().required('Este campo es requerido'),
  url: Yup.string().required('Este campo es requerido'),
  initialDate: Yup.string().required('Este campo es requerido'),
  finalDate: Yup.string().required('Este campo es requerido'),
  dueDate: Yup.string().required('Este campo es requerido'),
})

const initialValues: ICreateAccounts = {
  description: '',
  code: '',
  url: '',
  initialDate: new Date(),
  finalDate: new Date(),
  dueDate: '',
}

export {createAccountsSchemas, initialValues}
