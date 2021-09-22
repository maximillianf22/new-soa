import React from 'react'

export const DropdownSoaang = () => {
  return (
    <>
      <div
        className='menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px'
        data-kt-menu-dismiss='true'
      >
        <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
          data-kt-menu-placement='right-start'
        >
          <span className='menu-link py-3'>
            <span className='menu-icon'>
              <span className='svg-icon svg-icon-2'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mh-50px'
                >
                  <path
                    opacity='0.3'
                    d='M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z'
                    fill='black'
                  ></path>
                  <rect x='6' y='12' width='7' height='2' rx='1' fill='black'></rect>
                  <rect x='6' y='7' width='12' height='2' rx='1' fill='black'></rect>
                </svg>
              </span>
            </span>
            <span className='menu-title'>Chat</span>
            <span className='menu-arrow'></span>
          </span>
          <div
            className='menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px'
            data-kt-menu-dismiss='true'
          >
            <div className='menu-item me-lg-1'>
              <a className='menu-link py-3' href='/metronic8/react/demo1/apps/chat/private-chat'>
                <span className='menu-bullet'>
                  <span className='bullet bullet-dot'></span>
                </span>
                <span className='menu-title'>Private Chat</span>
              </a>
            </div>
            <div className='menu-item me-lg-1'>
              <a className='menu-link py-3' href='/metronic8/react/demo1/apps/chat/group-chat'>
                <span className='menu-bullet'>
                  <span className='bullet bullet-dot'></span>
                </span>
                <span className='menu-title'>Group Chart</span>
              </a>
            </div>
            <div className='menu-item me-lg-1'>
              <a className='menu-link py-3' href='/metronic8/react/demo1/apps/chat/drawer-chat'>
                <span className='menu-bullet'>
                  <span className='bullet bullet-dot'></span>
                </span>
                <span className='menu-title'>Drawer Chart</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
