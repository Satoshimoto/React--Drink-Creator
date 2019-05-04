import React from "react";
import { NavLink } from "react-router-dom";

const ProductsButton = props => {
  return (
    <>
      <NavLink
        to="/products"
        className="navigation_container_products"
        onClick={props.onClick}
      >
        <p>
          <i className="fas fa-lemon productsIcon" /> Products
        </p>
      </NavLink>
    </>
  );
};

export default ProductsButton;
