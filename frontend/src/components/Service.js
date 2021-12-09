import React from 'react'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'

const Service = ({ description, title, logoUrl, id }) => {
    const Style = {

        background: " #18538e "

    };

    return (

        <div style={Style} className="col-sm ">
            <Link to={{ pathname: `/service/${id}` }}>
                <div style={Style} className=" text-light mb-3">
                    <di className="text-centre   " dataMdbRippleColor="primary" type="button">
                        <Zoom left>
                            <img alt="logo" src={logoUrl} width="100" height="100" className="d-inline-block align-top" /></Zoom>
                        <Zoom right><h3 className="card-title ">{title}</h3></Zoom>
                        <Zoom left><p className="card-text ">{description}</p></Zoom>

                    </di>
                </div>
            </Link >
        </div >

    )
}

export default Service
