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
                <TimelineDot>
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
                <TimelineDot>
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
                <TimelineDot>
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
                <TimelineDot>
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
                <TimelineDot>
                  <SchoolIcon/>
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
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
        <Paper className="paper" elevation={3}>
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
              <AccordionDetails>
                <Typography>
                  Custom Objects, Formulas, Validation Rules, Profiles,
                  Permission Sets, Workflows, Approval Processes, Email
                  Templates, Process Builder, Flows
                </Typography>
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
                <Typography>
                  Classes, Interfaces, Triggers, Batch Apex, Queueable, Callouts
                </Typography>
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
                <Typography>
                  REST API, SOAP API, Bulk API, Metadata API, Webservices,
                  Informatica
                </Typography>
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
                <Typography>
                  Visualforce, Aura Components, Lightning Web Components, SLDS
                </Typography>
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
                <Typography>
                  Tableau, Conga, Salesforce Reports/Dashboards
                </Typography>
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
                <Typography>
                  coding best practices, bulkification, fflib, service classes,
                  test factories, enterprise architecture, scalability,
                  reliability
                </Typography>
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
                <Typography>
                  VSCode, IntelliJ, Eclipse, Developer Console
                </Typography>
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
                <Typography>
                  Salesforce CLI, SFDX, CI/CD (Azure DevOps)
                </Typography>
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
                <Typography>
                  Azure Boards, ServiceNow, Workfront, Jira
                </Typography>
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
                <Typography>JavaScript, Java, SQL, Excel</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
export default AboutMe;
