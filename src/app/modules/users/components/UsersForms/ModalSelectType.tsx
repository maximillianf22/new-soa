/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import { PageLink } from '../../../../../_metronic/layout/core';

const SelectType: FC = () => {
  return (
    <>
      <div className="card" style={{minHeight: "72vh"}}>
        <div className='card-body'>
          <div className='pb-10 pb-lg-15 m-600px'>
            <h2 className='fw-bolder d-flex align-items-center text-dark'>
              Seleccione el tipo de usuario que quiere crear
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Seleccione el tipo de usuario, Regular o Multicliente'
              ></i>
            </h2>
          </div>
          <div className='w-100 card mt-15'>
            <div className='fv-row'>
              <div className='row'>
                <div className='col-lg-4 offset-lg-2'>
                  <a href="/usuarios/crear-regular">
                  <label className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10 active'>
                    <span className='svg-icon svg-icon-3x me-5'>
                      <i className='fa fa-user fs-1'></i>
                    </span>
                    <span className='d-block fw-bold text-start'>
                      <span className='text-dark fw-bolder d-block fs-4 mb-2'>
                        Usuario Regular
                      </span>
                      <span className='text-gray-400 fw-bold fs-6'>
                        Usuario normal con acceso a un solo cliente o plataforma
                      </span>
                    </span>
                  </label>
                </a>
                </div>
                <div className='col-lg-4'>
                  <a href="/usuarios/crear-multiplataforma">
                  <label className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'>
                    <span className='svg-icon svg-icon-3x me-5'>
                      <i className='fa fa-globe-americas fs-1'></i>
                    </span>
                    <span className='d-block fw-bold text-start'>
                      <span className='text-dark fw-bolder d-block fs-4 mb-2'>
                        Usuario Multiplataforma
                      </span>
                      <span className='text-gray-400 fw-bold fs-6'>
                        Usuario especial que tiene acceso a varios clientes o plataformas
                      </span>
                    </span>
                  </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {SelectType}
