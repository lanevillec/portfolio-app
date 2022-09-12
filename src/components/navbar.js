import React from 'react';
import './navbar.css';
import LinkedInIcon from '../icons/linkedInIcon.png';
import { Link } from "react-router-dom";
const Navbar = () => {

  const selectTab = (e) => {

    e.preventDefault();
    let currentTab = e.currentTarget.id;

    var tabList = document.getElementById('tabList').childNodes;
    tabList.forEach(tab => {
      tab.id === currentTab ? tab.classList.add('selectedTab') : tab.classList.remove('selectedTab');
    });
  }

  return (
    <div className="navigation-menu">
      <div className="nameAndTabs">
        <div className="nameAndContactInfo">
          <h1 className="name">Christopher Laneville</h1>
          <image src={LinkedInIcon}/>
          <ul className="contactList">
            <li className="contactLink">
              <a href="mailto:lanevillec@gmail.com" style={{textDecoration: 'none'}} >email</a>
            </li>
            <li className="contactLink">
              <a rel="noreferrer" href="https://www.linkedin.com/in/chrislaneville" target="_blank" style={{textDecoration: 'none'}} >linkedIn</a>
            </li>
            <li className="contactLink">
              <a  rel="noreferrer" href="https://trailblazer.me/id/lanevillec" target="_blank" style={{textDecoration: 'none'}} >trailhead</a>
            </li>
          </ul>
        </div>
        <ul id="tabList" className="tabList">
        <li id='About Me' className="tab selectedTab" onClick={selectTab}>
            {/* Endpoint to route to About Me component */}
            <Link id='About Me' name='About Me' style={{textDecoration: 'none'}} to="/aboutMe">Profile</Link>
          </li>
          <li id='Projects' className="tab" onClick={selectTab}>
            {/* Endpoint to route to Projects component */}
            <Link id='Projects' name='Projects' style={{textDecoration: 'none'}} to="/projects">Projects</Link>
          </li>
          <li id='Interests' className="tab" onClick={selectTab}>
            {/* Endpoint to route to Interests component */}
            <Link id='Interests' name='Interests' style={{textDecoration: 'none'}} to="/interests">Interests</Link>
          </li>
        </ul>
        </div>
    </div>
  );
};
export default Navbar;