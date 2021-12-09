import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getProfile } from '../redux/actions/authActions'
import Welcome from "../components/Welcome"
import { getAllAppointment, getAppointment } from '../redux/actions/AppointmentAction'

const WelcomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile())
    }, [])


    const auth = useSelector(state => state.auth)

    const history = useHistory()

    function handleToProfile() {
        setTimeout(() => {
            history.push('/profile')
            console.log("toProfile")
        }, 5000)
    }
    function handleToDashboard() {
        setTimeout(() => {
            history.push('/dashboard')
            console.log("toDashboard")
        }, 5000)
    }

    useEffect(() => {
        if (auth.user) {
            const timer = setInterval(() => {
                if (auth.user.role==="Patient") {
                    handleToProfile()
                    dispatch(getAppointment())
                    clearInterval(timer)
                } else {
                    handleToDashboard();
                    dispatch(getAllAppointment())
                    clearInterval(timer);
                }
            }, 3000);
        }
    }, [auth.user]);





    return (
        <div >
            <Welcome auth={auth}/>
        </div>
    )
}

export default WelcomePage
