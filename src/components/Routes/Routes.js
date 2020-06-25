import React from "react";
import { Switch } from "react-router-dom";
import Home from '../Homepage/Home';
import Service from '../Services/Service';
import cloudbg from '../../images/cloud-detail.svg';
import devops from '../../images/devops.svg';
import { Route } from 'react-router-dom';
import iac from '../../images/iac.svg';
import ScrollIntoView from '../ScrollIntoView'
import CloudData from '../data/cloudMigration.js'
import devopsData from '../data/devops.js'
import iacData from '../data/iac.js'
import monitoringData from '../data/monitoring'
import monitoring from '../../images/monitoring.png'
import PrivacyPolicy from '../legal/PrivacyPolicy'

const Routes = () => {
    const migrateImg = CloudData
    const devopsImg = devopsData
    const monitorImg = monitoringData

    return(
    <ScrollIntoView>    
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route
            path='/cloud-migration'
            render={(props) => (
                <Service {...props} 
                heading = 'Migrate to the Cloud Hassle-free'
                description="ScaleHaus engineers will move your company to the cloud and hand over to you to manage. We offer long-term support so that your business thrives."
                bg={cloudbg} 
                img = {migrateImg}
                />
            )}
            />
            <Route
            path='/devops'
            render={(props) => (
                <Service {...props} 
                heading = 'DevOps Implementation'
                description="Stabilize production by adapting to agile and devops methodologies. Integrate our DevOps solutions with your cloud infrastructure to ensure day to day operations go unhindered. Trust us, we don't like waking up in the middle of the night any more than you do."
                bg={devops}
                img = {devopsImg}
                />
            )}
            />  
            <Route
            path='/iac'
            render={(props) => (
                <Service {...props} 
                heading = 'Infrastructure as Code & Docker Containers'
                description='ScaleHaus will get your company up to speed by automating infrastructure builds and dockerizing your applications. Reduce cost, and bug troubleshooting with terraform and docker to make sure you know what to expect in production.'
                bg={iac}
                style ={{paddingBottom:0}}
                img = {iacData}
                />
            )}
            />  
            <Route
            path='/monitoring'
            render={(props) => (
                <Service {...props} 
                heading = 'Application and Network Monitoring'
                description='Knowing what events are occuring throughtout your apps and infrastructure are key to client retention and cost savings. Catch potential issues in production before your clients do with APM, Network, and Synthetic monitoring.'
                bg={monitoring}
                img = {monitorImg}
                />
            )}
            />
            <Route path = '/privacy-policy' exact component={PrivacyPolicy}/>
        </Switch>
    </ScrollIntoView>
    )
}

export default Routes;