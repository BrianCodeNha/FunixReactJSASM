import  {DISHES } from '../shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './Footer';
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
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishID) =>this.onDishSelect(dishID)}/>
        <DishdetailComponent dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer />
      </div>
    );
  }
}

export default Main;