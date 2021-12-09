import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/actions/UserActions'
import Patient from './Patient'
import { Container, Table } from "react-bootstrap"
import Filter from './Filter'

const PatientList = () => {
    const patients = useSelector(state => state.patients.info)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllUsers())
    }, [])                        

    const [filter, setFilter] = useState("")
    const handelFilter = (val) => {
        setFilter(val)
    }


    return (<Container>
        <Filter handelFilter={handelFilter} type={"text"} />
        {patients &&
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th >N°</th>
                        <th >ID</th>
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Age</th>
                        <th >Phone</th>
                        <th >Email</th>
                        <th >Role</th>
                        <th >Date of Creation</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.filter(elm => elm.email.toLowerCase().startsWith(filter.toLowerCase())).map((elm, index) => <Patient key={index} index={index} info={elm} />)}
                </tbody>
            </Table>}
    </Container>
    )
}

export default PatientList



