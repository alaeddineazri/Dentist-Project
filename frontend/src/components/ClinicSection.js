import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

const ClinicSection = () => {

    const Style = {

        background: " #18538e "

    };


    return (
        <Container  >
            <section className=" bg-light text-light text-center  text-sm-start" >
                <div style={Style}  >
                    <div className="  d-flex flex-wrap flex-md-nowrap align-items-center  justify-content-end">
                        <div className=" container  p-3">
                            <Slide left>
                                <p className="py-2 d-md-block lead ">
                                    <h3>A MODERN AND QUALITY CLINIC             </h3>

                                    Our professional team is pleased to welcome new patients and offer the same quality care year after year.

                                    In order to continue to serve you well, we have renovated the clinic to welcome you in comfort and a beautiful atmosphere
                                </p>
                            </Slide>
                        </div  >
                        <Fade>
                            <div className=" container  p-3">
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="./image/dentistroom.png"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Dentist Room</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="./image/waitingroom.jpg"
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Waiting Room</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="./image/kids.png"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>kids Area</h3>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section >

        </Container>
    )
}

export default ClinicSection


