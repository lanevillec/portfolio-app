import React from 'react';
import '../components/navbar.css';
const AboutMe = () =>{
  return (
    <div className="aboutMePage">
      <div className="aboutMeComp overview">
        <h2>Salesforce developer-scrum master-project manager with over 3.5 years of experience delivering innovative, thoughtful, and scalable solutions on the lightning platform.</h2>
      </div>
      <div className="aboutMeComp skills">
        <h2>Skills</h2>
        <ul className="skillList">
          <li> Salesforce Configuration: Custom Objects, Formulas, Validation Rules, Profiles, Permission 
Sets, Workflows, Approval Processes, Email Templates, Process Builder, Flows</li>
          <li>Apex: Classes, Interfaces, Triggers, Batch Apex, Queueable, Callouts, etc</li>
          <li>Integration: REST API, SOAP API, Bulk API, Metadata API, Webservices, Informatica</li>
          <li>User Interface: Visualforce, Aura Components, Lightning Web Components, SLDS</li>
          <li>Reporting: Tableau, Conga, Salesforce Reports/Dashboards</li>
          <li>Design Patterns: coding best practices, bulkification, fflib, service classes, test factories, 
enterprise architecture, scalability, reliability</li>
          <li>IDE: VSCode, IntelliJ, Eclipse, Developer Console</li>
          <li>Release: Salesforce CLI, SFDX, CI/CD (Azure DevOps)</li>
          <li>Agile: Azure Boards, ServiceNow, Workfront, Jira</li>
          <li>Other Languages: JavaScript, Java, SQL, Excel</li>
        </ul>
      </div>
      <div className="aboutMeComp certifications">
        <h3>Certifications</h3>
      </div>
      <div className="aboutMeComp experience">experience</div>
      <div className="aboutMeComp hobbiesInterests">hobbies/interests</div>
    </div>
  );
}
export default AboutMe;
