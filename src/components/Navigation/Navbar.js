import React from 'react';
import { Link } from 'react-router-dom'
import Aux from '../../hoc/Aux'
import './Navbar.scss'
import Logo from '../../images/logo.png'

class Navbar extends React.Component {
    render() {
    if (window.innerWidth >= 900) {
        console.log('Hello')
        return(
            <Aux>
                <div className = "main-nav">
                    <div className = "logo">
                        <Link to = "/"><img src = {Logo} alt = "ScaleHaus"/></Link>
                    </div>
                    <div className = "main-links">
                        <Link to= "/cloud-migration">Cloud Migration</Link>
                        <Link to= "/devops">DevOps</Link>
                        <Link to= "/monitoring">Monitoring</Link>
                        <Link to= "/iac">IaC</Link>
                    </div>
                </div>
            </Aux>
        )
    } else {
        console.log('mobile')
        return(
            <Aux>
                <div className = "container">
                    <div className="mobile-nav" onClick = {this.props.openNav}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div id="mySidenav" className="sidenav">
                        <Link to="/cloud-migration" onClick={this.props.openNav}>Cloud Migration</Link>
                        <Link to="/devops" onClick={this.props.openNav}>DevOps</Link>
                        <Link to="/iac" onClick={this.props.openNav}>IaC</Link>
                        <Link to="/monitoring" onClick={this.props.openNav}>Monitoring</Link>
                    </div>
                </div>
            </Aux>
        )}
    }
}

export default Navbar;