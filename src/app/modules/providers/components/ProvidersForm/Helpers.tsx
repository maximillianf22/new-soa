import * as Yup from 'yup'
import { ICreateProviders } from '../../Interfaces/models'

const wizzardSchemas = [
  Yup.object().shape({
    razon_social: Yup.string().required('Este campo es requerido para pasar al siguiente paso'),

  }),
  Yup.object().shape({
    // accountType: Yup.string().label('name'),
  }),
]

const createProvidersSchemas = Yup.object().shape({
  razon_social: Yup.string().required('Este campo es requerido'),
})

const initialValues: ICreateProviders = {
  razon_social: '',
}

export {wizzardSchemas, createProvidersSchemas, initialValues}



