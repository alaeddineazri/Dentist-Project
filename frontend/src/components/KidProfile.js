import React, { useEffect, useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { getAppointment } from '../redux/actions/AppointmentAction'
import { getProfile } from '../redux/actions/authActions'
import Game from './Game'

const KidProfile = () => {
    const auth = useSelector(state => state.auth)
    const Appointment = useSelector(state => state.appointment.myDate)

    const dispatch = useDispatch()
    useEffect(async () => {
        await dispatch(getProfile())
        await dispatch(getAppointment())
    }, [])




    const Style = {
        backgroundColor: "#18538e",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
        backgroundRepeat: 'repeat'
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


        <>
            <div style={Style} >
                <div className="text-light p-sm-5 container" >

                    <div className="row text-center">
                        <div className="col-sm">
                            <img
                                className="d-block w-75"
                                src="./image/kidProfile.gif"
                                alt="Third slide"
                            />
                        </div>

                        {auth.user && <div className="col-sm">
                            <div style={{ border: "1px solid gray", borderRadius: "15px", backdropFilter: "blur(6px)" }} className=" container  p-3">
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="py-2">First Name</p>
                                    <p className="py-2 text-warning">{auth.user.firstname}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="py-2">Last Name</p>
                                    <p className="py-2 text-warning">{auth.user.lastname}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="py-2">Age</p>
                                    <p className="py-2 text-warning">{auth.user.age}</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="py-2">Phone</p>
                                    <p className="py-2 text-warning">{auth.user.phone}</p>
                                </div>
                                <div type='button' className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="py-2">Email</p>
                                    <p className="py-2 text-warning">{auth.user.email}</p>
                                </div>

                            </div  >
                        </div>}

                        {Appointment && <div className="col-sm">
                            <div className=" container  p-3">
                            <div style={{ borderRadius: "15px", backdropFilter: Appointment.status ? "blur(6px) hue-rotate(330deg) " : "blur(6px) hue-rotate(110deg) " }} className="col-12 text-center p-3 pb-2">
                                    <p className="d-flex text-center  fw-bold p-3">Your Appointment : {Appointment.dateOfAppointment}</p>
                                    <p className="d-flex text-center  fw-bold p-3">{Appointment.status ?"  Is Confirmed"  : " Is Not Confirmed Yet" }</p>
                                </div>
                            </div>
                        </div>}

                    </div>
                    <div className="row  ">
                        <div className="col-sm col-8 py-3">
                            <div style={{ border: "1px solid gray", borderRadius: "15px", backdropFilter: "blur(6px)" }} className="p-3 my-1 pb-2">
                                <h6 className="d-flex align-items-center mb-3 fw-bold p-3"><i className="text-info m-2">Medical </i>Records</h6>
                                <p className=" text-warning">Service : {auth.user.service}</p>
                                <p className=" text-warning">Diagnosis : {auth.user.diagnosis}</p>
                                <p className=" text-warning">Treatment Plan :{auth.user.treatmentPlan}</p>
                            </div>
                        </div>



                        <div className="col-sm text-center ">

                            <h1 onClick={() => setShow(true)} >Click <img
                                className="w-25 float-right"
                                src="./image/tooth2.gif"
                            />Me</h1>
                            <Modal show={show}
                                onHide={handleClose}

                                keyboard={false}
                                animation={true}
                                fullscreen={true}
                                className="text-light bg-dark ">
                                <Modal.Header className="text-light bg-primary " closeButton>
                                    <Modal.Title>Memo Game</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="text-light bg-dark " ><Game /></Modal.Body>
                                <Modal.Footer className="text-light bg-primary ">
                                    <div variant="secondary text-center" onClick={handleClose}>
                                        GOOD BYE
                                        <img
                                            className="w-25 float-right"
                                            src="./image/byBy.gif"
                                        />
                                    </div>
                                </Modal.Footer >
                            </Modal>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </>



    )
}

export default KidProfile







