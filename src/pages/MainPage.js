import React from "react";
import "../styles/MainPage.scss";

// Images - image before mixing and baner image
import randomDrink from "../images/empty.png";
import baner from "../images/baner.png";

const MainPage = props => {
  // create container for all products
  let productsList = props.allProducts.map(product => (
    <div
      key={product.id}
      id={product.id}
      onClick={e => {
        // New array with new active products
        let newAllProducts = props.allProducts;
        // checking index which products is active
        let chooseProduct = newAllProducts.findIndex(
          item => item.id.toString() === e.currentTarget.id
        );

        // change active property
        newAllProducts[chooseProduct].active = !newAllProducts[chooseProduct]
          .active;

        props.chooseProduct(product, newAllProducts);
      }}
      style={
        product.active
          ? {
              backgroundColor: "#3eae4f"
            }
          : {
              backgroundColor: "#777"
            }
      }
    >
      <img src={product.img} alt={product.name} /> <h3> {product.name} </h3>
    </div>
  ));
  return (
    <>
      <header className="mainPage_header">
        <div className="mainPage_header_information">
          <div className="mainPage_header_baner">
            <img src={baner} alt="few alcohol and drinks" />
          </div>

          <h2> How does it work ? </h2>
          <p className="mainPage_header_instruction">
            Mix few products and check that you create some drink. If you
            created drink then you can check full recipe in recipes section.
            Good luck!
          </p>
        </div>
        <div className="mainPage_header_mixArea">
          <p className="mainPage_header_mixInformation" />
          <div className="mainPage_header_mixResult">
            <img src={randomDrink} alt="" />
          </div>
          <div
            onClick={props.mixProducts}
            className="mainPage_header_mixButton"
          >
            <p> mix products </p>
          </div>
          <div
            onClick={props.hint}
            className="mainPage_header_mixButton"
            style={{ border: "1px solid lightblue", width: "250px" }}
          >
            <p>
              Need hint ? You have
              {props.hintNumber
                ? props.hintNumber > 1
                  ? " " + props.hintNumber + " tries"
                  : " " + props.hintNumber + " try"
                : " " + props.hintNumber + " try"}
            </p>
          </div>
        </div>
      </header>
      <section className="mainPage_products">
        <h5> Click and choose products to mix </h5>
        <div className="mainPage_products_container"> {productsList} </div>
      </section>
    </>
  );
};

export default MainPage;
