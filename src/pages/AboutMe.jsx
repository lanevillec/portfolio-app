import React from 'react';
import './AboutMe.css';
import SFAdmin from '../icons/SFAdmin.png';
import SFAdvAdmin from '../icons/SFAdvAdmin.png';
import SFDevI from '../icons/SFDevI.png';
import SFDevII from '../icons/SFDevII.png';
import SFJScript from '../icons/SFJScript.png';
import SFPlatAppBuilder from '../icons/SFPlatAppBuilder.png';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const AboutMe = () =>{
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
          <h2 className="paperHeader">My Journey</h2>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                Today
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
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
                2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timelineContent">
                <h3 className="timelineContentHeader">FDM Group</h3>
                <p className="timelineContentBody">
                  technology consultant
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                2018
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timelineContent">
                <h3 className="timelineContentHeader ">Restaurant Career</h3>
                <p className="timelineContentBody">line cook - general manager - sous chef</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                2012
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
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
                2008
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
          </Timeline>
        </Paper>
        <Paper className="paper" elevation={3}>
          <h2 className="paperHeader">My Projects</h2>
          <Card className="projectCard" sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}>
            <CardContent>
              A file folder system native to Salesforce
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className="projectCard" sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}>
            <CardContent>
              An integration from Salesforce to a deal closing tool
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className="projectCard" sx={{ minWidth: 275, backgroundColor: "#F3F3F7" }}>
            <CardContent>
              An org to org migration
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Paper>
        <Paper className="paper" elevation={3}>
          <h2 className="paperHeader">My Certs</h2>
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
          <h2 className="paperHeader">My Skills</h2>

        </Paper>
      </Box>
    </div>
  );
}
export default AboutMe;
