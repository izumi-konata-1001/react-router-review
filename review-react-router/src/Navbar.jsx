import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { TfiMenu } from 'react-icons/tfi';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="NavbarContainer">
      <div className="WebsiteHeader">
        <div className="WebsiteTitle">
          Rate Your University Course
        </div>
        <div className="NavButton" onClick={handleMenuClick}>
          <TfiMenu />
        </div>
      </div>
      <nav className={`Navlink ${showNav ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/university_List">Universities</Link></li>
        <li><Link to="/user">User</Link></li>
      </nav>
    </div>
  );
}

export default Navbar;