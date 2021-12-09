import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers, getAllUsers, updateUsers } from '../redux/actions/UserActions'
import { Modal, Button, FormControl, Form } from 'react-bootstrap'


const Patient = ({ info, index }) => {

    const dispatch = useDispatch()

    const handelDelete = () => {
        dispatch(deleteUsers(info._id))
    }


    const [updatedUser, setUpdatedUser] = useState({
        firstname: info.firstname,
        lastname: info.lastname,
        age:info.age,
        phone: info.phone,
        email: info.email,
        role: info.role,
    })

    const handelChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }




    const handelUpdate = async (e) => {
        e.preventDefault()
        await dispatch(updateUsers(info._id, updatedUser))    //! BR stateLess  stateFull
        await dispatch(getAllUsers())
        await handleClose()
        

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <tr >
            <td >{index + 1}</td>
            <td >{info._id}</td>
            <td >{info.firstname}</td>
            <td >{info.lastname}</td>
            <td >{info.age}</td>
            <td >{info.phone}</td>
            <td >{info.email}</td>
            <td >{info.role}</td>
            <td >{info.createdAt}</td>
            <td><a type="button" onClick={() => handelDelete(info._id)} className="btn btn-floating btn-danger btn-sm"><i class="fas fa-user-slash"></i></a>
                <a type="button" onClick={handleShow} className="btn btn-floating btn-info btn-sm"><i class="fas fa-user-edit"></i></a></td>
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
                        <span>First Name</span>
                        <FormControl type="text" placeholder={info.firstname} name="firstname" className="mr-sm-2" onChange={handelChange} />
                        <span>Last Name</span>
                        <FormControl type="text" placeholder={info.lastname} name="lastname" className="mr-sm-2" onChange={handelChange} />
                        <span>Age</span>
                        <FormControl type="text" placeholder={info.age} name="age" className="mr-sm-2" onChange={handelChange} />
                        <span>Phone</span>
                        <FormControl type="text" placeholder={info.phone} name="phone" className="mr-sm-2" onChange={handelChange} />
                        <span>Email</span>
                        <FormControl type="text" placeholder={info.email} name="email" className="mr-sm-2" onChange={handelChange} />
                        <span>Role</span>
                        <Form.Select name="role" className="mr-sm-2" onChange={handelChange} aria-label="Default select example">
                            <option>{info.role}</option>
                            <option value="Admin">Admin</option>
                            <option value="Patient">Patient</option>
                            <option value="Doctor">Doctor</option>
                        </Form.Select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handelUpdate}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </tr>
    )
}

export default Patient
