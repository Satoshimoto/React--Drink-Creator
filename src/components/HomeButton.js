import React from "react";
import { NavLink } from "react-router-dom";

const HomeButton = props => {
  return (
    <NavLink
      to="/"
      className="navigation_container_logo"
      onClick={props.onClick}
    >
      <p>
        <i className="fas fa-home logoIcon" /> Home
      </p>
    </NavLink>
  );
};

export default HomeButton;
