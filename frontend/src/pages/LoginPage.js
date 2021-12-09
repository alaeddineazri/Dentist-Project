import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../redux/actions/authActions'
import { ToastContainer } from 'react-toastify'
import Slide from 'react-reveal/Slide'
import { Spinner } from 'react-bootstrap'


const LoginPage = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })

    const auth = useSelector(state => state.auth)

    const handelChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(login(info))

    }

    const history = useHistory()



    function handleSteady() {
        setTimeout(() => {
            history.push('/welcome')
            console.log("welcome")
        }, 2000)
    }

    useEffect(() => {
        if (auth.isAuth)
            handleSteady()
    }, [auth.isAuth])

    const sectionStyle = {

        backgroundImage: "url(" + "./image/login.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }





    return (
        <div style={sectionStyle} className="text-light text-center p-5 text-sm-start">
            <div className="container  ">
                {auth.isLoading && <><div  className=" text-center"><Spinner className="text-light " animation="border"  /></div></>}
                <div className="d-sm-flex flex-md-nowrap  align-items-center justify-content-space-between">
                    <Slide right><img className="  img-fluid w-50 " src="./image/LogoWhite.png" alt="LogoWhite" /></Slide >
                    <Slide left><div style={{ border: "2px solid gray", borderRadius: "15px", backdropFilter: "blur(6px)" }} className=" m-1 p-1">
                        <form className="px-md-5 py-3" onSubmit={handelSubmit}>
                            <div className="display-6 form-group-">
                                <label >Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={handelChange} />
                            </div>
                            <div className="display-6 form-group">
                                <label >Password</label>
                                <input name="password" type="password" className="form-control" autocomplete id="exampleDropdownFormPassword1" placeholder="Password" onChange={handelChange} />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" for="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                            <div className="  py-3">
                                <button type="submit" className="btn px-5 btn-warning">Login</button>
                                <button type="reset" className="btn px-3 mx-1  btn-outline-light" >Reset</button>

                            </div>

                        </form>
                        <div className="dropdown-divider white "></div>
                        <div>



                            <a className=" p-3 text-light" href="/register">New around here? Sign up</a>

                        </div><a className=" p-3 text-light" href="#">Forgot password?</a>

                    </div>

                    </Slide >

                    <ToastContainer />
                </div>
            </div>
            

        </div>
    )
}

export default LoginPage

