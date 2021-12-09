import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade'
import { useSpring, animated } from 'react-spring'


const MainSection = () => {

    const Style = {
        background: "linear-gradient(180deg, #18538e 70%, white 30%  )"
    }



    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0.2 },
        delay: 600,
        reset: true,
        reverse: flip,
        onRest: () => set(!flip),
    })

    return (
        <Container >
            <div className="text-white text-center  text-sm-start" >
                <div style={Style} >

                    <div className="  d-flex align-items-start d-sm-flex justify-content-end">
                        <div>
                            <row className="row-lg-">
                                <Fade>
                                    <h1 className="px-5 display-4">Your New <span className="text-light "><Flash >Smile</Flash> </span>Starts Here</h1>
                                </Fade>
                            </row>
                            <row>
                                <Fade>
                                    <p className=" px-5 d-md-block lead">
                                        Oral health is a key indicator of overall health, well-being and quality of life.
                                    </p>
                                </Fade>
                            </row>
                            <animated.h1 style={props}><row><Link to="/appointment"><button className="btn w-50 p-4 m-5 btn-warning"><h4>BOOK AN APPOINTMENT</h4> </button></Link></row></animated.h1>

                            <row className="d-flex m-5">
                                <img className="  d-md-block img-fluid w-50 " src="./image/pub1.gif" alt="" />
                                <img className="px-1 d-md-block img-fluid w-25 " src="./image/pub3.gif" alt="" />
                                <img className="  d-md-block img-fluid w-25 " src="./image/pub2.gif" alt="" />
                            </row>
                        </div>
                        <img className=" d-none d-md-block img-fluid w-50 " src="./image/bigSmile.png" alt="" />
                    </div>
                </div>
                <div >
                    <img className=" d-md-none d-block img-fluid w-100 " src="/image/bigSmile2.png" alt="" />
                </div>
            </div >

        </Container>
    )
}

export default MainSection







