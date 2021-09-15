import clsx from 'clsx'
import React from 'react'
import {useLayout} from '../../core/LayoutProvider'
import {Nav} from 'react-bootstrap-v5'

const Toolbar: React.FC = () => {
  const {classes} = useLayout()

  return (
    <div className='toolbar d-none d-sm-block' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        {/* begin::Actions */}
        <div className='d-flex align-items-center pt-2 w-100'>
          {/* begin::Wrapper */}
          <div className='w-100'>
            <Nav fill>
              <Nav.Item>
                <Nav.Link className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0' eventKey='link-0'>
                  <b className="fs-5  mt-4 lh-sm">SOAANG</b>
                  <br/> 
                  <p className="fs-7 fw-bold text-muted mb-0">Cuentas, Planes Afiliados etc</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-none d-sm-none d-md-block">
                <Nav.Link className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0' eventKey='link-0'>
                  <b className="fs-5  mt-4 lh-sm">Seguimiento Operativo</b>
                  <br/> 
                  <p className="fs-7 fw-bold text-muted mb-0">Mapa, Proveedores, etc</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-none d-md-none d-lg-block">
                <Nav.Link className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0' eventKey='link-0'>
                  <b className="fs-5  mt-4 lh-sm">Transparencia, U-Share</b>
                  <br/> 
                  <p className="fs-7 fw-bold text-muted mb-0">Estadisticas, informes etc</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0' eventKey='link-0'>
                  <b className="fs-5  mt-4 lh-sm">Expedientes</b>
                  <br/> 
                  <p className="fs-7 fw-bold text-muted mb-0">Monitor de tareas, etapas etc</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-none d-lg-none d-xl-block">
                <Nav.Link className='text-start btn btn-active-color-info py-0' eventKey='link-0'>
                  <b className="fs-5  mt-4 lh-sm">Configuraciones</b>
                  <br/> 
                  <p className="fs-7 fw-bold text-muted mb-0">Usuarios, Iconos, Servicios, etc</p>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {/* end::Menu */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}
export {Toolbar}

// TODO: Agregar esto al menu en el responsive