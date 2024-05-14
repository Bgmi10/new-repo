import React, { useState } from "react";
import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClock, faClose } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <FontAwesomeIcon
        icon={!isOpen ? faBars : faClose}
        style={{ cursor: "pointer", color: "white", marginRight: "10px" }}
        onClick={toggleMenu}
      />
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
