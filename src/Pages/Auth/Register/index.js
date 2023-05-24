import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../../Storages/Actions/register"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const confirmRegister = (data) => {
        Register(data)
        handleOpen()
    }

    const Register = (e) => {
        e.preventDefault();
        let data = {
            name,
            email,
            password,
        };
        dispatch(registerUser(data));
    };
    return (
        <div className="justify-content-center align-items-center">
            <div className="recipe">
                <h2>Recipe...</h2>
                <h2 className="started">Let's Get Started</h2>
                <p style={{ textAlign: "center" }}>creative new account to access all features</p>
            </div>
            <div className="container" style={{ marginTop: "51px" }}>
                <div className="row justify-content-center align-items-center inner-row">
                    <div className="col-lg-5 col-md-7">
                        <div className="form-box">
                            <form onSubmit={confirmRegister} className="form-input">
                                <div className="mb-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="disabledTextInput" className="form-control"
                                        placeholder="Enter Email Address" name="email" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Name</label>
                                    <input onChange={(e) => setName(e.target.value)} name="name" type="text" id="disabledTextInput" className="input-form form-control"
                                        placeholder="Enter Your Name" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="text" id="disabledTextInput" className="form-control" placeholder="Password" name="password" />
                                </div>
                                <div className="mb-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                                        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                            I agree to treams & condition
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" style={{ paddingTop: "18px" }} className="btn button-input" >Register Account</button>
                                <div className="already">
                                    <p>Already have account? <span><Link to={'/login'}>Log in Here</Link></span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="modal-alert" show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton style={{ borderBottom: "0", justifyContent: "center" }}>
                    <Modal.Title className="text-warning">You're All Set</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center" style={{ borderBottom: "0", justifyContent: "center" }}>
                    <p>Please check your email for verification</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center" style={{ marginTop: "100px", borderTop: "0", justifyContent: "center" }}>
                    <Button className="btn-warning text-white shadow-none" variant="secondary" style={{ width: '200px' }} onClick={() => navigate("/login")}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Register