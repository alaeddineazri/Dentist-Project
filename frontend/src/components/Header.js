import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import { Link } from 'react-router-dom'



const Header = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const mainStyle ={
        backdropFilter: "blur(30px)" ,backgroundColor:"rgb(251,251,251,0.75)"
    }

    const kidsStyle ={
        backdropFilter: "blur(30px)" ,backgroundColor:"rgba(192, 218, 234, 0.75)"
    }
    return (
        <header>
            <Navbar fixed="top"  style={(auth.user && auth.user.age <= 15)? kidsStyle: mainStyle } expand="md" >
                <Container >
                    <Link to='/'><img src={(auth.user && auth.user.age <= 15) ?"image/navbarLogo.gif":"image/Logo.png"} width="80" height="80" className="d-inline-block align-top" /></Link>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarLeftAlignExample">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="p-2 my-2 text-decoration-none text-dark" to="/aboutUs">About us </Link>
                            <Link className="p-2 my-2 text-decoration-none text-dark" to="/contactUs">Contact us</Link>
                            <NavDropdown className="p-2 font-weight-bold" title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link className=" text-decoration-none text-dark" to="/service/1">Fillings</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/2">Teeth Cleanings</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/3">Crowns</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/4">Bridges</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/5">Root Canals</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/6">Dentures</Link></NavDropdown.Item>
                            </NavDropdown>
                            {auth.user && auth.user.role == ("Patient") ? <Link className="p-2 my-2 text-decoration-none text-dark" to="/profile">Profile </Link> : <></>}
                            {auth.user && (auth.user.role == ("Admin") || auth.user.role == ("Doctor")) ? <Link className="p-2 my-2 text-decoration-none  text-dark" to="/dashboard">Dashboard </Link> : <></>}
                        </Nav>
                        <Nav className="d-flex">
                            {auth.isAuth ?
                                <>

                                    <Button className="mx-2 " variant="outline-warning"><Link className=" text-decoration-none text-warning" to="/appointment">Appointment</Link></Button>


                                    <Button onClick={() => dispatch(logout())} >LOGOUT</Button>

                                </> : <><Link to="/register"><Button  >SING UP</Button></Link>
                                    <Link to="/login"><Button className="mx-2 " variant="outline-primary">LOGIN</Button></Link></>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{
                display: "block",
                height: "100px"
            }} > </div>
        </header >
    )
}

export default Header






