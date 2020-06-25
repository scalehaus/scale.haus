import React from 'react';
import Aux from '../../hoc/Aux'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import './Service.scss'
import ContactForm from '../Contact/ContactForm'

const Service = (props) => {
    const isMobile = (window.innerWidth < 900)
    return(
        <Aux>
            { isMobile
                ?
                    <Link to='/'><img id = "mobile-logo" src = {logo} alt="ScaleHaus"/></Link>
                :
                    null
            }
            <div className = "marketing">
                <img src = {props.bg} alt = {props.alt} style={props.style}/>
                <div className = "statement">
                    <h1>{props.heading}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className = "main-info">
                {props.img.map( img => {
                    return (
                        <div className = "services-imgs">
                            <img src = {img.img} alt = "service"/>
                            <h1>{img.title}</h1>
                            <p>{img.text}</p>
                        </div>
                    )
                })
            }
            </div>
            <ContactForm />
        </Aux>
    )
}

export default Service;