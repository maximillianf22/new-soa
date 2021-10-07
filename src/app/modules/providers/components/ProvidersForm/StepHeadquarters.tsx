import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export const StepHeadquarters = () => {
  return (
    <>
      <div className='card shadow-none bg-secondary'>
        <div className='card-title bg-white rounded p-10 d-flex bd-highlight'>
          <div className='bd-highlight w-75'>
            <h3 className='fw-bold m-0'>Configuracion de etapas del Servicio</h3>
            <p className='text-muted'>
              Puede mover las etapas que utilizara el servicio pero, las etapas del mismo color van
              juntas y las que tengan el mismo icono son dependientes (no pueden estar una sin la
              otra pero pueden ir separadas)
            </p>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
