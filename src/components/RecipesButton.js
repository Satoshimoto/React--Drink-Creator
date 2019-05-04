import React from "react";
import { NavLink } from "react-router-dom";

const RecipesButton = props => {
  return (
    <>
      <NavLink
        to="/recipes"
        className="navigation_container_recipes"
        onClick={props.onClick}
      >
        <p>
          <i className="fas fa-receipt recipesIcon" /> recipes
        </p>
      </NavLink>
    </>
  );
};

export default RecipesButton;
