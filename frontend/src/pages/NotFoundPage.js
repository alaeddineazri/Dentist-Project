import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div style={{ backgroundColor: '#003060' }} className="   text-center text-light align-items-center justify-content-center">
            <h1 className="display-3">404</h1>
            <div className="  d-flex text-center text-light align-items-center justify-content-center">
                <img className=" px-1 d-md-block img-fluid w-50 " src="./image/404.gif" alt="" />
            </div>
            <div class="contant_box_404">
                <h3 class="h2">
                    Look like you're lost
                </h3>

                <p>the page you are looking for not avaible!</p>

                <a href="/" class="link_404"></a><Link to='/'><button variant="outline-primary" >Go to Home</button></Link>
            </div>
        </div>
    )
}

export default NotFoundPage
