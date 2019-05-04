import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/HomePage.scss";

// Components
import MainPage from "../pages/MainPage";
import ChoosenProducts from "../components/ChosenProducts";
import CreatedRecipes from "../components/CreatedRecipes";
import Footer from "../components/Footer";

// Drinks images
import fail from "../images/failDrink.png";
import mojito from "../images/drinks/mojito.png";
import negroni from "../images/drinks/negroni.png";
import manhattan from "../images/drinks/manhattan.png";
import margarita from "../images/drinks/margarita.png";
import martini from "../images/drinks/martini.png";
import mimosa from "../images/drinks/mimosa.png";
import mintJulep from "../images/drinks/mint-julep.png";

// Products images
import cherry from "../images/cherry.png";
import lime from "../images/lime.png";
import mint from "../images/mint.png";
import sugar from "../images/cane_sugar.png";
import salt from "../images/salt.png";
import gin from "../images/gin.png";
import campari from "../images/campari.png";
import sweetVermouth from "../images/sweet_vermouth.png";
import tripleSecLikier from "../images/triple_sec_likier.png";
import dryVermouth from "../images/dry_vermouth.png";
import sparklingWine from "../images/sparkling_wine.png";
import orangeJuice from "../images/orange_juice.png";
import mapleSyrup from "../images/maple_syrup.png";
import burbon from "../images/burbon.png";
import angosturaBitters from "../images/angostura_bitters.png";
import tequila from "../images/tequila.png";
import olive from "../images/olives.png";
import bacardi from "../images/bacardi.png";
import vodka from "../images/vodka.png";
import whisky from "../images/whisky.png";

// Wait and hint images
import wait from "../images/wait.png";
import hint from "../images/hint.png";

