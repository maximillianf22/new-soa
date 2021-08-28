import React from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {checkIsActive, KTSVG} from '../../../helpers'
import {useLayout} from '../../core'

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  hasBullet?: boolean
  className?: string
}

const AsideMenuItem: React.FC<Props> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  className,
  hasBullet = false,
}) => {
  const {pathname} = useLocation()
  const isActive = checkIsActive(pathname, to)
  const {config} = useLayout()
  const {aside} = config

  return (
    <div className='menu-item'>
      <Link className={clsx('menu-link without-sub px-4', {active: isActive})} to={to}>
        {hasBullet && (
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
        )}
        {icon && aside.menuIcon === 'svg' && (
          <span className={`btn btn-active-primary btn-icon-primary px-4 ${className}`}>
            <KTSVG path={icon} className='svg-icon-2 svg-icon-2x m-0' />
          </span>
        )}
        {fontIcon && aside.menuIcon === 'font' && <i className={clsx('bi fs-3', fontIcon)}></i>}
        <span className='menu-title ms-5'>{title}</span>
      </Link>
      {children}
    </div>
  )
}

export {AsideMenuItem}
