import * as React from "react";
import Button from "@mui/material/Button";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import "./navbar.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HikingIcon from '@mui/icons-material/Hiking';

const Navbar = () => {
  return (
    <div className="navigation-menu">
      <div className="nameAndTabs">
        <div className="nameAndContactInfo">
          <div className="name">
            <h1 className="nameText">Christopher Laneville</h1>
            <Breadcrumbs separator="" className="navLinks" aria-label="breadcrumb">
              <Link
                underline="hover"
                color="primary"
                href="mailto:lanevillec@gmail.com"
              >
                <EmailIcon/>
              </Link>
              <Link
                underline="hover"
                color="primary"
                href="https://linkedin.com/in/chrislaneville"
              >
                <LinkedInIcon/>
              </Link>
              <Link
                underline="hover"
                color="primary"
                href="https://trailblazer.me/id/lanevillec"
              >
                <HikingIcon/>
              </Link>
            </Breadcrumbs>
          </div>
          <Breadcrumbs className="contactList" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              home
            </Link>
            <Link underline="hover" color="inherit" href="/Projects">
              projects
            </Link>
            <Link underline="hover" color="inherit" href="/Interests">
              extra
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