class HomePage extends Component {
  state = {
    // Active products - products which user choose
    products: [],

    // Number how many times user can take hint
    hint: 2,

    // All possible combination
    drinkCombination: [
      [2, 3, 4, 18], // Mojito
      [8, 14, 15], // Manhattan
      [2, 5, 9, 16], // Margarita
      [6, 10, 17], // Martini
      [11, 12, 19], // Mimosa
      [11, 12, 20], // Mimosa
      [3, 13, 14], // Mint-julep
      [6, 7, 8] // Negroni
    ],

    // User drink combination - Number of active products
    choosenCombination: [],

    // Array with all products.
    allProducts: [
      {
        id: 1,
        name: "Cherry",
        img: cherry,
        active: false
      },
      {
        id: 2,
        name: "Lime",
        img: lime,
        active: false
      },
      {
        id: 3,
        name: "Mint",
        img: mint,
        active: false
      },
      {
        id: 4,
        name: "Cane sugar",
        img: sugar,
        active: false
      },
      {
        id: 5,
        name: "Salt",
        img: salt,
        active: false
      },
      {
        id: 6,
        name: "Gin",
        img: gin,
        active: false
      },
      {
        id: 7,
        name: "Campari",
        img: campari,
        active: false
      },
      {
        id: 8,
        name: "Sweet vermouth",
        img: sweetVermouth,
        active: false
      },
      {
        id: 9,
        name: "Triple sec likier",
        img: tripleSecLikier,
        active: false
      },
      {
        id: 10,
        name: "Dry vermouth",
        img: dryVermouth,
        active: false
      },
      {
        id: 11,
        name: "Sparkling wine ",
        img: sparklingWine,
        active: false
      },
      {
        id: 12,
        name: "Orange juice",
        img: orangeJuice,
        active: false
      },
      {
        id: 13,
        name: "Maple Syrup",
        img: mapleSyrup,
        active: false
      },
      {
        id: 14,
        name: "Burbon",
        img: burbon,
        active: false
      },
      {
        id: 15,
        name: "Angostura Bitters",
        img: angosturaBitters,
        active: false
      },
      {
        id: 16,
        name: "Tequila",
        img: tequila,
        active: false
      },
      {
        id: 17,
        name: "Olive",
        img: olive,
        active: false
      },
      {
        id: 18,
        name: "Bacardi",
        img: bacardi,
        active: false
      },
      {
        id: 19,
        name: "Vodka",
        img: vodka,
        active: false
      },
      {
        id: 20,
        name: "Whisky",
        img: whisky,
        active: false
      }
    ],

    // All drinks
    drinks: [
      {
        name: "Mojito",
        img: mojito,
        elements: 7,
        products: [
          {
            productName: "Bacardi",
            stack: "2 parts"
          },
          {
            productName: "Lime",
            stack: "1/2 "
          },
          {
            productName: "Mint",
            stack: "12 leaves"
          },
          {
            productName: "Caster sugar",
            stack: "2 bar spoons"
          },
          {
            productName: "Soda water",
            stack: "10 ml"
          },
          {
            productName: "Cubed ice",
            stack: "optional"
          },
          {
            productName: "Crushed ice",
            stack: "optional"
          }
        ],
        recipe:
          "Put the four lime wedges into a glass, then add the sugar and muddle (squish everything together) to release the lime juice. Put the mint leaves on one hand and clap. This bruises the leaves and releases the aroma. Rub the mint leaves around the rim of the glass and drop them in. Use a muddler, bar spoon (or even a rolling pin) to gently push the mint down into the lime juice. Half fill the glass with crushed ice and pour in the Bacardi Carta Blanca. Stir the mix together until the sugar dissolves. Top up with crushed ice, a splash of the soda water and garnish it with a sprig of mint"
      },
      {
        name: "Manhattan",
        img: manhattan,
        elements: 3,
        products: [
          {
            productName: "Burbon",
            stack: "60 ml"
          },
          {
            productName: "Sweet vermouth",
            stack: "30 ml"
          },
          {
            productName: "Angostura bitters",
            stack: "1.5 ml"
          }
        ],
        recipe:
          "Add all the ingredients into a mixing glass with ice, and stir until well-chilled. Strain into a chilled coupe. Garnish with a brandied cherry."
      },
      {
        name: "Margarita",
        img: margarita,
        elements: 6,
        products: [
          {
            productName: "Tequila",
            stack: "1 part"
          },
          {
            productName: "Triple sec liqueur",
            stack: "1/2 part"
          },
          {
            productName: "lime juice",
            stack: "1/2 part"
          },
          {
            productName: "lime wedge",
            stack: "1 piece"
          },
          {
            productName: "salt",
            stack: "enought to cover the rim of your glass"
          },
          {
            productName: "Cubed ice",
            stack: "opcional"
          }
        ],
        recipe:
          "Chill your glass (the easiest way is to fill it with ice). Put lots of ice and all of the ingredients into a shaker, then shake hard for about 30 seconds to chill the liquid really well. Run a lime wedge around the outside of the rim of your glass before rolling the rim in salt. Double strain the mix into the glass"
      },
      {
        name: "Martini",
        img: martini,
        elements: 4,
        products: [
          {
            productName: "Gin",
            stack: "90 ml"
          },
          {
            productName: "Dry vermouth",
            stack: "15 ml"
          },
          {
            productName: "Pimiento-stuffed olives",
            stack: "1 per drink"
          },
          {
            productName: "Ice cubes",
            stack: "optional"
          }
        ],
        recipe:
          "Fill a shaker three-fourths full with ice. Add gin and vermouth; cover and shake until condensation forms on outside of shaker. Strain into a chilled cocktail glass. Garnish with olives."
      },
      {
        name: "Mimosa",
        img: mimosa,
        elements: 3,
        products: [
          {
            productName: "Sparkling wine",
            stack: "105 ml"
          },
          {
            productName: "Orange juice",
            stack: "45 ml"
          },
          {
            productName: "Vodka or whisky",
            stack: "15 ml"
          }
        ],
        recipe:
          "Build the ingredients in the order given in a champagne flute. First pour in the vodka or whisky. (You can skip this step if you don't use vodka or whisky). Then pour in the orange juice. Next, pour in the Champagne. "
      },
      {
        name: "Mint-julep",
        img: mintJulep,
        elements: 3,
        products: [
          {
            productName: "Maple syrup",
            stack: "7.5 ml"
          },
          {
            productName: "Mint",
            stack: "8 leaves"
          },
          {
            productName: "Burbon",
            stack: "60 ml"
          }
        ],
        recipe:
          "In a Julep cup or rocks glass, lightly muddle the mint and syrup. Add the bourbon and pack tightly with crushed ice. Stir until the cup is frosted on the outside. "
      },
      {
        name: "Negroni",
        img: negroni,
        elements: 3,
        products: [
          {
            productName: "Gin",
            stack: "30 ml"
          },
          {
            productName: "Campri",
            stack: "30 ml"
          },
          {
            productName: "Sweet vermouth",
            stack: "30 ml"
          }
        ],
        recipe:
          "Add all the ingredients into a mixing glass with ice, and stir until well-chilled. Strain into a rocks glass filled with large ice cubes. Garnish with an orange peel. "
      }
    ],

    // Drinks created by user.
    userDrinks: []
  };

