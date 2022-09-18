import * as React from 'react';
import Button from '@mui/material/Button';
import { Breadcrumbs, Link, Typography} from "@material-ui/core";
import './navbar.css';
const Navbar = () => {
  /*const selectTab = (e) => {

    e.preventDefault();
    let currentTab = e.currentTarget.id;

    var tabList = document.getElementById('tabList').childNodes;
    tabList.forEach(tab => {
      tab.id === currentTab ? tab.classList.add('selectedTab') : tab.classList.remove('selectedTab');
    });
    
    routeChange(currentTab);

  }*/

  /*let navigate = useNavigate();
  const routeChange = (currentTab) => {
    let path = '/' + currentTab;
    navigate(path);
  }*/

  return (
    <div className="navigation-menu">
      <div className="nameAndTabs">
        <div className="nameAndContactInfo">
          <div className="name">
            <h1 className="nameText">Christopher Laneville</h1>
            <Breadcrumbs className="nav" aria-label="breadcrumb">
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
          <Breadcrumbs className="contactList" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="mailto:lanevillec@gmail.com">
              email
            </Link>
            <Link underline="hover" color="inherit" href="https://linkedin.com/in/chrislaneville">
              linkedin
            </Link>
            <Link underline="hover" color="inherit" href="https://trailblazer.me/id/lanevillec">
              trailhead
            </Link>
          </Breadcrumbs>
        </div>
        <ul id="tabList" className="tabList">
        {/*<li id='AboutMe' className="tab selectedTab" onClick={selectTab}>
            <Link id='AboutMe' name='About Me' style={{textDecoration: 'none'}} to="/aboutMe">Profile</Link>
          </li>
          <li id='Projects' className="tab" onClick={selectTab}>
            <Link id='Projects' name='Projects' style={{textDecoration: 'none'}} to="/projects">Projects</Link>
          </li>
          <li id='Interests' className="tab" onClick={selectTab}>
            <Link id='Interests' name='Interests' style={{textDecoration: 'none'}} to="/interests">Personal</Link>
          </li>*/}
        </ul>
        </div>
    </div>
  );
};
export default Navbar;