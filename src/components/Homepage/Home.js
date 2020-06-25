import React from 'react';
import './Home.scss'
import bg from '../../images/bg.svg'
import Aux from '../../hoc/Aux';
import Fade from 'react-reveal/Fade';
import bigData from '../../images/big-data.svg'
import migration from '../../images/cloud-migrate.svg'
import throughput from '../../images/throughput.svg'
import devops from '../../images/devops_icon.svg'
import logo from '../../images/logo.png';
import ContactForm from '../Contact/ContactForm'
import { Link } from 'react-router-dom'


const Home = () => {

    const scroll = () => {
        const contactus = document.getElementById('contact')
        contactus.scrollIntoView({behavior: "smooth"})

    }
    const isMobile = (window.innerWidth < 900)
    return(
        <Aux>
            { isMobile
                ?
                    <img id = "mobile-logo" src = {logo} alt="ScaleHaus"/>
                :
                    null
            }
            <div className = "marketing">
                <img src = {bg} alt = "Cloud-World"/>
                <div className = "statement">
                    <h1>One Stop Shop For All Your Cloud Needs.</h1>
                    <p>With modern technology and major events leading to the remote interaction of employees and clients alike, the push to migrate to the cloud are larger than ever before. With security, reliable data flows, and positive customer experience all critical, ScaleHaus is here to jump start your company in all of your cloud and delivery needs.</p>
                    <button onClick = {scroll} >Get Started</button>
                </div>
            </div>
            <h1 id="why-heading">How will ScaleHaus Transform Your Business?</h1>
            <div className = "why">
                <Fade bottom distance='15%' duration={2000}>
                    <div className = "feat-item">
                        <div className = "text">
                            <h1>Cloud Migration</h1>
                            <p>Whether you are looking to migrate from on-prem or migrate from one cloud provider to another, we remove the headache.</p>
                        </div>
                        <img src={migration} alt = "migrate"/>
                        <Link to ='/cloud-migration'><button>Migrate</button></Link>
                    </div>
                </Fade>
                <Fade bottom distance='15%' duration={2000}>
                    <div className = "feat-item">
                        <div className = "text">
                            <h1>Monitoring</h1>
                            <p>Whether it be server monitoring or APM, ScaleHaus will make sure you don't miss a beat. Catch issues before your clients.</p>
                        </div>
                        <img src={throughput} alt = "Secure"/>
                        <Link to ='/monitoring'><button>Monitor</button></Link>
                    </div>
                </Fade>
                <Fade bottom distance='15%' duration={2000}>
                    <div className = "feat-item">
                        <div className = "text">
                            <h1>DevOps & Enhanced Delivery</h1>
                            <p>Make deployments flawless with our CI/CD. Save resources by streamlining deployments and eliminating manual tasks.</p>
                        </div>
                        <img src={devops} alt = "devops"/>
                        <Link to ='/devops'><button>Deliver</button></Link>
                    </div>
                </Fade>
                <Fade bottom distance='15%' duration={2000}>
                    <div className = "feat-item">
                        <div className = "text">
                            <h1>Infrastructure as Code & Docker Containers</h1>
                            <p>Eradicate manual environment build's and significantly reduce errors with IaC. ScaleHaus provides moduling and training to get your environment automated and stabilized.</p>
                        </div>
                        <img src={bigData} alt = "data"/>
                        <Link to ='/iac'><button>Construct</button></Link>
                    </div>
                </Fade>
            </div>
            <ContactForm/>
        </Aux>
    )
}

export default Home;