  // ============================= Function - adding product to active product section

  ChoosenProduct = (product, newAllProducts) => {
    // Products chosen by user - active
    let list = this.state.products;
    // Active combination
    let userCombination = this.state.choosenCombination;
    // Find Index which product was clicked
    let check = list.findIndex(item => item.id === product.id);
    // Checking that product is already in active combination
    let combination = userCombination.findIndex(item => item === product.id);
    // If product is already active that remove active product from array.
    if (check >= 0 && combination >= 0) {
      list.splice(check, 1);
      userCombination.splice(combination, 1);
    }
    // If product is not active then add to active products and sort
    else {
      list.push(product);
      userCombination.push(product.id);
      userCombination.sort(function(a, b) {
        return a - b;
      });
    }
    // Change state - deleting or adding product to active products and combination.
    this.setState({
      products: list,
      choosenCombination: userCombination,
      allProducts: newAllProducts
    });
  };

  // ==== Function - add drink to created drinks section

  addDrinkToCreated = index => {
    let userDrinks = this.state.userDrinks;
    let checking = "";
    let drinkName = "";

    switch (index) {
      case 0:
        drinkName = "Mojito";
        break;

      case 1:
        drinkName = "Manhattan";
        break;

      case 2:
        drinkName = "Margarita";
        break;

      case 3:
        drinkName = "Martini";
        break;

      case 4:
        drinkName = "Mimosa";
        break;

      case 5:
        drinkName = "Mint-julep";
        break;

      case 6:
        drinkName = "Negroni";
        break;

      default:
        drinkName = null;
        break;
    }
    // if userDrinks array is not empty then check which drink is already created
    if (userDrinks.length) {
      checking = userDrinks.findIndex(drink => drink.name === drinkName);

      if (checking === -1) {
        userDrinks.push(this.state.drinks[index]);
        this.setState({
          userDrinks
        });
      }
    }
    // If userDrinks array is empty then add created drink
    else {
      userDrinks.push(this.state.drinks[index]);
      this.setState({
        userDrinks
      });
    }
  };

  // === Function - mix products

