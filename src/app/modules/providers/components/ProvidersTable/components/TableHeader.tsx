import {useFormik} from 'formik'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {RootState} from '../../../../../../setup'
import {KTSVG} from '../../../../../../_metronic/helpers'
import * as Yup from 'yup'
import Dropdown from './Dropdown'
import CollapseFilters from './CollapseFilters'
import { permitByModuleAndAction } from '../../../../permits/PermitFilter'

const searchSchema = Yup.object().shape({
  search: Yup.string()
    .min(3, 'Mínimo 3 carácteres')
    .max(30, 'Máximo 30 carácteres')
    .required('Debes escribir algo para hacer una busqueda'),
})

const initialValues = {
  search: '',
}

export const TableHeader = () => {
  const table: any = useSelector<RootState>(({table}) => table)
  const {permits}: any = useSelector<RootState>(({permits}) => permits)

  const {tableHeader, tableBody} = table

  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: searchSchema,
    onSubmit: (values) => {
      setLoading(true)
      console.log('Haciendo submit', values)
    },
  })

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Listado de {tableHeader?.title}</span>
          <span className='text-muted mt-1 fw-bold fs-7'>
            {tableHeader?.count} {tableHeader?.title} registrados
          </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        >
          <div className='d-flex align-items-center position-relative d-sm-none d-none d-md-block d-lg-block'>
            <form onSubmit={formik.handleSubmit} style={{marginTop: '-20px'}}>
              <button type='submit' className='btn btn-link'>
                <KTSVG
                  path='/media/icons/duotone/General/Search.svg'
                  className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
                />
              </button>

              <input
                {...formik.getFieldProps('search')}
                type='text'
                id='kt_filter_search_tableHeader'
                className='form-control form-control-solid form-control-sm w-250px ps-15'
                placeholder='Buscar'
              />
            </form>
          </div>
          { permitByModuleAndAction(permits, '_Providers_', 'add') && (
            tableHeader?.btnLink ? (
              <Link to={tableHeader?.btnLink} className='btn btn-sm btn-primary ms-2'>
                <i className='fas fa-plus'></i>
                Nuevo
                </Link>
                ) : (
                  <>
                <button
                  type='button'
                  className='btn btn-sm btn-primary ms-2'
                  data-bs-toggle='modal'
                  data-bs-target={tableHeader?.btnModal}
                  >
                  <i className='fas fa-plus'></i>
                  Nuevo
                </button>
              </>
            )
          )}

          <button
            className='btn btn-info btn-sm btn-icon ms-2'
            onClick={() => setOpen(!open)}
            aria-controls='example-collapse-text'
            aria-expanded={open}
          >
            <i className='fa fa-filter'></i>
          </button>
          <a href='!#' className='btn btn-success btn-sm btn-icon ms-2'>
            <i className='fa fa-download'></i>
          </a>
          <div className='ms-2'>
            <button
              className='btn btn-sm btn-icon btn-gray btn-active-dark btn-active-color-white btn-color-dark'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-start'
              data-kt-menu-flip='bottom-start'
            >
              <i className='fas fa-cog'></i>
            </button>
            <Dropdown  />
          </div>
        </div>
      </div>
      {/* end::Header */}
      <CollapseFilters open={open} />
    </>
  )
}
