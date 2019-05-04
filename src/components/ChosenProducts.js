import React from "react";
import "../styles/ChosenProducts.scss";

const ChoosenProducts = props => {
  // section choosen products - showing all active products
  let products = props.products.map(item => (
    <div key={item.id} style={{ border: "1px solid green" }}>
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
    </div>
  ));
  return (
    <>
      <section className="chosenProducts_section">
        <h3>Active products</h3>
        <div className="chosenProducts_section_container">
          {products.length ? (
            products
          ) : (
            <p className="chosenProducts_alert">You have 0 active product</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ChoosenProducts;
