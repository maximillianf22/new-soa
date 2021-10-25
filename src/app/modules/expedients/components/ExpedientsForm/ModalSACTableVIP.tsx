import React from 'react'

export const ModalSACTableVIP = () => {
  return (
    <>
      <table
        className='table table-borderless table-sm'
        style={{maxHeight: '40vh', overflowY: 'auto'}}
      >
        <thead>
          <tr className='fw-bolder text-muted bg-light text-uppercase rounded'>
            <th scope='col' className='ps-4'>
              Afiliado
            </th>
            <th scope='col'>Clave Afiliado</th>
            <th scope='col'>Telefonos</th>
            <th scope='col'>Cuenta</th>
            <th scope='col'>Plan</th>
            <th scope='col'>Usuario</th>
            <th scope='col'>Est. Comercial</th>
            <th scope='col'>Est. Afiliado</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr>
            <td className='fw-bolder fs-6 text-warning'>
              Brad Simmons <br />
              <p className='text-muted text-center'>CC: 1007345398</p>
            </td>
            <td>0293842</td>
            <td>
              Tel. 3043403049 <br />
              Tel. 3043403049
            </td>
            <td>Claro</td>
            <td>Noches a Mil</td>
            <td>Ikamax</td>
            <td>S/D</td>
            <td>
              <div className='fw-bold fs-6 text-success badge badge-light-success '>Activo</div>
            </td>
            <td>
              <button className='btn btn-sm btn-primary'>Seleccionar</button>
            </td>
          </tr>
          <tr>
            <td className='fw-bolder fs-6 text-warning'>
              Brad Simmons <br />
              <p className='text-muted text-center'>CC: 1007345398</p>
            </td>
            <td>0293842</td>
            <td>
              Tel. 3043403049 <br />
              Tel. 3043403049
            </td>
            <td>Claro</td>
            <td>Noches a Mil</td>
            <td>Ikamax</td>
            <td>S/D</td>
            <td>
              <div className='fw-bold fs-6 text-success badge badge-light-success '>Activo</div>
            </td>
            <td>
              <button className='btn btn-sm btn-primary'>Seleccionar</button>
            </td>
          </tr>
          <tr>
            <td className='fw-bolder fs-6 text-warning'>
              Brad Simmons <br />
              <p className='text-muted text-center'>CC: 1007345398</p>
            </td>
            <td>0293842</td>
            <td>
              Tel. 3043403049 <br />
              Tel. 3043403049
            </td>
            <td>Claro</td>
            <td>Noches a Mil</td>
            <td>Ikamax</td>
            <td>S/D</td>
            <td>
              <div className='fw-bold fs-6 text-success badge badge-light-success '>Activo</div>
            </td>
            <td>
              <button className='btn btn-sm btn-primary'>Seleccionar</button>
            </td>
          </tr>
          <tr>
            <td className='fw-bolder fs-6 text-warning'>
              Brad Simmons <br />
              <p className='text-muted text-center'>CC: 1007345398</p>
            </td>
            <td>0293842</td>
            <td>
              Tel. 3043403049 <br />
              Tel. 3043403049
            </td>
            <td>Claro</td>
            <td>Noches a Mil</td>
            <td>Ikamax</td>
            <td>S/D</td>
            <td>
              <div className='fw-bold fs-6 text-success badge badge-light-success '>Activo</div>
            </td>
            <td>
              <button className='btn btn-sm btn-primary'>Seleccionar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
