import React, { useState } from "react";
import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClock, faClose } from "@fortawesome/free-solid-svg-icons"; // Import the CSS file where the styles are defined

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathlocation  = window.innerWidth >= 1200

  return (
    <div className="dropdown">
   { !pathlocation ?  < FontAwesomeIcon icon={!isOpen ? faBars : faClose}  style={{cursor:"pointer", color:"white", marginRight:"-20px"}}onClick={toggleMenu} /> : null}
         
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Home</a>
          <a href="#">Programs</a>
          <a href="#">Contact Us</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
