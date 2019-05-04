import React from "react";
import "../styles/Navigation.scss";
import HomeButton from "../components/HomeButton";
import RecipesButton from "../components/RecipesButton";
import ProductsButton from "../components/ProductsButton";

class Navigation extends React.Component {
  state = {
    location: "/"
  };

  //checking path location and set new one.
  changePath = e => {
    let location = e.currentTarget.pathname;
    this.setState({
      location
    });
  };

  render() {
    return (
      <>
        <div className="navigation_container">
          {this.state.location === "/" ? (
            <>
              <HomeButton onClick={e => this.changePath(e)} />
              <RecipesButton onClick={e => this.changePath(e)} />
              <ProductsButton onClick={e => this.changePath(e)} />
            </>
          ) : this.state.location === "/recipes" ? (
            <>
              <HomeButton onClick={e => this.changePath(e)} />
              <ProductsButton onClick={e => this.changePath(e)} />
            </>
          ) : this.state.location === "/products" ? (
            <>
              <HomeButton onClick={e => this.changePath(e)} />
              <RecipesButton onClick={e => this.changePath(e)} />
            </>
          ) : null}
        </div>
      </>
    );
  }
}

export default Navigation;

// const Navigation = () => {
//   return (
//     <>
//       <div className="navigation_container">
//         <HomeButton />
//         <RecipesButton />
//       </div>
//     </>
//   );
// };

// export default Navigation;
