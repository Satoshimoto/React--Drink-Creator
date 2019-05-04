import React from "react";
import "../styles/CreatedRecipes.scss";

const CreatedRecipes = props => {
  // Creat steps what you need to create drink
  function CreateList(item) {
    let list = [];
    for (var i = 0; i < item.elements; i++) {
      list.push(
        <li key={item.products[i].productName}>
          {item.products[i].productName} - {item.products[i].stack}
        </li>
      );
    }
    return list;
  }
  // Create container for created drinks
  let recipes = props.createdDrinks.map(item => (
    <div key={item.name} className="createdRecipes_container">
      <h3 className="createdRecipes_container_drinkName">{item.name}</h3>
      <div className="createdRecipes_container_img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="createdRecipes_container_recipes">
        <ul>{CreateList(item)}</ul>
      </div>
      <div className="createdRecipes_container_instruction">
        <h3>How to create</h3>
        <p>{item.recipe}</p>
      </div>
    </div>
  ));
  return (
    <>
      <section className="createdRecipes_section">
        <h3>Drink Recipes</h3>
        <div>
          {recipes.length ? (
            recipes
          ) : (
            <p className="createdRecipes_alert">
              You did't create any drink so you don't have any recipes here. Try
              to create drink and then come here again.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default CreatedRecipes;
