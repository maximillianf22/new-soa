import React from 'react'
import { Dropdown } from 'react-bootstrap-v5'

export const SelectPlataforms = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle size="sm" id="dropdown-basic">
                    Seleccionar cliente
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
