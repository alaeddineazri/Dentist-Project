

import React from 'react'
import { Link } from 'react-router-dom';
import Timetables from './Timetables';
const Footer = () => {
    return (
        <footer className="text-dark text-center text-lg-start bg-light">
            <div className="container  ">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 ">
                            <h5 className="text-uppercase mb-4">About Us</h5>
                            <p>
                            We provide team-based, comprehensive dental care for children and adults, including patients of all ages 
                            </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.393212514856!2d10.594763950681264!3d35.83936062879356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b840813200d%3A0x5f3bbefb88f9835d!2sGOMYCODE%20Sousse!5e0!3m2!1sfr!2stn!4v1638280698201!5m2!1sfr!2stn" width={300} height={300} style={{ border: 0 }} allowFullScreen />

                        </div>

                        <div className=" px-5 col-lg-4 col-md-6 mb-4 mb-md-0">
                            <Link to='/'><img src="image/Logo.png" width="80" height="80" className="d-inline-block align-top" /></Link>
                            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
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
                            <div className="container mx-3 p-4 pb-0">
                                
                                <section className="mb-4">
                                    {/* Facebook */}
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                                    {/* Twitter */}
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter" /></a>
                                    {/* Google */}
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google" /></a>
                                    {/* Instagram */}
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram" /></a>
                                    {/* Linkedin */}
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                                    {/* Github */}
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github" /></a>
                                </section>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <Timetables />
                        </div>

                    </div>

                </div>



            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                © 2021 Copyright
            </div>

        </footer>
    )
}

export default Footer
