import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions/authActions'
import { getAppointment } from '../redux/actions/AppointmentAction'

import PatientProfile from '../components/PatientProfile'
import KidProfile from '../components/KidProfile'

const ProfilePage = () => {
    const auth = useSelector(state => state.auth)
    
    return (
        <>
        {(auth.user && auth.user.age <= 15) ?<KidProfile />:<PatientProfile />}
        
        </>


    )
}

export default ProfilePage
