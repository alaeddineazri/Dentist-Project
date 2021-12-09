import React from 'react'
import {Container } from 'react-bootstrap'

const AboutUS = () => {

    
    return (
        <Container  >
            <section  className=" bg-light text-dark text-center  text-sm-start" >
                <div   >
                    <div className="  d-flex flex-wrap flex-md-nowrap align-items-center  justify-content-end">
                        <div className=" container  p-3">

                                <img
                                    className="d-block w-100 w-sm-50"
                                    src="./image/Team.jpg"
                                    alt="First slide"
                                />
                                
                        </div>
                        <div className=" container  p-3">

                            <div className="py-2 display-1 text-dark d-md-block text-center ">
                                <p style={{color:"#18538e"}} className=" display-3   "><strong>MEET OUR TEAM</strong></p>
                                <p style={{color:"#18538e"}} className="display-3 ">We Welcome You In Warm And Relaxed Atmosphere </p>
                                
                            </div>

                        </div  >
                    </div>
                </div>
            </section >

        </Container>
    )
}

export default AboutUS
