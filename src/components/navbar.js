import * as React from "react";
import { Breadcrumbs } from "@material-ui/core";
import Link from "@mui/material/Link";
import "./navbar.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HikingIcon from "@mui/icons-material/Hiking";
import Box from "@mui/material/Box";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Interests from "../pages/Interests";
import ChatBotGPT from "../openai-quickstart-node/pages/index"

const Navbar = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navigation-menu">
      <div className="nameAndTabs">
        <div className="nameAndContactInfo">
          <div className="name">
            <h1 className="nameText">Christopher Laneville</h1>
            <Breadcrumbs
              separator=""
              className="navLinks"
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                color="primary"
                href="mailto:lanevillec@gmail.com"
              >
                <EmailIcon className="contactIcon" />
              </Link>
              <Link
                underline="hover"
                color="primary"
                href="https://linkedin.com/in/chrislaneville"
              >
                <LinkedInIcon className="contactIcon" />
              </Link>
              <Link
                underline="hover"
                color="primary"
                href="https://trailblazer.me/id/lanevillec"
              >
                <HikingIcon className="contactIcon" />
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <Box sx={{ width: "100%", padding: "0rem", margin: "0rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "0rem", margin: "0rem" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              variant="fullWidth"
            >
              <Tab label="About Me" {...a11yProps(0)} />
              <Tab label="Projects" {...a11yProps(1)} />
              <Tab label="Extra" {...a11yProps(2)} />
              <Tab label="ChatBot GPT" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AboutMe />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Projects />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Interests />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ChatBotGPT />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};
export default Navbar;
