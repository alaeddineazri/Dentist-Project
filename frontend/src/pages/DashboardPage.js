import React, { useEffect } from 'react'
import PatientList from '../components/PatientList'
import AppointmentList from '../components/AppointmentList'
import { ToastContainer } from 'react-toastify'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MedicaLRecordList from '../components/MedicalRecordList'


const DashboardPage = () => {

    const role = useSelector((state) => state.auth.user.role);

    const Style = {
        height: "100vh",
        backgroundImage: "url(" + "./image/profile.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    

    return (
        <Container  > 
            { (role=="Admin" ) ?
            <><h1 className="p-5">USERS MANAGEMENT</h1>
            <PatientList /></> : <></>}
            <h1 className="p-5">APPOINTMENTS MANAGEMENT</h1>
            <AppointmentList />
            <h1 className="p-5">MEDICAL RECORDS MANAGEMENT</h1>
            <MedicaLRecordList />
            <ToastContainer />
        </Container>


    )
}

export default DashboardPage
