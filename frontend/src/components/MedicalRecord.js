import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers, getAllUsers, updateUsers } from '../redux/actions/UserActions'
import { Modal, Button, FormControl, Form, Row, Col, FloatingLabel } from 'react-bootstrap'


const MedicaLRecord = ({ info, index }) => {

    const dispatch = useDispatch()

    const [updatedUser, setUpdatedUser] = useState({
        treatmentPlan: info.treatmentPlan,
        diagnosis: info.diagnosis,
        service: info.service,
    })

    const handelChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }




    const handelUpdate = async (e) => {
        e.preventDefault()
        await dispatch(updateUsers(info._id, updatedUser))
        await dispatch(getAllUsers())
        await handleClose()


    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const Style = {
        height: "100vh",
        backgroundImage: "url(" + "./image/BG-MR.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
        backgroundRepeat: 'repeat-y'
    }

    const style2 = {
        border: "1px solid gray",
        borderRadius: "15px",
        backdropFilter: "blur(6px)",
        backgroundColor: "	rgb(0,0,0,0.6)"

    }
    const styleTd = {
        // wordWrap: "breakWord",
        // wordBreak: "break-all",
        // // whiteSpace: "normal!important",
        // // textAlign: "justify",
        // width :"100px"
    }

    return (

        <tr >
            <td >{index + 1}</td>
            <td >{info.firstname}</td>
            <td >{info.lastname}</td>
            <td >{info.age}</td>
            <td >{info.service}</td>
            <td className="text-break" style={styleTd} >{info.diagnosis}</td>
            <td className="text-break" >{info.treatmentPlan}</td>
            <td>
                <a type="button" onClick={handleShow} className="btn btn-floating btn-success btn-md"><i class="fas fa-notes-medical"></i></a></td>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    animation={true}
                    fullscreen={true}
                    className="bg-dark"
                >

                    <Modal.Header closeButton>

                        <Modal.Title ><span className="text-warning" >{info.firstname} </span>MEDICAL <span className="text-warning">RECORD</span></Modal.Title>
                    </Modal.Header >
                    <Modal.Body style={Style}>
                        <Form >
                            <div className="  p-5  container">
                                <div className="  d-flex flex-wrap flex-md-nowrap align-items-center  justify-content-end">
                                    <div style={style2} className=" text-light container m-2 p-3">
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2">First Name</p>
                                            <p className="py-2 text-warning">{info.firstname}</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2">Last Name</p>
                                            <p className="py-2 text-warning">{info.lastname}</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2">Age</p>
                                            <p className="py-2 text-warning">{info.age}</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom">
                                            <p className="py-2">Service</p>
                                            <p className="py-2 text-warning">{info.service}</p>
                                        </div>
                                    </div  >

                                    <div className=" container  p-1">
                                        <div className="col-12  p-1 pb-2">
                                            <div style={style2} className="  pb-2">
                                                <Row >
                                                    <Col >
                                                        <FloatingLabel className="m-2" controlId="floatingTextarea2" label="Service">
                                                            <Form.Select name="service" className="mr-sm-2 " onChange={handelChange} aria-label="Default select example">
                                                                <option>{info.service}</option>
                                                                <option value="Dentures">Dentures</option>
                                                                <option value="Root Canals">Root Canals</option>
                                                                <option value="Bridges">Bridges</option>
                                                                <option value="Crowns">Crowns</option>
                                                                <option value="Teeth Cleanings">Teeth Cleanings</option>
                                                                <option value="Fillings">Fillings</option>
                                                            </Form.Select>
                                                        </FloatingLabel>
                                                    </Col>

                                                </Row>
                                            </div>
                                            <div style={style2} className=" text-light container my-2 ">
                                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                                    <p className="py-2">Last Diagnosis</p>
                                                    <p className="p-2 text-break text-warning">{info.diagnosis}</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                                    <p className="py-2">Last Treatment Plan</p>
                                                    <p className="p-2 text-break text-warning">{info.treatmentPlan}</p>
                                                </div>

                                            </div  >
                                        </div>
                                    </div>

                                </div>
                                <div style={style2} className="p-1  pb-2 ">

                                    <FloatingLabel controlId="floatingTextarea2" label="Diagnosis">
                                        <Form.Control
                                            as="textarea"
                                            type="text" placeholder={info.diagnosis} maxLength="200" name="diagnosis" className="mr-sm-2 my-3 h-100" onChange={handelChange}

                                        />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingTextarea2" label="Treatment Plan">
                                        <Form.Control
                                            as="textarea"
                                            type="text" placeholder={info.treatmentPlan} maxLength="200" name="treatmentPlan" className="mr-sm-2 my-3 h-100" onChange={handelChange}

                                        />
                                    </FloatingLabel>
                                </div>
                            </div>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer style={{
                        border: "1px solid gray",
                        backgroundColor: "	rgb(0,0,0,0.6)"

                    }} >
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handelUpdate}>Save changes</Button>
                    </Modal.Footer>

                </Modal>
            </>
        </tr>
    )
}

export default MedicaLRecord
