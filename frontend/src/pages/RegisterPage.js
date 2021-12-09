

import React, { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import { register } from '../redux/actions/authActions'
import Slide from 'react-reveal/Slide'



const RegisterPage = () => {
    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        age: "",
        phone: "",
        email: "",
        password: "",
    })

    const handelChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    console.log(info)
    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(register(info))

    }

    const auth = useSelector(state => state.auth)
    const history = useHistory()
    useEffect(() => {
        if (auth.isAuth)
            history.push('/profile')
    }, [auth.isAuth])

    const sectionStyle = {
        backgroundImage: "url(" + "./image/registerBG.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed"
    }





    const errors = useSelector((state) => state.auth.errors)


    return (
        <div style={sectionStyle} className="text-light text-center p-5 text-sm-start">
            <div className="container ">
                {auth.isLoading && <><div className=" text-center"><Spinner className="text-light " animation="border" /></div></>}
                <div className="d-sm-flex flex-md-nowrap  align-items-center justify-content-space-around">
                    <Slide right >
                        <div style={{ border: "1px solid gray", borderRadius: "15px", backdropFilter: "blur(6px)" }} className="  mx-md-5 p-md-2">
                            <form className="px-md-5  py-3" onSubmit={handelSubmit}>
                                <div className=" p-2 form-group-">
                                    <label >First Name</label>
                                    <input name="firstname" type="text" required className="form-control" placeholder="firstname" onChange={handelChange} />
                                </div>
                                <div className=" p-2 form-group-">
                                    <label >Last Name</label>
                                    <input name="lastname" type="text" required className="form-control" placeholder="lastname" onChange={handelChange} />
                                </div>
                                <div className=" p-2 form-group-">
                                    <label >Age</label>
                                    <input name="age" type="number" required min="10" className="form-control" placeholder="99" onChange={handelChange} />
                                </div>
                                <div className=" p-2 form-group-">
                                    <label >Phone</label>
                                    <input name="phone" type="text" required className="form-control" placeholder="xx xxx xxx" onChange={handelChange} />
                                </div>
                                <div className=" p-2 form-group-">
                                    <label >Email address</label>
                                    <input name="email" type="email" required className="form-control" placeholder="email@example.com" onChange={handelChange} />
                                </div>
                                <div className=" p-2 form-group">
                                    <label >Password</label>
                                    <input name="password" type="password" required className="form-control" placeholder="Password" onChange={handelChange} />
                                </div>

                                <div className="  py-3">
                                    <button type="submit" className="btn mx-sm-5  btn-warning">Sign UP</button>
                                    <button type="reset" className="btn  btn-outline-light" >Reset</button>

                                </div>

                            </form>
                            <div className="dropdown-divider white "></div>
                            <div>

                                <a className=" m-sm-5 p-sm-3 text-light" href="/login">you already have an account ? <strong>Login</strong></a>

                            </div>

                        </div >
                        <div>
                        </div>
                    </Slide >
                    <Slide left>
                        <img className=" mx-5 d-none d-lg-block img-fluid w-50 " src="./image/LogoWhite.png" alt="LogoWhite" />
                    </Slide >

                </div>
                <ToastContainer />
            </div>

        </div >
    )
}

export default RegisterPage
