import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Slide from 'react-reveal/Slide'
const AboutUsPage = () => {
    const sectionStyle = {
        backgroundImage: "url(" + "./image/BG-aboutUs.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }



    return (
        <div >
            <Container style={sectionStyle} >
                <section className="  text-light text-center  text-sm-start  p-5" >
                    <div   >
                        <div className="  d-flex flex-wrap flex-lg-nowrap align-items-center  justify-content-end">
                            <div className=" container  ">
                                <Slide left>
                                    <h4 style={{ color: "#18538e" }} className="py-2 d-md-block  ">
                                        <h2 >ABOUT US
                                        </h2>

                                        We provide team-based, comprehensive dental care for children and adults, including patients of all ages
                                    </h4>
                                </Slide>
                            </div  >
                            <Slide left>
                                <div className=" container  p-3">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="./image/team1.jpg"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="./image/team2.jpg"
                                                alt="Second slide"
                                            />


                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="./image/team3.jpg"
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Slide>

                        </div>
                    </div>
                </section >

            </Container>
        </div>
    )
}

export default AboutUsPage
