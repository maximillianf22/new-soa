import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'
import {MenuInnerSearch} from './MenuInnerSearch'

export function MenuInner() {

  return (
    <>
      <Link to='/dashboard' className='my-lg-auto me-4'>
        <img
          alt='Logo'
          className='my-auto logo'
          src={toAbsoluteUrl('/media/soa/layout/logo.svg')}
        />
      </Link>
      <div className="item w-100">
        <MenuInnerSearch className='header-search-bar'/>
      </div>
    </>
  )
}
