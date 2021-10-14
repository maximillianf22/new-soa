import React from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {ListContactsItem} from './ListContactsItem'

export const ListContacts = () => {
  return (
    <div style={{maxHeight: '75vh', overflowY: 'auto'}}>
      <div className='px-10'>
        <ListContactsItem
          nombre='Yeison Antoonio'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
          responsable
        />
        <ListContactsItem
          nombre='Daniel Alejandro'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='David Elias'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='Andres Fernando'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='Alejandro '
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='Alexander Jose'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='Jose'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='Maximillian Joshua'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='Didiel'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
        <ListContactsItem
          nombre='Anderson Sebastian'
          apellido_materno='Jimenez'
          active
          telefono1='308789678'
          telefono2='3127890984'
          usuario='Ikamaxi'
        />
      </div>
    </div>
  )
}
