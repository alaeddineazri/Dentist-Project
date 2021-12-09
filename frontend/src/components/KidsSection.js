import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
const KidsSection = () => {

    const Style = {

        background: " #ffa900 "

    };

    const images = [
        "./image/kid1.png",
        "./image/kid2.png",
        "./image/kid3.png",
        "./image/kid4.png",
    ]
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * 4)]);
        }, 3000)

        return () => clearInterval(intervalId);
    }, [])

    return (

        <Container style={Style} className=" my-3"  >
            <section className=" text-center text-light  text-sm-start" >
                <div   >
                    <div className="  d-flex flex-wrap flex-md-nowrap align-items-center  justify-content-center">
                        <div className=" container  py-3">

                            <div className="py-2 d-md-block align-items-center text-center ">
                                <h3>YOUR CHILD'S FIRST DENTAL APPOINTMENT</h3>
                                <h1><strong>TODY</strong></h1><h3> WILL BE VERY HAPPY</h3>
                                <img className=" mx-5  img-fluid w-50 " src="./image/tooth.gif" alt="toothGif" />
                            </div>

                        </div  >
                        <div className=" container d-flex flex-wrap flex-md-nowrap   justify-content-end  ">


                            <img className="d-block w-100  " src={currentImage} alt="slide" />
                        </div>
                    </div>
                </div>
            </section >

        </Container>


    )
}

export default KidsSection








{/* <Container >
            <div className="text-white text-center  text-sm-start" >
                <div style={Style} >
                    
                    <div className="  d-flex align-items-start d-sm-flex justify-content-end">
                        <div>
                        <row className="row-lg-"><h1 className="px-5 display-4">Your New <span className="text-light "><Flash >Smile</Flash> </span>Starts Here</h1></row>
                        <row><p className=" px-5 d-md-block lead">
                                Oral health is a key indicator of overall health, well-being and quality of life.
                            </p>
                        </row>
                        <row><Link to="/appointment"><Tada><button className="btn w-50 p-4 m-5 btn-warning"><h4>BOOK AN APPOINTMENT</h4> </button></Tada></Link></row>
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

        </Container> */}



    //     <Container style={Style} className=" my-3"  >
    //     <section className=" text-center text-light  text-sm-start" >
    //         <div   >
    //             <div className="  d-flex flex-wrap flex-md-nowrap align-items-center  justify-content-center">
    //                 <div className=" container  py-3">

    //                     <div className="py-2 d-md-block align-items-center text-center ">
    //                         <h3>YOUR CHILD'S FIRST DENTAL APPOINTMENT</h3>
    //                         <h1><strong>TODY</strong></h1><h3> WILL BE VERY HAPPY</h3>
    //                         <img className=" mx-5  img-fluid w-50 " src="./image/tooth.gif" alt="toothGif" />
    //                     </div>

    //                 </div  >
    //                 <div className=" container d-flex flex-wrap flex-md-nowrap   justify-content-end  ">


    //                     <img className="d-block w-100  " src={currentImage} alt="slide" /> 
    //                 </div>
    //             </div>
    //         </div>
    //     </section >

    // </Container>