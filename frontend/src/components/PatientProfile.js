import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { getAppointment } from '../redux/actions/AppointmentAction'
import { getProfile } from '../redux/actions/authActions'

const PatientProfile = () => {
    const auth = useSelector(state => state.auth)
    const Appointment = useSelector(state => state.appointment.myDate)

    const dispatch = useDispatch()
    useEffect(async () => {
        await dispatch(getProfile())
        await dispatch(getAppointment())
    }, [])




    const Style = {
        backgroundImage: "url(" + "./image/profile.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: "fixed",
        backgroundRepeat: 'repeat-y'
    }


    return (
        <div className="p-4 row" style={Style}>
            {auth.user &&
                <div className=" text-light p-sm-5 container">
                    <div className="  d-flex flex-wrap flex-md-nowrap align-items-center  justify-content-end">
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
                        {Appointment &&
                            <div className=" container  p-3">
                                <div style={{ borderRadius: "15px", backdropFilter: Appointment.status ? "blur(6px) hue-rotate(330deg) " : "blur(6px) hue-rotate(110deg) " }} className="col-12 text-center p-3 pb-2">
                                    <p className="d-flex text-center  fw-bold p-3">Your Appointment : {Appointment.dateOfAppointment}</p>
                                    <p className="d-flex text-center  fw-bold p-3">{Appointment.status ?"  Is Confirmed"  : " Is Not Confirmed Yet" }</p>
                                </div>
                            </div>
                        }
                    </div>

                    <div style={{ border: "1px solid gray", borderRadius: "15px", backdropFilter: "blur(6px)" }} className="p-3 my-1 pb-2">
                        <h6 className="d-flex align-items-center mb-3 fw-bold p-3"><i className="text-info m-2">Medical </i>Records</h6>
                        <p className=" text-warning">Service : {auth.user.service}</p>
                        <p className=" text-warning">Diagnosis : {auth.user.diagnosis}</p>
                        <p className=" text-warning">Treatment Plan :{auth.user.treatmentPlan}</p>
                    </div>

                </div>}
            <ToastContainer />
        </div>


    )
}

export default PatientProfile
