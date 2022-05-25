import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="nav-content">
      <FontAwesomeIcon className="nav-icon" icon={faGlobeAsia} />
      <h1 className="nav-title">my travel journal.</h1>
    </div>
  );
}
