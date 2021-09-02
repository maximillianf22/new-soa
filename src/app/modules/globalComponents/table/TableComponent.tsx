import React from 'react'
import { Link } from 'react-router-dom';
import { TableStats } from './components/TableStats';
import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';

export type TableContent = {
    name: 'Ana Simmons',
    email: 'Ana@demo.com',
    user: 'ASOANG',
    rol: 'Coordinador'
}

export const TableComponent: React.FC = () => {

    const tableHeads: string[] = ['Nombre','Correo','Usuario','Rol'];
    const tableContent: TableContent[] = [{
        name: 'Ana Simmons',
        email: 'Ana@demo.com',
        user: 'ASOANG',
        rol: 'Coordinador'
    }];
    
    return (
        <>
            <TableStats />
            <div className="card p-5">
                <TableHeader title='Usuario' count={234} btnPath='/usuarios/crear' />
                <TableBody tableHeads={tableHeads} tableContent={tableContent} />
            </div>
            </>
          )
}