  MixProducts = () => {
    // Image area - drinks, fail, wait, hint
    let drinkImage = document.querySelector(".mainPage_header_mixResult img");
    // Information area - fail, created, hint
    let mixInformation = document.querySelector(
      ".mainPage_header_mixInformation"
    );

    // If user didn't choose any product

    if (this.state.products.length === 0) {
      alert(
        "You did't choose any product so you can't mix nothing. Choose some products and then mix them together."
      );
      return null;
    }

    // Image and text - showing before mixing products
    drinkImage.src = wait;
    mixInformation.textContent = "Please wait.. I'm mixing products... ";
    mixInformation.style.color = "yellowgreen";

    setTimeout(() => {
      // Checking index of right combination
      let drink = this.state.drinkCombination.findIndex(
        item => item.join() === this.state.choosenCombination.join()
      );

      switch (drink) {
        case -1:
          drinkImage.src = fail;
          mixInformation.textContent =
            "Sorry, we don't know this combination. Please try to remove or add some products";
          mixInformation.style.color = "lightcoral";
          break;

        case 0:
          mixInformation.textContent =
            "Congratulation ! You created Mojito, check recipes section where you can find detail about how to create this drink";
          drinkImage.src = mojito;
          this.addDrinkToCreated(0);
          break;

        case 1:
          drinkImage.src = manhattan;
          mixInformation.textContent =
            "Nice! you created Manhattan drink, you can find recipe in recipes section";
          this.addDrinkToCreated(1);
          break;

        case 2:
          drinkImage.src = margarita;
          mixInformation.textContent =
            "Amazing ! You have created a margarita. You have to check recipe ! ";
          this.addDrinkToCreated(2);
          break;

        case 3:
          drinkImage.src = martini;
          mixInformation.textContent = "Wow! You created Martini, Enjoy!";
          this.addDrinkToCreated(3);
          break;

        case 4:
          drinkImage.src = mimosa;
          mixInformation.textContent =
            "Yummy ! You created Mimosa coctail, check recipe in recipes secition.";
          this.addDrinkToCreated(4);
          break;

        case 5:
          drinkImage.src = mimosa;
          mixInformation.textContent =
            "Great ! Mimosa is fantastic drink, check recipe and try create mimosa by your own.";
          this.addDrinkToCreated(4);
          break;

        case 6:
          drinkImage.src = mintJulep;
          mixInformation.textContent =
            "Yeah ! You created mint-julep drink ! It's great coctail. Enjoy !";
          this.addDrinkToCreated(5);
          break;

        case 7:
          drinkImage.src = negroni;
          mixInformation.textContent =
            "Well done ! You created Negroni ! It's fantastic drink, check recipes section and create your own negroni";
          this.addDrinkToCreated(6);
          break;

        default:
          mixInformation.textContent = "";
          break;
      }
      // after checking - set false in property item.active
      this.state.allProducts.forEach(item => (item.active = false));

      // set new values
      this.setState({
        chooseProduct: [],
        choosenCombination: [],
        products: []
      });
    }, 1000);
  };

  // ==== Function - give a hint to user

  needHint = () => {
    // Number of hint
    let hintNumber = this.state.hint;
    // All prodcucts
    let products = this.state.allProducts;
    // All posible combination
    let combination = this.state.drinkCombination;
    // Random number - max 7
    let rand = Math.floor(Math.random() * combination.length);
    // Hint image and information
    let hintInfo = "Please select products: ";
    let infoContainer = document.querySelector(
      ".mainPage_header_mixInformation"
    );
    infoContainer.style.color = "yellowgreen";
    let hintImg = document.querySelector(".mainPage_header_mixResult img");
    // subtraction by one
    hintNumber--;

    // if user don't have any hint show information about it and set 0 in state
    if (hintNumber < 0) {
      hintInfo =
        "Sorry you can't use hint button because you did it twice. Try to create some dirnks alone";

      infoContainer.textContent = hintInfo;
      infoContainer.style.color = "lightcoral";
      hintImg.src = "";

      this.setState({
        hint: 0
      });
    }
    // If user have a hint then show random combination (without last product)
    else {
      for (var i = 0; i < combination[rand].length - 1; i++) {
        let number = combination[rand][i];
        if (i + 1 === combination[rand].length - 1) {
          hintInfo +=
            products[number - 1].name + " and try to add one more product ";
        } else {
          hintInfo += products[number - 1].name + ", ";
        }
      }
      this.setState({
        hint: hintNumber
      });

      infoContainer.textContent = hintInfo;
      hintImg.src = hint;
    }
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <nav>
          <Navigation />
        </nav>
        <main className="main_container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <MainPage
                  chooseProduct={this.ChoosenProduct}
                  mixProducts={this.MixProducts}
                  allProducts={this.state.allProducts}
                  hint={this.needHint}
                  hintNumber={this.state.hint}
                />
              )}
            />
            <Route
              path="/products"
              exact
              render={() => <ChoosenProducts products={this.state.products} />}
            />
            <Route
              path="/recipes"
              exact
              render={() => (
                <CreatedRecipes createdDrinks={this.state.userDrinks} />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default HomePage;
