import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap-v5';
import { useDispatch } from 'react-redux';
import { KTSVG } from '../../../../_metronic/helpers';
import { actions, ITableState } from '../../globalComponents/table/Redux/TableRedux';
import { TableComponent } from '../../globalComponents/table/TableComponent';

export const UsersTable = () => {

    const dispatch = useDispatch();

    const initialTableState: ITableState = {
        tableHeader: {
          title: 'Usuario',
          count: 234,
        //   btnPath: '/usuarios/crear',
          btnPath: '',
          btnTarget: '#kt_modal_1'
        },
        tableBody: {
            tableHeads: ['Nombre','Correo','Usuario','Rol'],
            tableContent: [{
                name: 'Ana Simmons',
                email: 'Ana@demo.com',
                user: 'ASOANG',
                rol: 'Coordinador'
            },{
                name: 'Ana Simmons',
                email: 'Ana@demo.com',
                user: 'ASOANG',
                rol: 'Coordinador'
            },{
                name: 'Ana Simmons',
                email: 'Ana@demo.com',
                user: 'ASOANG',
                rol: 'Coordinador'
            },{
                name: 'Ana Simmons',
                email: 'Ana@demo.com',
                user: 'ASOANG',
                rol: 'Coordinador'
            },{
                name: 'Ana Simmons',
                email: 'Ana@demo.com',
                user: 'ASOANG',
                rol: 'Coordinador'
            },{
                name: 'Ana Simmons',
                email: 'Ana@demo.com',
                user: 'ASOANG',
                rol: 'Coordinador'
            },{
                name: 'Ana Simmons',
                email: 'Ana@demo.com',
                user: 'ASOANG',
                rol: 'Coordinador'
            },
            ]
        }
    }
    
        
    useEffect(() => {
        dispatch(actions.load(initialTableState));
        return () => {
            dispatch(actions.clear())
        }
    }, [])
    
    
    
    return (
        <>
            <TableComponent />
            
            <div className="modal fade" tabIndex={-1} id="kt_modal_1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <div
                        className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        >
                        <KTSVG
                            path="/media/icons/duotune/arrows/arr061.svg"
                            className="svg-icon svg-icon-2x"
                        />
                        </div>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                        >
                        Close
                        </button>
                        <button type="button" className="btn btn-primary">
                        Save changes
                        </button>
                    </div>
                    </div>
                </div>
            </div>




            <div className="modal fade" tabIndex={-1} id="kt_modal_2">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Super Modal</h5>
                        <div
                        className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        >
                        <KTSVG
                            path="/media/icons/duotune/arrows/arr061.svg"
                            className="svg-icon svg-icon-2x"
                        />
                        </div>
                    </div>
                    <div className="modal-body">
                        <p>Aquí va el texto del Modal</p>
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                        >
                        ceerrrararara
                        </button>
                        <button type="button" className="btn btn-primary">
                        uguarada cammbiooss
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
