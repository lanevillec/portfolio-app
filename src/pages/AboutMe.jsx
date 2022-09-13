import React from 'react';
import '../components/navbar.css';
import SFAdmin from '../icons/SFAdmin.png';
import SFAdvAdmin from '../icons/SFAdvAdmin.png';
import SFDevI from '../icons/SFDevI.png';
import SFDevII from '../icons/SFDevII.png';
import SFJScript from '../icons/SFJScript.png';
import SFPlatAppBuilder from '../icons/SFPlatAppBuilder.png';
const AboutMe = () =>{
  return (
    <div className="aboutMePage">
      <div className="aboutMeComp overview">
        <h2>Salesforce developer-scrum master-project manager with over 3.5 years of experience delivering innovative, thoughtful, and scalable solutions on the lightning platform.</h2>
      </div>
      <div className="aboutMeComp skills">
        <h2>I am fluent in...</h2>
        <ul className="skillList">
          <li className="skill"> Salesforce Configuration: Custom Objects, Formulas, Validation Rules, Profiles, Permission 
Sets, Workflows, Approval Processes, Email Templates, Process Builder, Flows</li>
          <li className="skill">Apex: Classes, Interfaces, Triggers, Batch Apex, Queueable, Callouts, etc</li>
          <li className="skill">Integration: REST API, SOAP API, Bulk API, Metadata API, Webservices, Informatica</li>
          <li className="skill">User Interface: Visualforce, Aura Components, Lightning Web Components, SLDS</li>
          <li className="skill">Reporting: Tableau, Conga, Salesforce Reports/Dashboards</li>
          <li className="skill">Design Patterns: coding best practices, bulkification, fflib, service classes, test factories, 
enterprise architecture, scalability, reliability</li>
          <li className="skill">IDE: VSCode, IntelliJ, Eclipse, Developer Console</li>
          <li className="skill">Release: Salesforce CLI, SFDX, CI/CD (Azure DevOps)</li>
          <li className="skill">Agile: Azure Boards, ServiceNow, Workfront, Jira</li>
          <li className="skill">Other Languages: JavaScript, Java, SQL, Excel</li>
        </ul>
      </div>
      <div className="aboutMeComp certifications">
        <h2>What I've earned...</h2>
        <ul className="sfCertList">
          <li>
            <img className='sfCertIcon' src={SFAdmin} alt='SFAdmin'/>
          </li>
          <li>
            <img className='sfCertIcon' src={SFAdvAdmin} alt='SFAdvAdmin'/>
          </li>
          <li>
            <img className='sfCertIcon' src={SFPlatAppBuilder} alt='SFPlatAppBuilder'/>
          </li>
          <li>
            <img className='sfCertIcon' src={SFDevI} alt='SFDevI'/>
          </li><li>
            <img className='sfCertIcon' src={SFDevII} alt='SFDevII'/>
          </li><li>
            <img className='sfCertIcon' src={SFJScript} alt='SFJScript'/>
          </li>
        </ul>
      </div>
      <div className="aboutMeComp experience">Where I've worked...</div>
      <div className="aboutMeComp hobbiesInterests">Where I've learned...</div>
    </div>
  );
}
export default AboutMe;
