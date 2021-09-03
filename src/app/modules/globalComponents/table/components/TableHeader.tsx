import React, {FC, useState} from 'react';
import { Button, Modal } from 'react-bootstrap-v5'
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { RootState } from '../../../../../setup';
import { KTSVG } from '../../../../../_metronic/helpers';
import { ITableState } from '../Redux/TableRedux';

type Props = {
  title: string, 
  count: number,
  btnPath?: string | undefined,
  btnTarget?: string
}



export const TableHeader = () => {
  const table: any = useSelector<RootState>(({table}) => table)
  
  const {tableHeader} = table;
  

    return (
        <>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-3 mb-1'>Listado de {tableHeader.title}</span>
                  <span className='text-muted mt-1 fw-bold fs-7'>{tableHeader.count} {tableHeader.title} registrados</span>
                </h3>
                <div
                  className='card-toolbar'
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  data-bs-trigger='hover'
                >
                  {
                    tableHeader.btnPath ? 
                      <Link
                        to={tableHeader.btnPath}
                        className='btn btn-sm btn-primary'
                        // data-bs-toggle='modal'
                        // data-bs-target='#kt_modal_invite_friends'
                      >
                        <i className='fas fa-plus'></i>
                        Nuevo
                      </Link> 
                        :
                        <>
                         <button type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target={tableHeader.btnTarget}
                          >
                            Launch demo modal
                          </button>
                        </>
                  }

                  <a className='btn btn-info btn-sm btn-icon ms-2'>
                    <i className='fa fa-filter'></i>
                  </a>
                  <a className='btn btn-success btn-sm btn-icon ms-2'>
                    <i className='fa fa-download'></i>
                  </a>
                  <a className='btn btn-secondary btn-sm btn-icon ms-2'>
                    <i className='fa fa-cog'></i>
                  </a>
                </div>
              </div>
              {/* end::Header */}
        </>
    )
}
