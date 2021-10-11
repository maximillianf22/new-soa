import React from 'react'
import {Form, Formik, FormikProps} from 'formik'
import {Collapse} from 'react-bootstrap-v5'
import {InputCustom} from '../../../../global/components/inputs'
import { initialValues } from '../../ProvidersForm/Helpers'

const CollapseFilters = ({open}: any) => {
  return (
    <>
      <Collapse in={open}>
        <div>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log('en submit', values)
            }}
          >
            {(props: FormikProps<any>) => (
              <Form>
                <div className='card-body'>
                  <div className='row  bg-secondary px-5 py-5 rounded'>
                    <div className='col-md-10 pe-1 row'>
                      <div className='col-md-4 px-5'>
                        <InputCustom type='text' name='description' label='Descripcion' className='form-control-white lh-sm ' />
                      </div>
                      <div className='col-md-4 px-5'>
                        <InputCustom type='text' name='code' label='Codigo' className='form-control-white lh-sm ' />
                      </div>
                      <div className='col-md-4 px-5'>
                        <InputCustom type='text' name='piloto' label='Descripcion' className='form-control-white lh-sm ' />
                      </div>
                      <div className='col-md-4 px-5'>
                        <InputCustom type='text' name='piloto_proveedor' label='Descripcion' className='form-control-white lh-sm ' />
                      </div>
                      <div className='col-md-4 px-5'>
                        <InputCustom type='select' name='state' label='Descripcion' className='form-control-white lh-sm ' />
                      </div>
                      <div className='col-md-4 px-5'>
                        <InputCustom type='select' name='vip' label='Descripcion' className='form-control-white lh-sm ' />
                      </div>
                    </div>
                    <div className='col-md-2 px-5'>
                      <button className='btn btn-success btn-sm col-md-12 mb-4 mt-11 h-40px'>
                        Aplicar
                      </button>
                      <button className='btn btn-danger btn-sm col-md-12 mb-4 mt-10 h-40px'>Limpiar</button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Collapse>
    </>
  )
}

export default CollapseFilters
