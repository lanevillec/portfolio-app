import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/dogs">Dogs</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/Goats">Goats</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;