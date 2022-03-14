import { DISHES } from "../shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
import React from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./Footer";
import DishdetailComponent from "./DishdetailComponent ";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default Main;
