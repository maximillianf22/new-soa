import React from 'react'
import { Link } from 'react-router-dom';
import { TableStats } from './components/TableStats';
import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';


export const TableComponent: React.FC = () => {

    const tableHeads: string[] = ['Nombre','Correo','Usuario','Rol'];
    
    return (
        <>
            <TableStats />
            <div className="card p-5">
                <TableHeader title='Usuario' count={234} btnPath='/usuarios/crear' />
                <TableBody tableHeads={tableHeads} />
            </div>
            </>
          )
}
