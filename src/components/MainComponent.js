import  {DISHES } from '../shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Menu from './MenuComponent';
import DishdetailComponent from './DishdetailComponent ';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID});   
}

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishID) =>this.onDishSelect(dishID)}/>
        <DishdetailComponent dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;