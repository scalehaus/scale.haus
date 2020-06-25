import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className = "footer">
            <div className = "footer-content">
                <div className = 'footer-col'>
                    <h3>Our Services</h3>
                    <Link to = '/cloud-migration'>Cloud Migration</Link>
                    <Link to = '/devops'>DevOps</Link>
                    <Link to = '/monitoring'>Monitoring</Link>
                    <Link to = '/iac'>Infrastructure as Code</Link>
                </div>
            <div className = 'footer-col'>
                <h3>Legal</h3>
                <Link to = '/privacy-policy'>Privacy Policy</Link>
            </div>
            </div>
        </div>
    )
}

export default Footer;