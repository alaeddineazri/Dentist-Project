import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button, FormControl, Form } from 'react-bootstrap'
import { deleteApp, getAllAppointment, updateApp } from '../redux/actions/AppointmentAction'

const Appointment = ({ appointments, index }) => {

    const dispatch = useDispatch()

    const handelDelete = () => {
        dispatch(deleteApp(appointments._id))
    }



    const [updateDate, setUpdateDate] = useState({
        dateOfAppointment: appointments.dateOfAppointment,
        timeOfDay: appointments.timeOfDay,
        status: appointments.status,

    })


    const handelChange = (e) => {
        e.preventDefault()
        setUpdateDate({ ...updateDate, [e.target.name]: e.target.value })
    }



    const handelUpdate = async (e) => {
        e.preventDefault()
        await dispatch(updateApp(appointments._id, updateDate))
        await dispatch(getAllAppointment())
        await handleClose()
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <tr style={{ backgroundColor: appointments.status ? "#80de95" : "#e9949c" }}  >
            <td >{index + 1}</td>
            <td >{appointments._id}</td>
            <td >{appointments.firstname}</td>
            <td >{appointments.lastname}</td>
            <td >{appointments.dateOfAppointment}</td>
            <td >{appointments.timeOfDay}</td>
            <td >{appointments.status ? "Confirmed" : "Unconfirmed"}</td>
            <td>
                <a type="button" onClick={() => handelDelete(appointments._id)} className="btn btn-floating btn-danger btn-md"><i class="fas fa-calendar-times"></i></a>
                <a type="button" onClick={handleShow} className="btn btn-floating btn-info btn-md"><i class="far fa-edit"></i></a>
            </td>

            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center " style={{ border: "2px solid gray " }}>
                            <p>Firstname:{appointments.firstname}</p>
                            <p>Lastname:{appointments.lastname}</p>
                            <p>Date Of Appointment:{appointments.dateOfAppointment}</p>
                            <p>Time Of Day:{appointments.timeOfDay}</p>
                        </div>
                        <span>Date Of Appointment</span>
                        <FormControl type="date" placeholder={appointments.dateOfAppointment} name="dateOfAppointment" className="mr-sm-2" onChange={handelChange} />
                        <span>Time Of Day</span>
                        <Form.Select name="timeOfDay" className="mr-sm-2" onChange={handelChange} aria-label="Default select example">
                            <option>{appointments.timeOfDay}</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Noon">Noon</option>
                            <option value="Morning">Morning</option>
                        </Form.Select>
                        <Form.Select name="status" className="mr-sm-2" onChange={handelChange} aria-label="Default select example">
                            <option>{appointments.status ? "Confirmed" : "Unconfirmed"}</option>
                            <option value={false}>Unconfirmed</option>
                            <option value={true}>Confirmed</option>
                        </Form.Select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handelUpdate}>SAVE CHANGES</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </tr>
    )
}

export default Appointment
