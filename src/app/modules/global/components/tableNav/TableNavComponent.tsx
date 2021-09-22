import React from 'react'


export const AccountsTable = () => {
  return (
    <>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            {/* <TabTable /> */}
            <div className='card-body py-3'>
              <div className='tab-content'>
                <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
                  {/* <TabAccounts /> */}
                </div>
                <div className='tab-pane fade' id='kt_table_widget_5_tab_2'>
                  {/* <TabPlans /> */}
                </div>
                <div className='tab-pane fade' id='kt_table_widget_5_tab_3'>
                  {/* <TabServices /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='card'>
            <div className='card-body'>
              <div className='container-custom'>
                <div className='card-header border-0'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Listado de Usuario</span>
                    <span className='text-muted mt-1 fw-bold fs-7'>234 Usuario registrados</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
