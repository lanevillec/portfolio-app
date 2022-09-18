import React from "react";
import "./AboutMe.css";
import SFAdmin from "../icons/SFAdmin.png";
import SFAdvAdmin from "../icons/SFAdvAdmin.png";
import SFDevI from "../icons/SFDevI.png";
import SFDevII from "../icons/SFDevII.png";
import SFJScript from "../icons/SFJScript.png";
import SFPlatAppBuilder from "../icons/SFPlatAppBuilder.png";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SchoolIcon from '@mui/icons-material/School';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ComputerIcon from '@mui/icons-material/Computer';

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const AboutMe = () => {
  return (
    <div className="aboutMePage">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <div className="aboutMeComp overview">
          <h2>
            Salesforce developer-scrum master-project manager with over 3.5
            years of experience delivering innovative, thoughtful, and scalable
            solutions on the lightning platform.
          </h2>
        </div>
        <Paper className="paper" elevation={3}>
          <h2 className="paperHeader">Journey</h2>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
              <p className="timelineYear">Today</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <EmojiEmotionsIcon/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timelineContent">
                <h3 className="timelineContentHeader">Neuberger Berman</h3>
                <p className="timelineContentBody">
                  salesforce developer - scrum master - project manager
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                <p className="timelineYear">2019</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <ComputerIcon/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timelineContent">
                <h3 className="timelineContentHeader">FDM Group</h3>
                <p className="timelineContentBody">technology consultant</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
              <p className="timelineYear">2018</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <AutoStoriesIcon/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timelineContent">
                <h3 className="timelineContentHeader ">Restaurant Career</h3>
                <p className="timelineContentBody">
                  line cook - general manager - sous chef
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
              <p className="timelineYear">2012</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <RestaurantIcon/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timelineContent">
                <h3 className="timelineContentHeader">University at Albany</h3>
                <p className="timelineContentBody">
                  b.s. physics, minor computer science
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
              <p className="timelineYear">2008</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <SchoolIcon/>
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent className="timelineContent"></TimelineContent>
            </TimelineItem>
          </Timeline>
        </Paper>
        <Paper className="paper" elevation={3}>
          <h2 className="paperHeader">Projects</h2>
          <Card
            className="projectCard"
            sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
            elevation={0}
          >
            <CardContent>A file folder system native to Salesforce</CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            className="projectCard"
            sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
            elevation={0}
          >
            <CardContent>
              An integration from Salesforce to a deal closing tool
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            className="projectCard"
            sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
            elevation={0}
          >
            <CardContent>An org to org migration</CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Paper>
        <Paper className="paper" elevation={3}>
          <h2 className="paperHeader">Certs</h2>
          <ul className="sfCertList">
            <li>
              <img className="sfCertIcon" src={SFAdmin} alt="SFAdmin" />
            </li>
            <li>
              <img className="sfCertIcon" src={SFAdvAdmin} alt="SFAdvAdmin" />
            </li>
            <li>
              <img
                className="sfCertIcon"
                src={SFPlatAppBuilder}
                alt="SFPlatAppBuilder"
              />
            </li>
            <li>
              <img className="sfCertIcon" src={SFDevI} alt="SFDevI" />
            </li>
            <li>
              <img className="sfCertIcon" src={SFDevII} alt="SFDevII" />
            </li>
            <li>
              <img className="sfCertIcon" src={SFJScript} alt="SFJScript" />
            </li>
          </ul>
        </Paper>
        <Paper className="paper skills" elevation={3}>
          <h2 className="paperHeader">Skills</h2>
          <div className="accordionContainer">
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Salesforce Configuration</Typography>
              </AccordionSummary>
              <AccordionDetails className="accordionDetails">
                <ul className="accordionList">
                  <li className="accordionListItem">Custom Objects</li>
                  <li className="accordionListItem">Formulas</li>
                  <li className="accordionListItem">Validation Rules</li>
                  <li className="accordionListItem">Profiles</li>
                  <li className="accordionListItem">Permission Sets</li>
                  <li className="accordionListItem">Workflows</li>
                  <li className="accordionListItem">Approval Processes</li>
                  <li className="accordionListItem">Email Templates</li>
                  <li className="accordionListItem">Process Builder</li>
                  <li className="accordionListItem">Flows</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Apex</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">Classes</li>
                  <li className="accordionListItem">Interfaces</li>
                  <li className="accordionListItem">Triggers</li>
                  <li className="accordionListItem">Batch Apex</li>
                  <li className="accordionListItem">Queueable</li>
                  <li className="accordionListItem">Callouts</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Integration</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">REST API</li>
                  <li className="accordionListItem">SOAP API</li>
                  <li className="accordionListItem">Bulk API</li>
                  <li className="accordionListItem">Metadata API</li>
                  <li className="accordionListItem">Webservices</li>
                  <li className="accordionListItem">Informatica</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>User Interface</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">Lightning Web Components</li>
                  <li className="accordionListItem">Aura Components</li>
                  <li className="accordionListItem"> Visualforce</li>
                  <li className="accordionListItem">SLDS</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Reporting</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">Salesforce Reports/Dashboards</li>
                  <li className="accordionListItem">Conga</li>
                  <li className="accordionListItem">Tableau</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Design Patterns</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">coding best practices</li>
                  <li className="accordionListItem">bulkification</li>
                  <li className="accordionListItem">fflib</li>
                  <li className="accordionListItem">service classes</li>
                  <li className="accordionListItem">test factories</li>
                  <li className="accordionListItem">enterprise architectures</li>
                  <li className="accordionListItem">scalability</li>
                  <li className="accordionListItem">reliability</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>IDE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">VSCode</li>
                  <li className="accordionListItem">IntelliJ</li>
                  <li className="accordionListItem">Eclipse</li>
                  <li className="accordionListItem">Developer Console</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Release</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">Salesforce CLI</li>
                  <li className="accordionListItem">SFDX</li>
                  <li className="accordionListItem">CI/CD (Azure DevOps)</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Agile</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">Azure Boards</li>
                  <li className="accordionListItem">ServiceNow</li>
                  <li className="accordionListItem">Workfront</li>
                  <li className="accordionListItem">Jira</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}
              >
                <Typography>Other Languages</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordionList">
                  <li className="accordionListItem">JavaScript</li>
                  <li className="accordionListItem">Java</li>
                  <li className="accordionListItem">SQL</li>
                  <li className="accordionListItem">Excel</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
export default AboutMe;
