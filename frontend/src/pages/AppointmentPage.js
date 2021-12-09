
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAppointment, getAllAppointment } from '../redux/actions/AppointmentAction'
import { useHistory } from 'react-router'



const AppointmentPage = () => {
    const [date, setDate] = useState({
        dateOfAppointment: "",
        timeOfDay: ""
    })


    const handelChange = (e) => {
        setDate({ ...date, [e.target.name]: e.target.value })
    }

    const history = useHistory()

    const dispatch = useDispatch()
    const handelSubmit = async (e) => {
        e.preventDefault()
        await dispatch(addAppointment(date))
        await history.push('/profile')

    }
    const dateMin = new Date().toISOString().split("T")[0]

    const sectionStyle = {
        backgroundImage: "url(" + "./image/AppointmentBg.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed"
    }

    return (

        <div style={sectionStyle} className="text-light text-center px-5 text-md-center ">
            <div className="container ">
                <div className=" py-5 d-sm-flex align-items-center justify-content-space-around">
                    <div style={{ border: "1px solid gray", borderRadius: "15px", backdropFilter: "blur(6px )" }} className="  w-100 my-5 p-2">
                        <form className="  p-3" onSubmit={handelSubmit}>
                            <div className=" p-3 form-group">
                                <h3 className="  p-3">Date Of Appointment</h3>
                                <input
                                    disabledDays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
                                    enableTime
                                    required
                                    name="dateOfAppointment"
                                    min={dateMin} type="date"
                                    className="form-control"
                                    onChange={handelChange} />
                                <select  required className="form-control my-2" name="timeOfDay" onChange={handelChange} >
                                    <option ></option>
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Noon">Noon</option>
                                </select>
                            </div>
                            <div className="  py-3">
                                <button type="submit" className="btn px-3 btn-warning">Book An Appointment</button>
                                <button type="reset" className="btn px-3 mx-1  btn-outline-light" >Reset</button>
                            </div>
                        </form>
                    </div  >
                    <div className=" mx-3" >
                        <h1>Important</h1>
                        <h4> If you can not attend your consultation please notify us at least 48 hours in advance.
                            An administrative assistant will confirm your consultation date and time by phone.
                        </h4>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AppointmentPage

