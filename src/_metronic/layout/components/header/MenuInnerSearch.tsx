import React, {FC} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {KTSVG} from '../../../helpers'

type Props = {
  className?: string
}

export const MenuInnerSearch: FC<Props> = ({className = ''}) => {
  const searchSchema = Yup.object().shape({
    search: Yup.string().min(3, 'Para realizar una busqueda debes escribir al menos 3 carácteres'),
  })

  const initialValues = {
    search: '',
  }

  // const [loading, setLoading] = useState(false)
  // const dispatch = useDispatch()
  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: searchSchema,
  //   onSubmit: (values, {setStatus, setSubmitting}) => {
  //     // setLoading(true)
  //     // useEffect(() => {
  //     //   Aquí va la función que hace axios a la API
  //     // }, [])
  //   },
  // })

  return (
    <>
      <form className={`w-100 position-relative ${className}`} autoComplete='off'>
        <KTSVG
          path='/media/icons/duotone/General/Search.svg'
          className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
        />

        <input
          type='text'
          className={`form-control form-control-solid px-15 ${className}-input`}
          name='search'
          placeholder='Buscar'
        />
      </form>
    </>
  )
}
