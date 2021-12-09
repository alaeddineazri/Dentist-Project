import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/actions/UserActions'
import { Container, Table } from "react-bootstrap"
import Filter from './Filter'
import MedicaLRecord from './MedicalRecord'

const MedicaLRecordList = () => {
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
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Age</th>
                        <th >Service</th>
                        <th >Diagnosis</th>
                        <th >Treatment Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.filter(elm => elm.firstname.toLowerCase().startsWith(filter.toLowerCase())).map((elm, index) => <MedicaLRecord key={index} index={index} info={elm} />)}
                </tbody>
            </Table>}
    </Container>
    )
}

export default MedicaLRecordList



