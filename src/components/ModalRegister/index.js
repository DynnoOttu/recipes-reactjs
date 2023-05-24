import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalRegister = (props) => {
    const { show, handleClose } = props

    return (
        <div className="modal modal-alert" id="myModal" show={show} onHide={handleClose}>
            <div className="modal-dialog modal-lg modal-sm">
                <div className="modal-content rounded-0">
                    <div className="modal-header" style={{ borderBottom: "0", justifyContent: "center" }}>
                        <h4>You're all set!</h4>
                    </div>
                    <div className="modal-body" style={{ borderBottom: "0", justifyContent: "center" }}>
                        <p>Please check your email account for verification</p>
                    </div>
                    <div className="modal-footer button-oke" style={{ marginTop: "100px", borderTop: "0", justifyContent: "center" }}>
                        <button type="button" className="btn" data-bs-dismiss="modal" onClick={handleClose}>Oke</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegister