import React from 'react'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import { Container } from 'react-bootstrap'


const ContactUs = () => {
    const sectionStyle = {
        backgroundImage: "url(" + "./image/BG-aboutUs.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div>
            <Container style={sectionStyle} >
                <section className="  text-light text-center  text-sm-start  p-5" >
                    <div   >
                        <div className="  d-flex flex-wrap flex-lg-nowrap align-items-center  justify-content-around">
                            
                            <Slide left>
                                <ul className=" fs-5 my-5 fa-ul " style={{ color: "#18538e"}}>
                                        <li className="mb-3">
                                            <span className="fa-li"><i className="fas fa-home" /></span><span className="ms-2"> Address</span>
                                        </li>
                                        <li className="mb-3">
                                            <span className="fa-li"><i className="fas fa-envelope" /></span><span className="ms-2">Email</span>
                                        </li>
                                        <li className="mb-3">
                                            <span className="fa-li"><i className="fas fa-phone" /></span><span className="ms-2">phone</span>
                                        </li>
                                        <li className="mb-3">
                                            <span className="fa-li"><i className="fas fa-print" /></span><span className="ms-2">phone</span>
                                        </li>
                                    </ul>
                            </Slide>
                                <Slide left>
                                    <img src="image/Logo.png"  className="d-inline-block w-50 align-top" />
                                    
                                </Slide>
                            

                        </div>
                    </div>
                </section >

            </Container>
        </div>
    )
}

export default ContactUs
