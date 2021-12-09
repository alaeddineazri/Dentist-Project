

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table } from "react-bootstrap"
import { getAllAppointment } from '../redux/actions/AppointmentAction'
import Appointment from './Appointment'
import Filter from './Filter'

const AppointmentList = () => {
    const appointments = useSelector(state => state.appointment.date)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getAllAppointment())
    },[])

    const [filter, setFilter] = useState("")
    const handelFilter = (val) => {
        setFilter(val)
    }



    return (<Container>
        <Filter handelFilter={handelFilter} type={"date"}/>
        {appointments &&
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th >ID</th>
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Date</th>
                        <th >Time</th>
                        <th >Status</th>

                    </tr>
                </thead>

                <tbody>
                    {appointments.filter(elm => elm.dateOfAppointment.toLowerCase().startsWith(filter.toLowerCase())).map((elm, index) => <Appointment key={index} index={index} appointments={elm} />)}
                    
                </tbody>




            </Table>}
    </Container>
    )
}

export default AppointmentList

