import React from 'react'
import { Container } from 'react-bootstrap'
import Service from './Service';
import {ServiceList1,ServiceList2} from './ServiceList'

const Services = () => {
    const Style = {

        background: " #18538e "

    };

    return (

        <Container >
            <div style={Style} className="row text-center">
            {ServiceList1.map(el=><Service id={el.id} key={el.id} title={el.title} description={el.description} logoUrl={el.logoUrl} />)}
            </div>
            <div style={Style} className="row text-center">
            {ServiceList2.map(el=><Service  id={el.id} key={el.id} title={el.title} description={el.description} logoUrl={el.logoUrl} />)}
            </div>
        </Container>
    )
}

export default Services
