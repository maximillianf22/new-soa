import React from 'react'

export const UsersCreate = () => {
    return (
        <>
            <div className="d-flex justify-content-between bg-white">
                <div className="fs-3">
                    <div>
                        Listado de Usuarios
                    </div>
                    <div className="text-muted fs-9">
                        400 Usuarios Registrados
                    </div>
                </div>

                <div className="d-flex">
                <form className="input-group">
                    <input className="form-control bg-secondary" type="search" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                    <button className="input-group-text bg-secondary" id="basic-addon1" type="submit"><i className="fas fa-search"></i></button>
                </form>   
                    <a href="!#" className="btn p-1 btn-dark"><span className="svg-icon svg-icon-1"><i className="fas fa-plus"></i></span>Nuevo</a>
                    <a href="!#" className="btn p-1 btn-dark"><i className="fas fa-glass-martini"></i></a>
                    <a href="!#" className="btn p-1 btn-dark"><i className="fas fa-cog"></i></a>
                    <a href="!#" className="btn p-1 btn-dark"><i className="fas fa-download"></i></a>
                </div>
                
            </div>

        </>
    )
}