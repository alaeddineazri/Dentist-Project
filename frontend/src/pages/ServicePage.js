import { Container } from "react-bootstrap"
import Fade from 'react-reveal/Fade'

const ServicePage = ({ ServiceDetails, match }) => {
    const service = ServiceDetails.find(elm => elm.id === match.params.id)
    return (
        <Container >
            <div className="row text-dark  text-center">

                <div className="col-sm">
                    <div className="  mb-3">
                        <di className="text-centre   ">
                            <img alt="logo" src={service.logoUrl} width="120" height="120" className="d-inline-block align-top" />
                            <h3 className="card-title ">{service.title}</h3>
                            <p className="card-text ">{service.description}</p>
                        </di>
                    </div>
                </div>

            </div>
            <div className="row text-dark p-5 align-items-center   text-center">
                <Fade left>
                    <div className="col-sm">
                        <div className="  mb-3">
                            <di className="text-centre   ">
                                <h3 className="card-title ">{service.descriptionTitle1}</h3>
                                <p className="card-text ">{service.description1}</p>
                            </di>
                        </div>
                    </div>
                </Fade>
                <Fade top>
                <div className=" col-sm">
                    <div className="  mb-3">
                        <di className="text-centre   ">
                            <img alt="logo" src={service.image1} className="d-inline-block w-100  align-top" />
                        </di>
                    </div>
                </div>
                </Fade>
            </div>

            <div className="row text-dark align-items-center text-center">
            <Fade right>
                <div className="order-sm-1 col-sm">
                    <div className=" mb-3">
                        <di className="text-centre  ">
                            <h3 className="card-title ">{service.descriptionTitle2}</h3>
                            <p className="card-text ">{service.description2}</p>
                        </di>
                    </div>
                </div>
                </Fade>
                <Fade bottom>
                <div className="order-sm-0 col-sm">
                    <div className="  mb-3">
                        <di className="text-centre   ">
                            <img alt="logo" src={service.image2} className="d-inline-block w-100 align-top" />
                        </di>
                    </div>
                </div>
                </Fade>
            </div>
        </Container>
    )
}

export default ServicePage





