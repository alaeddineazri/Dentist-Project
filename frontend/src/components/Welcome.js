import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Bounce, Zoom ,Fade} from 'react-reveal'

const Welcome = () => {
    const auth = useSelector(state => state.auth)


 
    return (
        <div style={{backgroundColor:"#e1e1e1"}} >
            <video style={{width:"100vw",left:"%50" ,top:"%50" ,height:"100vh",zIndex:"0"}} autoPlay muted >
                <source src="./image/intro.mp4" type="video/mp4"/> 
            </video>

            {auth.user &&
                <h1 style={{position:"absolute",zIndex:"10" ,top: "20%", left: "50%"}}  className="text-center display-1" ><Bounce left cascade   >Welcome {auth.user.firstname}</Bounce></h1>}
            

        </div >
    )
}


export default Welcome


