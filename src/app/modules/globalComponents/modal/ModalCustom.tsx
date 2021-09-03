import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap-v5';

export const ModalCustom = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>  
            <Button className="btn btn-sm btn-primary" onClick={handleShow}>
                <i className='fas fa-plus'></i>
                Nuevo
            </Button>
            <Modal show={show} onHide={handleClose}>
            </Modal>
        </>
    )
}
